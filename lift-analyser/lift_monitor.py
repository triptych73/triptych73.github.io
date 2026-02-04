#!/usr/bin/env python3
import serial
import time
import re
import argparse
import logging
from collections import deque

# Attempt to import paho.mqtt, handle if missing (dev environment safety)
try:
    import paho.mqtt.client as mqtt
    from paho.mqtt.enums import CallbackAPIVersion
    MQTT_AVAILABLE = True
except ImportError:
    print("WARNING: paho-mqtt not installed. MQTT features will be disabled.")
    MQTT_AVAILABLE = False

# Firebase Setup - moved to LiftMonitor class to rely on logging config
FIREBASE_AVAILABLE = False
db = None

# ==============================================================================
#   CONFIGURATION & TIMING TABLE
#   (Refined from Real World Data Analysis)
# ==============================================================================
SETTINGS = {
    # --- HARDWARE ---
    'SERIAL_PORT': '/dev/ttyUSB0',
    'BAUD_RATE': 9600,
    'MQTT_BROKER': 'localhost',
    'MQTT_TOPIC_ROOT': 'lift_monitor',

    # --- DETECTION LOGIC ---

    # PREDICTION WINDOW: Time to wait after first AAA before guessing direction
    'PREDICTION_WINDOW': 2.5,

    # TIMEOUTS
    # Direction-specific timeouts for stop detection
    'ASCENT_TIMEOUT': 2.0,   # Ascents have frequent AAA, cut quickly
    'DESCENT_TIMEOUT': 5.0,  # Descents have sparse AAA, need patience

    # EXTENDED TIMEOUT (Safety Net):
    # Some descents (e.g. 2->0) have only 1 AAA total in 12s.
    # If we saw Doors Close recently, we extend patience to bridge the silence.
    'EXTENDED_MOVE_TIMEOUT': 10.0,

    # PRE-ROLL: Seconds of history to include BEFORE the first AAA
    'PRE_ROLL_SECONDS': 3.0,

    # RATE THRESHOLD (AAA per second)
    # Ascent: ~2.0+ AAA/sec
    # Descent: ~0.5 AAA/sec or less
    # Divider: 1.0 AAA/sec
    'ASCENT_RATE_THRESHOLD': 4.0,

    # MINIMUM TRIP DURATION (seconds)
    # Trips shorter than this are considered re-levelling events
    # Based on shortest timing table entry (8.0s for 3→2)
    'MIN_TRIP_DURATION': 4.5,

    # Tolerance for timing table matches (seconds)
    'TIMING_TOLERANCE': 3.0,
}

# Specific timing table provided by user
TIMING_TABLE = [
    {'from': 0, 'to': 1, 'time': 10.10}, #originally 11.1
    {'from': 1, 'to': 2, 'time': 9.60}, #originally 10.1
    {'from': 2, 'to': 3, 'time': 8.10}, #originall 8.6
    {'from': 3, 'to': 0, 'time': 13.70},
    {'from': 0, 'to': 2, 'time': 13.90}, #originally 15.9
    {'from': 2, 'to': 0, 'time': 11.70}, #originally 12.2
    {'from': 0, 'to': 3, 'time': 16.90}, #originally 18.9
    {'from': 3, 'to': 1, 'time': 10.40}, #originally 10.9
    {'from': 1, 'to': 3, 'time': 12.30}, #originally 13.3
    {'from': 3, 'to': 2, 'time': 6.00}, #originally 8.0
    {'from': 2, 'to': 1, 'time': 6.50}, #originally 8.5
    {'from': 1, 'to': 0, 'time': 7.40}  #originally 9.4
]

# Regex Patterns for stream parsing
PATTERNS = {
    'AAA': re.compile(b'AAA'),
    'A': re.compile(b'A'),  # Single A - always present during movement
    # Nh is REMOVED from logic, only kept if needed for raw logging debug
    'DoorClose': re.compile(b'i.@'),  # Doors Closing (Wildcard)
    'DoorOpenL0': re.compile(b' ha'), # Doors Opening L0
    'ArrL0': re.compile(b'8h'),       # Arrival L0
}

# ==============================================================================
#   LOGIC IMPLEMENTATION
# ==============================================================================

class LiftState:
    STATIONARY = "STATIONARY"
    MOVING = "MOVING"
    DOORS_CLOSING = "DOORS_CLOSING"
    DOORS_OPENING = "DOORS_OPENING"
    UNKNOWN = "UNKNOWN"

class LiftMonitor:
    def __init__(self, port, baud, mock_mode=False):
        self.port = port
        self.baud = baud
        self.mock_mode = mock_mode
        self.current_floor = 0
        self.state = LiftState.STATIONARY

        # Movement Tracking
        self.move_start_time = 0
        self.last_signal_time = 0
        self.trip_aaa_count = 0
        self.move_buffer = []
        self.start_floor = 0
        self.prediction_sent = False
        self.predicted_direction = None  # Track predicted direction for timeout logic

        # Smart Timeout Tracking
        self.last_door_close_time = 0

        # Ring Buffer for Pre-Roll
        self.continuous_buffer = deque(maxlen=500)

        # Heartbeat
        self.last_heartbeat = 0

        # Buffer for regex splitting
        self.regex_buffer = b''

        # MQTT
        self.mqtt_client = None
        if MQTT_AVAILABLE:
            try:
                self.mqtt_client = mqtt.Client(CallbackAPIVersion.VERSION2)
                self.mqtt_client.connect(SETTINGS['MQTT_BROKER'], 1883, 60)
                self.mqtt_client.loop_start()
                logging.info(f"MQTT Connected to {SETTINGS['MQTT_BROKER']}")
            except Exception as e:
                logging.error(f"MQTT Setup Failed: {e}")

        # Firebase Setup
        self.db = None
        self.firebase_available = False
        self.setup_firebase()

    def setup_firebase(self):
        try:
            import firebase_admin
            from firebase_admin import credentials
            from firebase_admin import firestore
            import os

            if self.db: return

            SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
            KEY_PATH = os.path.join(SCRIPT_DIR, "st-mary-somerset-firebase-admin.json")

            if os.path.exists(KEY_PATH):
                try:
                    if not firebase_admin._apps:
                        cred = credentials.Certificate(KEY_PATH)
                        firebase_admin.initialize_app(cred)
                    self.db = firestore.client()

                    test_ref = self.db.collection('lift_monitor').document('_connection_test')
                    test_ref.set({'status': 'OK', 'timestamp': firestore.SERVER_TIMESTAMP})
                    logging.info("SUCCESS: Firebase connection verified.")

                    self.firebase_available = True
                    self.sync_firebase()
                except Exception as e:
                    logging.error(f"Firebase Init Error: {e}")
                    self.firebase_available = False
                    self.db = None
            else:
                logging.warning(f"Firebase Key NOT FOUND at: {KEY_PATH}")
                self.firebase_available = False
                self.db = None

        except ImportError:
            self.firebase_available = False
            self.db = None
        except Exception:
             self.firebase_available = False
             self.db = None

    def publish(self, subtopic, payload):
        if self.mqtt_client:
            topic = f"{SETTINGS['MQTT_TOPIC_ROOT']}/{subtopic}"
            self.mqtt_client.publish(topic, payload, retain=True)

    def sync_firebase(self):
        if self.firebase_available and self.db:
            try:
                from firebase_admin import firestore
                doc_ref = self.db.collection('lift_monitor').document('status')
                doc_ref.set({
                    'floor': self.current_floor,
                    'state': self.state,
                    'timestamp': firestore.SERVER_TIMESTAMP,
                    'last_update_local': time.time()
                })
            except Exception as e:
                logging.warning(f"Firebase sync_firebase failed: {e}")

    def log_prediction(self, direction, method="rate"):
        """
        Logs prediction to 'lift_prediction' collection for UI arrows.
        """
        if self.firebase_available and self.db:
            try:
                from firebase_admin import firestore
                self.db.collection('lift_prediction').document('current').set({
                    'direction': direction,
                    'timestamp': firestore.SERVER_TIMESTAMP,
                    'floor': self.current_floor,
                    'method': method
                })
                logging.info(f"PREDICTION UPLOAD: {direction} ({method})")
            except Exception as e:
                logging.warning(f"Prediction Upload Failed: {e}")

    def handle_state_change(self, new_state):
        if self.state == new_state: return
        self.state = new_state
        self.publish("state", self.state)
        self.sync_firebase()
        logging.info(f"STATE CHANGE: {self.state}")

    def log_trip(self, duration, trip_type='TRIP', raw_data=None):
        if not self.firebase_available or not self.db:
            logging.warning("Firebase offline. Attempting Reconnect...")
            self.setup_firebase()

        if self.firebase_available and self.db:
            try:
                from firebase_admin import firestore

                doc_ref = self.db.collection('lift_history').document()
                data = {
                    'from': self.start_floor,
                    'to': self.current_floor,
                    'duration': duration,
                    'timestamp': firestore.SERVER_TIMESTAMP,
                    'type': trip_type
                }
                if raw_data:
                    data['raw_data'] = raw_data

                doc_ref.set(data)
                logging.info(f"CLOUD UPLOAD SUCCESS: {trip_type} ({duration:.2f}s)")
            except Exception as e:
                logging.error(f"UPLOAD FAILED: {e}")
                self.firebase_available = False
                self.db = None

    def handle_floor_update(self, new_floor, method="inferred"):
        if self.current_floor == new_floor: return

        old = self.current_floor
        self.current_floor = new_floor
        self.publish("floor", self.current_floor)
        self.sync_firebase()
        logging.info(f"FLOOR UPDATE: {old} -> {new_floor} ({method})")

    def infer_destination(self, duration, aaa):
        """
        FINAL DIRECTION LOGIC (Rate-Based)
        """
        # Calculate Rate (AAA per second)
        rate = aaa / duration if duration > 0 else 0

        if rate >= SETTINGS['ASCENT_RATE_THRESHOLD']:
            direction = 'UP'
        else:
            direction = 'DOWN'

        logging.info(f"Trip Analysis: T={duration:.2f}s, AAA={aaa}, Rate={rate:.2f}/s -> Dir={direction}")

        # Timing Table Lookup
        best_match = None
        min_diff = float('inf')

        candidates = [t for t in TIMING_TABLE if t['from'] == self.current_floor]

        if direction == 'UP':
            candidates = [t for t in candidates if t['to'] > self.current_floor]
        elif direction == 'DOWN':
            candidates = [t for t in candidates if t['to'] < self.current_floor]

        for entry in candidates:
            diff = abs(entry['time'] - duration)
            if diff < min_diff:
                min_diff = diff
                best_match = entry

        if best_match and min_diff <= SETTINGS['TIMING_TOLERANCE']:
            self.handle_floor_update(best_match['to'], method=f"Table ({best_match['time']}s) Diff:{min_diff:.2f}s")
            return

        # Fallback
        if direction != 'UNKNOWN':
            floors_moved = 1
            if duration > 17.0: floors_moved = 3
            elif duration > 13.0: floors_moved = 2

            target = self.current_floor
            if direction == 'UP':
                target = min(3, self.current_floor + floors_moved)
                self.handle_floor_update(target, method=f"Fallback-Up (T={duration:.1f}s)")
            elif direction == 'DOWN':
                target = max(0, self.current_floor - floors_moved)
                self.handle_floor_update(target, method=f"Fallback-Down (T={duration:.1f}s)")

    def analyze_chunk(self, chunk):
        now = time.time()

        if not chunk and not self.regex_buffer: return

        full_data = b''
        if chunk:
            full_data = self.regex_buffer + chunk

            # Continuous Pre-Roll Buffer
            try:
                data_str = chunk.decode('utf-8', errors='ignore')
                self.continuous_buffer.append((now, data_str))
            except Exception as e:
                logging.debug(f"Buffer decode error: {e}")

            # Count AAA (for direction prediction) and single A (for movement tracking)
            chunk_aaa = len(PATTERNS['AAA'].findall(full_data))
            chunk_a = len(PATTERNS['A'].findall(full_data))  # Any 'A' = movement
            
            self.trip_aaa_count += chunk_aaa

            # Events (Only change state if NOT currently moving)
            if PATTERNS['DoorClose'].search(full_data):
                logging.info("EVENT: Doors Closing")
                self.last_door_close_time = now
                # Don't interrupt MOVING state with DOORS_CLOSING
                if self.state != LiftState.MOVING:
                    self.handle_state_change(LiftState.DOORS_CLOSING)

            if PATTERNS['DoorOpenL0'].search(full_data):
                logging.info("EVENT: Doors Opening L0")
                # Don't interrupt MOVING state - let timeout handle it
                if self.state != LiftState.MOVING:
                    self.handle_state_change(LiftState.DOORS_OPENING)
                    self.handle_floor_update(0, method="Signal (ha)")

            if PATTERNS['ArrL0'].search(full_data):
                logging.info("EVENT: Arrival L0")
                # Floor update is always valid, even while moving (L0 arrival signal)
                self.handle_floor_update(0, method="Signal (8h)")

            self.regex_buffer = full_data[-20:]
        else:
            chunk_aaa = 0
            chunk_a = 0

        # === STATE MACHINE ===

        # 1. TRIGGER MOVEMENT (Only on AAA)
        if self.state != LiftState.MOVING and chunk_aaa > 0:
            logging.info(f"--- MOVEMENT STARTED (Trigger: AAA) ---")
            self.state = LiftState.MOVING
            self.move_start_time = now
            self.last_signal_time = now
            self.start_floor = self.current_floor
            self.trip_aaa_count = chunk_aaa # Start with current chunk
            self.prediction_sent = False
            self.predicted_direction = None  # Reset until prediction window

            # Pre-Roll
            cutoff_time = now - SETTINGS['PRE_ROLL_SECONDS']
            pre_roll_data = [item[1] for item in self.continuous_buffer if item[0] >= cutoff_time]
            self.move_buffer = list(pre_roll_data)
            self.publish("state", "MOVING")

        # 2. WHILE MOVING
        elif self.state == LiftState.MOVING:
            # Use EITHER AAA or single A to keep movement alive
            # Single A is always present during movement regardless of direction
            if chunk_aaa > 0 or chunk_a > 0:
                self.last_signal_time = now

            # Store Data
            try:
                if chunk:
                    data_str = chunk.decode('utf-8', errors='ignore')
                    self.move_buffer.append(data_str)
            except Exception as e:
                logging.debug(f"Move buffer append error: {e}")

            trip_duration = now - self.move_start_time

            # A. PREDICTION PHASE (At 2.0s mark)
            if trip_duration >= SETTINGS['PREDICTION_WINDOW'] and not self.prediction_sent:
                # Calculate Initial Rate
                pred_rate = self.trip_aaa_count / trip_duration
                pred_dir = 'UP' if pred_rate >= SETTINGS['ASCENT_RATE_THRESHOLD'] else 'DOWN'

                logging.info(f"PREDICTION: T={trip_duration:.2f}s, Count={self.trip_aaa_count}, Rate={pred_rate:.2f} -> {pred_dir}")
                self.log_prediction(pred_dir, method="window_rate")
                self.prediction_sent = True
                self.predicted_direction = pred_dir  # Store for timeout selection

            # B. STOP DETECTION (Timeouts based on predicted direction)
            if self.predicted_direction == 'UP':
                current_timeout = SETTINGS['ASCENT_TIMEOUT']  # 2.0s
            elif self.predicted_direction == 'DOWN':
                current_timeout = SETTINGS['DESCENT_TIMEOUT']  # 5.0s
            else:
                current_timeout = SETTINGS['DESCENT_TIMEOUT']  # Default to patient before prediction
            
            # Extended timeout if doors closed recently (safety net for silent descents)
            if (now - self.last_door_close_time) < 30.0:
                current_timeout = max(current_timeout, SETTINGS['EXTENDED_MOVE_TIMEOUT'])

            if (now - self.last_signal_time) > current_timeout:
                # STOP CONFIRMED
                total_duration = self.last_signal_time - self.move_start_time
                move_data_str = "".join(self.move_buffer)

                if total_duration < SETTINGS['MIN_TRIP_DURATION']: # Re-level filter (5.5s)
                     logging.info(f"--- RE-LEVELLING (<{SETTINGS['MIN_TRIP_DURATION']}s: {total_duration:.2f}s) ---")
                     self.log_trip(total_duration, trip_type='RELEVEL', raw_data=move_data_str)
                     self.handle_state_change(LiftState.STATIONARY)
                else:
                    logging.info(f"--- STOPPED (Duration: {total_duration:.2f}s) ---")
                    self.infer_destination(total_duration, self.trip_aaa_count)
                    self.log_trip(total_duration, trip_type='TRIP', raw_data=move_data_str)
                    logging.info("INFERRED: Doors Opening")
                    self.handle_state_change(LiftState.DOORS_OPENING)

                self.log_prediction('STOPPED', method="end")
                self.trip_aaa_count = 0
                self.move_buffer = []

    def run(self):
        logging.info(f"Starting LiftMonitor on {self.port}...")

        if not self.mock_mode:
            try:
                ser = serial.Serial(self.port, self.baud, timeout=0.1)
                logging.info("Serial Port Opened.")
            except Exception as e:
                logging.error(f"Failed to open Serial: {e}")
                return
        else:
            logging.info("Running in MOCK MODE (No serial)")

        while True:
            try:
                if not self.mock_mode:
                    if ser.in_waiting > 0:
                        raw = ser.read(ser.in_waiting)
                        clean = bytes([b & 0x7F for b in raw])
                        self.analyze_chunk(clean)
                else:
                    time.sleep(1)

                now = time.time()
                if (now - self.last_heartbeat) > 60:
                    self.last_heartbeat = now
                    if self.state == LiftState.STATIONARY:
                        self.sync_firebase()

                if self.state == LiftState.MOVING:
                     # Check timeout even if no data coming in
                     self.analyze_chunk(b'')

                time.sleep(0.05)

            except KeyboardInterrupt:
                logging.info("Stopping...")
                break
            except Exception as e:
                logging.error(f"Loop Error: {e}")
                time.sleep(1)

if __name__ == "__main__":
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s [%(levelname)s] %(message)s',
        datefmt='%H:%M:%S'
    )

    parser = argparse.ArgumentParser()
    parser.add_argument("--mock", action="store_true", help="Run without serial port")
    parser.add_argument("--port", default='/dev/ttyUSB0', help="Serial port")
    args = parser.parse_args()

    monitor = LiftMonitor(args.port, 9600, mock_mode=args.mock)
    monitor.run()