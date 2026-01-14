import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import streamlit as st
import os

import urllib.parse

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

def _get_safe_doc_id(provider, item_id):
    """Encodes item_id to be safe for Firestore specific path usage."""
    # Firestore allows most characters except '/'.
    # Previous full URL encoding broke backward compatibility for IDs with '!' etc.
    # We only need to escape slashes for Local paths.
    if not item_id: return f"{provider}_"
    safe_id = item_id.replace("/", "%2F")
    return f"{provider}_{safe_id}"

def _decode_doc_id(doc_id):
    """Extracts original provider and item_id from doc_id."""
    # doc_id is like "provider_encodedItemId"
    try:
        provider, encoded_id = doc_id.split('_', 1)
        return provider, encoded_id.replace("%2F", "/")
    except ValueError:
        return None, doc_id
        
def upsert_document(item_id, data, provider="onedrive"):
    """
    Writes or updates a document in the 'indexer_files' collection.
    item_id: The permanent Item ID.
    provider: 'onedrive' or 'gdrive'
    data: Dictionary of metadata and content.
    """
    db = get_db()
    if not db: return False
    
    # Create composite ID to prevent collisions
    doc_id = _get_safe_doc_id(provider, item_id)
    
    doc_ref = db.collection('indexer_files').document(doc_id)
    # Add provider to data for query filtering
    data['provider'] = provider
    doc_ref.set(data, merge=True)
    return True

def delete_document(item_id, provider="onedrive"):
    """
    Deletes a document from the 'indexer_files' collection.
    """
    db = get_db()
    if not db: return False
    
    try:
        doc_id = _get_safe_doc_id(provider, item_id)
        db.collection('indexer_files').document(doc_id).delete()
        return True
    except Exception as e:
        print(f"Error deleting document {item_id}: {e}")
        return False

def get_indexed_status(item_ids, provider="onedrive"):
    """
    Given a list of Item IDs, returns a set of IDs that exist in the DB.
    Optimized to use batch queries.
    """
    db = get_db()
    if not db or not item_ids: return set()
    
    found_ids = set()
    collection = db.collection('indexer_files')
    
    # Firestore 'in' query limit is 30
    chunk_size = 30
    
    pass_ids = [i for i in item_ids if i] # filter empty
    
    # Transform to expected doc IDs
    expected_doc_ids = [_get_safe_doc_id(provider, i) for i in pass_ids]
    
    for i in range(0, len(expected_doc_ids), chunk_size):
        chunk = expected_doc_ids[i:i + chunk_size]
        # Query by document ID
        
        refs = [collection.document(d) for d in chunk]
        try:
            docs = db.get_all(refs)
        except TypeError:
            # Fallback if get_all expects unpacked args in this version
            docs = db.get_all(*refs)
            
        for doc in docs:
            if doc.exists:
                # We want to return the ORIGINAL item_id, so decode it
                _, original_id = _decode_doc_id(doc.id)
                found_ids.add(original_id)
            
    return found_ids

def get_document_content(item_id, provider="onedrive"):
    """
    Fetches the full content.
    """
    db = get_db()
    if not db: return None
    
    doc_id = _get_safe_doc_id(provider, item_id)
    doc_ref = db.collection('indexer_files').document(doc_id)
    doc = doc_ref.get()
    
    if doc.exists:
        return doc.to_dict()
    return None

def save_user_tokens(user_id, token_data):
    """
    Saves OAuth tokens for a user.
    """
    db = get_db()
    if not db: return False
    
    doc_ref = db.collection('auth_tokens').document(user_id)
    doc_ref.set(token_data, merge=True)
    return True

def get_user_tokens(user_id):
    """
    Retrieves OAuth tokens for a user.
    """
    db = get_db()
    if not db: return None
    
    doc_ref = db.collection('auth_tokens').document(user_id)
    doc = doc_ref.get()
    
    if doc.exists:
        return doc.to_dict()
    return None

def delete_user_tokens(user_id):
    """
    Deletes OAuth tokens for a user.
    """
    db = get_db()
    if not db: return False
    
    try:
        doc_ref = db.collection('auth_tokens').document(user_id)
        doc_ref.delete()
        return True
    except Exception as e:
        print(f"Error deleting tokens for {user_id}: {e}")
        return False

def get_all_documents():
    """
    Fetches ALL documents from the indexer_files collection.
    Warning: This can be expensive if collection is huge.
    """
    db = get_db()
    if not db: return []
    
    docs = db.collection('indexer_files').stream()
    results = []
    for doc in docs:
        results.append(doc.to_dict())
    return results
