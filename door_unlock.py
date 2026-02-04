#!/usr/bin/env python3
"""
Door Unlock Control - Simple 3-second timed unlock
Designed to be called as a module or run directly.
"""
from gpiozero import OutputDevice
from time import sleep
import logging

# --- Configuration ---
RELAY_PIN = 17  # GPIO 17 (Physical Pin 11)
UNLOCK_DURATION = 3  # Seconds to keep unlocked

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')

def unlock_door(duration=UNLOCK_DURATION):
    """
    Activates the door relay for a specified duration, then deactivates.
    Returns True on success, False on error.
    """
    try:
        # Active Low relay - initial_value=False starts in locked state
        relay = OutputDevice(RELAY_PIN, active_high=False, initial_value=False)
        
        logging.info(f"Unlocking door for {duration} seconds...")
        relay.on()
        sleep(duration)
        relay.off()
        logging.info("Door locked again.")
        
        relay.close()  # Clean up GPIO
        return True
        
    except Exception as e:
        logging.error(f"Door unlock failed: {e}")
        return False

if __name__ == "__main__":
    print("Door Unlock - Single Cycle")
    print("-" * 30)
    success = unlock_door()
    print("Done." if success else "Failed!")