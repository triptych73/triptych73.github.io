import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import streamlit as st
import os

# Singleton pattern for Firebase App
def get_db():
    if not firebase_admin._apps:
        # 1. Try Environment Variable (Cloud Deployment)
        env_creds = os.environ.get("FIREBASE_CREDENTIALS")
        if env_creds:
            import json
            try:
                # Handle potential quoting issues in Streamlit Secrets
                if env_creds.startswith("'") and env_creds.endswith("'"):
                     env_creds = env_creds[1:-1]
                cred_dict = json.loads(env_creds)
                cred = credentials.Certificate(cred_dict)
                firebase_admin.initialize_app(cred)
                return firestore.client()
            except Exception as e:
                st.error(f"Firebase Config Error: {e}")
                return None

        # 2. Try Local File (for local development)
        import glob
        json_files = glob.glob("*.json")
        for f in json_files:
            if "firebase-adminsdk" in f:
                cred = credentials.Certificate(f)
                firebase_admin.initialize_app(cred)
                return firestore.client()

        return None
    
    return firestore.client()

def upsert_document(item_id, data):
    """
    Writes or updates a document in the 'indexer_files' collection.
    item_id: The permanent OneDrive Item ID.
    data: Dictionary of metadata and content.
    """
    db = get_db()
    if not db: return False
    
    doc_ref = db.collection('indexer_files').document(item_id)
    doc_ref.set(data, merge=True)
    return True

def get_indexed_status(item_ids):
    """
    Given a list of OneDrive Item IDs, returns a set of IDs that exist in the DB.
    Optimized to use batch queries (chunks of 30 due to Firestore limits).
    """
    db = get_db()
    if not db or not item_ids: return set()
    
    found_ids = set()
    collection = db.collection('indexer_files')
    
    # Firestore 'in' query limit is 30
    chunk_size = 30
    pass_ids = [i for i in item_ids if i] # filter empty
    
    for i in range(0, len(pass_ids), chunk_size):
        chunk = pass_ids[i:i + chunk_size]
        query = collection.where(filter=firestore.FieldFilter("onedrive_id", "in", chunk))
        docs = query.stream()
        for doc in docs:
            found_ids.add(doc.id)
            
    return found_ids

def get_document_content(item_id):
    """
    Fetches the full content of a document by OneDrive Item ID.
    Returns a dict with 'content', 'ai_summary', etc. or None.
    """
    db = get_db()
    if not db: return None
    
    doc_ref = db.collection('indexer_files').document(item_id)
    doc = doc_ref.get()
    
    if doc.exists:
        return doc.to_dict()
    return None
