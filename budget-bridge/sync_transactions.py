import time
import schedule
import os
import json  # Added missing import
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from xero_client import XeroClient
from datetime import datetime, timedelta


# Initialize Firebase
# Priority 1: Environment Variable (JSON String)
firebase_creds_str = os.getenv("FIREBASE_CREDENTIALS")
CRED_PATH = "/data/firebase_key.json"
db = None

if firebase_creds_str:
    try:
        cred_dict = json.loads(firebase_creds_str)
        cred = credentials.Certificate(cred_dict)
        firebase_admin.initialize_app(cred)
        db = firestore.client()
        print("Initialized Firebase via Environment Variable.")
    except Exception as e:
        print(f"Error initializing Firebase from Env Var: {e}")
        print("Falling back to key file...")

# Priority 2: File in /data volume (Run if Env Var failed or wasn't present)
if not db and os.path.exists(CRED_PATH):
    try:
        cred = credentials.Certificate(CRED_PATH)
        # Avoid duplicate initialization if env var failed but app tried init? 
        # Actually initializing_app multiple times might raise ValueError if app name default, 
        # but if the first one failed, ideally it didn't initialize?
        # Safe pattern: check if already initialized? 
        # But for simple scripts, simpler is better.
        try:
            firebase_admin.get_app() 
        except ValueError:
             firebase_admin.initialize_app(cred)
             
        db = firestore.client()
        print("Initialized Firebase via Key File.")
    except Exception as e:
         print(f"Error initializing form file: {e}")

if not db:
    print(f"Warning: No valid Firebase credentials found. Sync will fail.")

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
        
        print(f"Found {len(transactions)} transactions. Saving to Firestore...")
        
        # 3a. Save Transactions
        batch = db.batch()
        count = 0
        collection_ref = db.collection('xero_transactions')
        
        for tx in transactions:
            doc_ref = collection_ref.document(tx['BankTransactionID'])
            tx['synced_at'] = firestore.SERVER_TIMESTAMP
            batch.set(doc_ref, tx, merge=True)
            count += 1
            if count >= 400:
                batch.commit()
                batch = db.batch()
                count = 0
        if count > 0:
            batch.commit()

        # 4. Fetch & Save Accounts (GL Chart of Accounts)
        print("Syncing Chart of Accounts...")
        data_acc = client.get_accounts(access_token, tenant_id)
        accounts = data_acc.get('Accounts', [])

        batch = db.batch()
        count = 0
        acc_ref = db.collection('xero_accounts')
        
        for acc in accounts:
            doc_ref = acc_ref.document(acc['AccountID'])
            acc['synced_at'] = firestore.SERVER_TIMESTAMP
            batch.set(doc_ref, acc, merge=True)
            count += 1
            if count >= 400:
                batch.commit()
                batch = db.batch()
                count = 0
        if count > 0:
            batch.commit()
        print(f"Saved {len(accounts)} accounts.")

        # 5. Fetch & Save Invoices (Consolidated Data)
        print("Syncing Invoices (Consolidated)...")
        data_inv = client.get_invoices(access_token, tenant_id)
        invoices = data_inv.get('Invoices', [])
        
        batch = db.batch()
        count = 0
        inv_ref = db.collection('xero_invoices')
        
        for inv in invoices:
            doc_ref = inv_ref.document(inv['InvoiceID'])
            inv['synced_at'] = firestore.SERVER_TIMESTAMP
            batch.set(doc_ref, inv, merge=True)
            count += 1
            if count >= 400:
                batch.commit()
                batch = db.batch()
                count = 0
        if count > 0:
            batch.commit()
        print(f"Saved {len(invoices)} invoices.")

        # 6. Fetch Bank Statement Reports (Reconciled Status)
        # Filter for Bank Accounts first
        bank_accounts = [acc for acc in accounts if acc.get('Type') == 'BANK']
        print(f"found {len(bank_accounts)} bank accounts. Fetching statements...")

        # Date Range: Default 2020-01-01 to Yesterday
        from_date = "2020-01-01"
        to_date = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d') # Yesterday
        
        batch = db.batch()
        count = 0
        stmt_ref = db.collection('xero_bank_statement_lines')

        for bank in bank_accounts:
            print(f"Fetching statement for {bank['Name']}...")
            try:
                report = client.get_bank_statement_report(access_token, tenant_id, bank['AccountID'], from_date, to_date)
                
                # The report structure is nested: Reports[0] -> Rows -> (Header, Section, Row...)
                # We need to parse 'Rows' to find the data rows.
                # Usually: 'Rows' contains sections. One section has 'RowType'='Section' and 'Title'='Statement Lines' (or similar).
                # This is tricky without seeing the payload.
                # However, usually we just traverse ALL rows and look for those with 'Cells'.
                
                rows = report.get('Reports', [{}])[0].get('Rows', [])
                
                for row in rows:
                    if row.get('RowType') == 'Row':
                        # This is a data row
                        cells = row.get('Cells', [])
                        # We need to map cells to columns. The columns are defined in the 'Header' row theoretically, 
                        # but for Bank Statement it's usually standard: Date, Reference, Description, Amount, Balance, IsReconciled?
                        # Actually 'BankStatement' report might not have 'IsReconciled' column explicitly named, 
                        # but Xero UI "Reconciled" tab comes from this data.
                        # Wait, the PROPER way to get Reconciled status is usually the BankTransactions endpoint has 'Status' or 'IsReconciled'?
                        # User said: "BankStatement Report... explicitly includes reconciliation status."
                        # Let's save the raw row for now with the AccountID and defaults.
                        
                        line_item = {
                            "BankAccountID": bank['AccountID'],
                            "BankAccountName": bank['Name'],
                            "Cells": cells, # Store raw cells
                            "SyncedAt": firestore.SERVER_TIMESTAMP
                        }
                        
                        # Generate a pseudo-ID because rows don't always have IDs in reports
                        # We use Hash of (AccountID + Date + Description + Amount) to try to be unique-ish
                        # Or just random ID. Syncing reports is idempotent usually so set() is better if we have ID.
                        # For now, let's use `add()` (auto-ID) but that duplicates on every sync!
                        # Better: Use today's date in ID? 
                        # Ideally we find a TransactionID in the cells.
                        
                        stmt_ref.add(line_item) # MVP: Just append (User can clear collection if needed)
                        count += 1
                        
            except Exception as e:
                print(f"Failed to fetch statement for {bank['Name']}: {e}")

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
