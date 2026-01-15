import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import os
import glob

def get_db():
    # Attempt to find the JSON key file in the current directory
    json_files = glob.glob("*.json")
    cred_file = None
    for f in json_files:
        if "firebase-adminsdk" in f:
            cred_file = f
            break
    
    if not cred_file:
        print("Error: No service account key found.")
        return None

    try:
        cred = credentials.Certificate(cred_file)
        # Avoid re-initializing if already initialized
        if not firebase_admin._apps:
            firebase_admin.initialize_app(cred)
        return firestore.client()
    except Exception as e:
        print(f"Error initializing Firebase: {e}")
        return None

def analyze_docs():
    db = get_db()
    if not db:
        return

    print("Connected to Firestore. Querying documents...")

    # We are looking for documents in 'indexer_files' collection
    # where folder_path contains 'Approved Inspector'
    # Firestore doesn't support substring match efficiently, so we might need to filter client side
    # or if we know the exact start we can use startAt/endAt, but 'contains' is harder.
    # Given the scale might be small for this specific folder, we can fetch all onedrive docs 
    # and filter, or use a composite index if available. 
    
    # Let's try to list all documents first (limit to recent or just fetch all if count is low)
    # The user said "large folder", so be careful. 
    # But usually "indexer_files" has the path.
    
    # Try a prefix query if the path starts with something known.
    # User said: root/Documents/SMS Docuemnts/Approved Inspector
    # Note typo "Docuemnts" in user prompt, check if it's in the data that way.
    
    docs_ref = db.collection('indexer_files')
    
    # We will fetch a subset to test.
    # Streaming all might be heavy. Let's try to filter by provider='onedrive' at least.
    query = docs_ref.where('provider', '==', 'onedrive')
    
    results = query.stream()
    
    target_path_fragment = "Approved Inspector"
    
    found_count = 0
    print(f"\n--- Searching for '{target_path_fragment}' ---")
    
    for doc in results:
        data = doc.to_dict()
        path = data.get('folder_path', '')
        
        if target_path_fragment.lower() in path.lower():
            found_count += 1
            print(f"\n[Document {found_count}]")
            print(f"Name: {data.get('name')}")
            print(f"Path: {path}")
            print(f"Type: {data.get('file_type')}")
            
            content = data.get('content', '')
            # Print first 500 chars of content to get a gist
            snippet = content[:500].replace('\n', ' ')
            print(f"Content Snippet: {snippet}...")
            
            if found_count >= 10:
                print("\nLimit reached (10 docs). Stopping analysis output.")
                break

    if found_count == 0:
        print("No documents found with that path fragment.")

if __name__ == "__main__":
    analyze_docs()
