
import firebase_admin
from firebase_admin import credentials, firestore
import os
import json

# Setup Firebase
if not firebase_admin._apps:
    # Try local service account if available, else standard init
    cred = None
    cert_path = "onedrive-indexer/st-mary-somerset-firebase-adminsdk-fbsvc-f2f14ec558.json"
    if os.path.exists(cert_path):
        cred = credentials.Certificate(cert_path)
    else:
        # Try to find any json file that looks like a key
        import glob
        keys = glob.glob("*.json")
        for k in keys:
            if "firebase" in k and "adminsdk" in k:
                cred = credentials.Certificate(k)
                break
    
    if cred:
        firebase_admin.initialize_app(cred)
    else:
        # Assume env var or default
        firebase_admin.initialize_app()

db = firestore.client()

def analyze_data():
    docs = db.collection('indexer_files').where('provider', '==', 'onedrive').stream()
    
    level_keywords = ['Level', 'Floor', 'Zone', 'Basement', 'Ground', 'Roof']
    reg_keywords = ['Part B', 'Part M', 'Compliance', 'Regs', 'Building Control']
    
    zone_hits = {}
    
    print("--- Analyzing Indexed Documents for Zonal Structure ---")
    
    count = 0
    for doc in docs:
        data = doc.to_dict()
        path = data.get('folder_path', '')
        name = data.get('name', '')
        
        full_str = f"{path}/{name}"
        
        # Check for Level/Zone
        detected_zone = None
        for k in level_keywords:
            if k.lower() in full_str.lower():
                # Try to extract the specific zone (simple heuristic)
                # e.g. "Level 01", "Ground Floor"
                import re
                # Regex for "Level X", "Zone Y", "Floor Z"
                match = re.search(f"{k}\s*(\d+|[a-zA-Z]+)", full_str, re.IGNORECASE)
                if match:
                    detected_zone = match.group(0)
                else:
                    detected_zone = k 
                break
        
        if detected_zone:
            if detected_zone not in zone_hits:
                zone_hits[detected_zone] = []
            zone_hits[detected_zone].append(name)
            
        count += 1

    print(f"Total Docs Scanned: {count}")
    print("\n--- Potential Zones Detected ---")
    for zone, files in zone_hits.items():
        print(f"[{zone}]: {len(files)} files")
        # Print a few samples
        for f in files[:3]:
            print(f"  - {f}")
            
if __name__ == "__main__":
    analyze_data()
