import firebase_admin
from firebase_admin import credentials, firestore
import os
import datetime

# Setup Firebase similar to before
if not firebase_admin._apps:
    cred = None
    cert_path = "onedrive-indexer/st-mary-somerset-firebase-adminsdk-fbsvc-f2f14ec558.json"
    if os.path.exists(cert_path):
        cred = credentials.Certificate(cert_path)
    else:
        # Fallback search
        import glob
        keys = glob.glob("*.json") + glob.glob("**/*.json")
        for k in keys:
            if "firebase-adminsdk" in k:
                cred = credentials.Certificate(k)
                break
    
    if cred:
        firebase_admin.initialize_app(cred)
    else:
        firebase_admin.initialize_app()

db = firestore.client()

def check_status():
    doc_ref = db.collection('indexer_analysis').document('zonal_matrix')
    doc = doc_ref.get()
    
    if doc.exists:
        data = doc.to_dict()
        print(f"[FOUND] Analysis Document Found!")
        print(f"Keys in Root: {list(data.keys())}")
        
        if 'data' in data:
            inner_data = data['data']
            print(f"Keys in 'data': {list(inner_data.keys()) if isinstance(inner_data, dict) else type(inner_data)}")
            if isinstance(inner_data, dict) and 'zones' in inner_data:
                print(f"Zones Found: {list(inner_data['zones'].keys())}")
            else:
                print("[WARN] 'zones' key NOT found in 'data' object.")
        else:
             print("[WARN] 'data' key NOT found in root document.")

    else:
        print("[MISSING] Analysis Document NOT FOUND.")
        print("This means the Streamlit Analysis script hasn't successfully finished writing yet.")

if __name__ == "__main__":
    check_status()
