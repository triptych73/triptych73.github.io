import pyaudio
import numpy as np
import time
import datetime
import socket
import wave
import os

# Firebase Imports
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import storage

# --- 1. CONFIGURATION ---
# Audio Settings
CHUNK = 4096              
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100              
THRESHOLD = 1500          

# Firebase Settings
CRED_PATH = "/home/pi/building-system/audio-monitor/st-mary-somerset-firebase-admin.json"
COLLECTION_NAME = "door_audio_events"
DEVICE_NAME = socket.gethostname()

# *** NEW: STORAGE SETTINGS ***
# IMPORTANT: Replace with your actual bucket name from Firebase Console -> Storage
# Do not include "gs://" prefix.
BUCKET_NAME = "st-mary-somerset.firebasestorage.app" 

# Duration Logic
SECONDS_PER_CHUNK = CHUNK / RATE
MIN_DOOR_SECONDS = 0.2    
MAX_DOOR_SECONDS = 2.5    
MIN_CHUNKS = int(MIN_DOOR_SECONDS / SECONDS_PER_CHUNK)
MAX_CHUNKS = int(MAX_DOOR_SECONDS / SECONDS_PER_CHUNK)

# Lift Cooldown
LIFT_COOLDOWN_SECONDS = 5.0 

print(f"--- CONFIG ---")
print(f"Device: {DEVICE_NAME}")
print(f"Lift Cooldown: {LIFT_COOLDOWN_SECONDS}s")
print(f"Storage Bucket: {BUCKET_NAME}")

# --- 2. FIREBASE SETUP ---
try:
    cred = credentials.Certificate(CRED_PATH)
    # Note: We now initialize with storageBucket
    firebase_admin.initialize_app(cred, {
        'storageBucket': BUCKET_NAME
    })
    db = firestore.client()
    bucket = storage.bucket() # Get the storage bucket
    print("Firebase (Firestore & Storage) connected successfully.")
except Exception as e:
    print(f"CRITICAL: Firebase setup failed: {e}")
    exit(1)

# --- 3. HELPERS ---

def save_wav_file(frames, filename):
    """Saves audio frames to a local temporary wav file."""
    wf = wave.open(filename, 'wb')
    wf.setnchannels(CHANNELS)
    wf.setsampwidth(pyaudio.PyAudio().get_sample_size(FORMAT))
    wf.setframerate(RATE)
    wf.writeframes(b''.join(frames))
    wf.close()

def upload_to_storage(local_path, destination_blob_name):
    """Uploads a file to Firebase Storage and returns the public URL (if made public) or path."""
    try:
        blob = bucket.blob(destination_blob_name)
        blob.upload_from_filename(local_path)
        # return blob.public_url # Uncomment if you make buckets public, otherwise just store path
        return destination_blob_name
    except Exception as e:
        print(f" !! Storage Upload Failed: {e}")
        return None

def analyze_audio_profile(frames):
    """Calculates detailed stats for the audio event."""
    # Convert binary frames back to numpy array for analysis
    raw_data = b''.join(frames)
    audio_data = np.frombuffer(raw_data, dtype=np.int16)
    
    # Calculate stats
    peak_amplitude = np.max(np.abs(audio_data))
    rms_amplitude = np.sqrt(np.mean(audio_data.astype(np.float64)**2))
    
    return {
        "peak_volume": int(peak_amplitude),
        "avg_volume": int(rms_amplitude),
        "sample_count": len(audio_data)
    }

def log_event(event_type, duration=0, frames=None):
    profile_data = {}
    storage_path = None

    # If we have audio data, save and upload it
    if frames:
        timestamp_str = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"door_event_{timestamp_str}.wav"
        local_path = f"/tmp/{filename}"
        
        # 1. Save Local WAV
        save_wav_file(frames, local_path)
        
        # 2. Upload to Firebase
        storage_path = f"audio_captures/{datetime.datetime.now().strftime('%Y-%m-%d')}/{filename}"
        print(f" >> Uploading audio to: {storage_path}")
        upload_to_storage(local_path, storage_path)
        
        # 3. Analyze Audio
        profile_data = analyze_audio_profile(frames)
        
        # 4. Cleanup Local
        if os.path.exists(local_path):
            os.remove(local_path)

    # Database Entry
    try:
        doc_data = {
            "timestamp": firestore.SERVER_TIMESTAMP,
            "device": DEVICE_NAME,
            "event": event_type,
            "duration_seconds": round(duration, 3),
            "local_time": datetime.datetime.now().isoformat(),
            "audio_file": storage_path, # Path in bucket
            "audio_profile": profile_data # Nested stats
        }
        db.collection(COLLECTION_NAME).add(doc_data)
        print(f" >> Sent to Firebase: {event_type} (With Audio: {bool(frames)})")
    except Exception as e:
        print(f" !! Firestore Upload Failed: {e}")

# --- 4. STARTUP PING ---
log_event("SERVICE_STARTED")

# --- 5. AUDIO SETUP ---
p = pyaudio.PyAudio()
try:
    stream = p.open(format=FORMAT,
                    channels=CHANNELS,
                    rate=RATE,
                    input=True,
                    frames_per_buffer=CHUNK)
except Exception as e:
    print(f"Error opening audio stream: {e}")
    exit(1)

print(f"Listening for audio > {THRESHOLD} volume...")

# --- 6. MAIN LOOP ---
consecutive_loud_chunks = 0
is_lift_noise = False
last_lift_time = 0
event_frames = [] # Buffer to hold the current sound's audio data

try:
    while True:
        try:
            data = stream.read(CHUNK, exception_on_overflow=False)
            audio_data = np.frombuffer(data, dtype=np.int16)
        except Exception as e:
            print(f"Read error: {e}")
            continue

        volume = np.sqrt(np.mean(audio_data.astype(np.float64)**2))

        if volume > THRESHOLD:
            if is_lift_noise:
                continue

            consecutive_loud_chunks += 1
            event_frames.append(data) # Store this chunk
            
            # LIFT DETECTOR
            if consecutive_loud_chunks > MAX_CHUNKS:
                print(f" >> IGNORED: Sound persisted > {MAX_DOOR_SECONDS}s (Likely Lift)")
                is_lift_noise = True
                consecutive_loud_chunks = 0
                event_frames = [] # Dump the buffer, we don't need lift noise
        else:
            # Sound Stopped
            if is_lift_noise:
                print(f" >> Lift noise ended. Cooling down for {LIFT_COOLDOWN_SECONDS}s...")
                is_lift_noise = False
                last_lift_time = time.time()
                consecutive_loud_chunks = 0
                event_frames = []
            
            elif consecutive_loud_chunks > 0:
                # Sound stopped, was it a door?
                
                # Check Cooldown
                time_since_lift = time.time() - last_lift_time
                if time_since_lift < LIFT_COOLDOWN_SECONDS:
                    print(f" >> IGNORED: Sound in lift cooldown period ({time_since_lift:.1f}s)")
                    consecutive_loud_chunks = 0
                    event_frames = []
                    continue

                # Door Check
                if MIN_CHUNKS <= consecutive_loud_chunks <= MAX_CHUNKS:
                    duration = consecutive_loud_chunks * SECONDS_PER_CHUNK
                    print(f"!!! DOOR DETECTED !!! (Duration: {duration:.2f}s)")
                    
                    # Log with Audio Frames
                    log_event("DOOR_CLOSED", duration, frames=event_frames)
                else:
                    # Too short
                    pass
                
                consecutive_loud_chunks = 0
                event_frames = []

except KeyboardInterrupt:
    print("Stopping...")
finally:
    stream.stop_stream()
    stream.close()
    p.terminate()