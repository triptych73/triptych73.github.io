import time
import schedule
import os
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from xero_client import XeroClient
from datetime import datetime

# Initialize Firebase
# Priority 1: Environment Variable (JSON String)
firebase_creds_str = os.getenv("FIREBASE_CREDENTIALS")
CRED_PATH = "/data/firebase_key.json"

if firebase_creds_str:
    try:
        cred_dict = json.loads(firebase_creds_str)
        cred = credentials.Certificate(cred_dict)
        firebase_admin.initialize_app(cred)
        db = firestore.client()
        print("Initialized Firebase via Environment Variable.")
    except Exception as e:
        print(f"Error initializing Firebase from Env Var: {e}")
        db = None
# Priority 2: File in /data volume
elif os.path.exists(CRED_PATH):
    cred = credentials.Certificate(CRED_PATH)
    firebase_admin.initialize_app(cred)
    db = firestore.client()
    print("Initialized Firebase via Key File.")
else:
    print(f"Warning: No Firebase credentials found (checked env var FIREBASE_CREDENTIALS and {CRED_PATH}). Sync will fail.")
    db = None

client = XeroClient()

def sync_job():
    print(f"[{datetime.now()}] Starting sync job...")
    if not db:
        print("Skipping: No Database connection.")
        return

    # 1. Refresh Token
    try:
        token = client.refresh_token()
        if not token:
            print("Failed to refresh token. Please re-authenticate via UI.")
            return
        
        access_token = token['access_token']
        
        # 2. Get Tenant
        # Depending on your logic, you might save the tenant_id in the token file too
        # For now, we fetch it again
        tenants = client.get_tenants(access_token)
        if not tenants:
            print("No tenants found.")
            return
        
        tenant_id = tenants[0]['tenantId'] # Assume first tenant
        tenant_name = tenants[0]['tenantName']
        print(f"Syncing for {tenant_name}...")

        # 3. Fetch Transactions
        # Ideally, check last sync time from DB to do incremental fetch
        # For simplicity v1: Fetch all (or last 30 days logic)
        data = client.get_bank_transactions(access_token, tenant_id)
        transactions = data.get('BankTransactions', [])
        
        if not transactions:
            print("No new transactions found.")
            return
            
        print(f"Found {len(transactions)} transactions. Saving to Firestore...")
        
        # 4. Save to Firestore
        batch = db.batch()
        count = 0
        
        collection_ref = db.collection('xero_transactions')
        
        for tx in transactions:
            # Use TransactionID as doc ID to prevent duplicates
            doc_ref = collection_ref.document(tx['BankTransactionID'])
            
            # Convert Xero date strings if needed, or store as is
            tx['synced_at'] = firestore.SERVER_TIMESTAMP
            
            # Add to batch
            batch.set(doc_ref, tx, merge=True)
            count += 1
            
            # Commit every 400 items (Firestore limit is 500)
            if count >= 400:
                batch.commit()
                batch = db.batch()
                count = 0
                
        if count > 0:
            batch.commit()
            
        print("Sync complete.")

    except Exception as e:
        print(f"Error during sync: {e}")

# Run once on start
sync_job()

# Schedule every hour
schedule.every(1).hours.do(sync_job)

print("Scheduler started. Press Ctrl+C to exit.")
while True:
    schedule.run_pending()
    time.sleep(60)
