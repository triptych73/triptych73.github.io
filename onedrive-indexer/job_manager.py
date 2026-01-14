import threading
import time
import uuid
from datetime import datetime

class JobManager:
    _instance = None
    _lock = threading.Lock()

    def __init__(self):
        self.current_job_id = None
        self.is_running = False
        self.logs = []
        self.progress = {"current": 0, "total": 0, "status": "Idle"}
        self.result = None
        self.error = None
        self._thread = None
        self._stop_event = threading.Event()

    @classmethod
    def get_instance(cls):
        if not cls._instance:
            with cls._lock:
                if not cls._instance:
                    cls._instance = cls()
        return cls._instance

    def start_job(self, target_func, **kwargs):
        """
        Starts a new background job.
        target_func: The function to run (e.g., process_selection)
        kwargs: Arguments for the function
        """
        with self._lock:
            if self.is_running:
                return False, "Job already running"
            
            self.current_job_id = str(uuid.uuid4())
            self.is_running = True
            self.logs = [] # Clear old logs
            self.progress = {"current": 0, "total": 0, "status": "Starting..."}
            self.result = None
            self.error = None
            self._stop_event.clear()
            
            # Add a status_callback to logging if the func supports it
            # We wrap the target function to handle lifecycle
            def wrapped_worker():
                try:
                    self.add_log(f"🚀 Job {self.current_job_id} started at {datetime.now().strftime('%H:%M:%S')}")
                    
                    # Custom callback that updates our internal log
                    def internal_callback(msg):
                        self.add_log(msg)
                        
                    # Inject our callback into kwargs if the function expects it
                    if 'status_callback' in kwargs: 
                        # We chain it: run ours, then theirs (if user passed one, though we usually replace it)
                        # Actually, we should just override it effectively for the background run.
                        kwargs['status_callback'] = internal_callback
                        
                    # Execute the heavy lifting
                    res = target_func(**kwargs)
                    
                    self.result = res
                    self.progress['status'] = "Completed"
                    self.add_log(f"✅ Job finished successfully. Processed {len(res) if res else 0} items.")
                    
                except Exception as e:
                    self.error = str(e)
                    self.progress['status'] = "Failed"
                    self.add_log(f"❌ Job failed: {str(e)}")
                    # Print full traceback to console for server logs
                    import traceback
                    traceback.print_exc()
                finally:
                    with self._lock:
                        self.is_running = False
            
            self._thread = threading.Thread(target=wrapped_worker, daemon=True)
            self._thread.start()
            return True, self.current_job_id

    def stop_job(self):
        """
        Signals the job to stop (if the worker supports checking the flag).
        Currently we just set a flag, the worker implementation needs to check checking it.
        """
        self._stop_event.set()
        self.add_log("⚠️ Stop signal received...")

    def get_status(self):
        return {
            "is_running": self.is_running,
            "job_id": self.current_job_id,
            "progress": self.progress,
            "logs": self.logs[-50:], # Return last 50 logs to save bandwidth
            "error": self.error
        }

    def add_log(self, message):
        timestamp = datetime.now().strftime('%H:%M:%S')
        clean_msg = f"[{timestamp}] {message}"
        # Append to efficient list
        self.logs.append(clean_msg)
        # Keep list from growing infinite in long jobs
        if len(self.logs) > 1000:
            self.logs.pop(0)

# Global Accessor
def get_job_manager():
    return JobManager.get_instance()
