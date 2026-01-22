import streamlit as st
import pandas as pd
from xero_client import XeroClient
import os
import json
from datetime import datetime
from dotenv import load_dotenv
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Load environment variables
load_dotenv()

# Initialize Firebase (Global/Singleton pattern for Streamlit)
# Priority 1: Environment Variable
firebase_creds_str = os.getenv("FIREBASE_CREDENTIALS")
CRED_PATH = "/data/firebase_key.json"
db = None

try:
    # Check if already initialized
    firebase_admin.get_app()
    db = firestore.client()
except ValueError:
    # Not initialized, proceed
    
    # Priority 1: Environment Variable
    if firebase_creds_str:
        try:
            cred_dict = json.loads(firebase_creds_str)
            cred = credentials.Certificate(cred_dict)
            firebase_admin.initialize_app(cred)
            db = firestore.client()
        except Exception as e:
            print(f"Env Var Init failed: {e}. Falling back to file.")
    
    # Priority 2: File (if db is still None)
    if db is None:
        try:
            if os.path.exists(CRED_PATH):
                cred = credentials.Certificate(CRED_PATH)
                firebase_admin.initialize_app(cred)
                db = firestore.client()
            elif os.path.exists("firebase_key.json"):
                cred = credentials.Certificate("firebase_key.json")
                firebase_admin.initialize_app(cred)
                db = firestore.client()
        except Exception as e2:
             print(f"File Init failed: {e2}")

if db is None:
    st.warning("⚠️ Database Initialization Failed. Debug Info:")
    st.write(f"- Env Var Present: {bool(firebase_creds_str)}")
    st.write(f"- Key File Path: {CRED_PATH}")
    st.write(f"- Key File Exists: {os.path.exists(CRED_PATH)}")
    st.write(f"- Local Key File Exists: {os.path.exists('firebase_key.json')}")
    try:
        app = firebase_admin.get_app()
        st.write(f"- Firebase App Status: Initialized ({app.name})")
    except ValueError:
        st.write("- Firebase App Status: Not Initialized")
    except Exception as e:
        st.write(f"- Firebase App Check Error: {e}")

st.set_page_config(page_title="Budget Bridge", layout="wide")

st.title("Virgin Money <-> Xero Budget Bridge")

client = XeroClient()

# Initialize session state for auth
if 'token' not in st.session_state:
    # Try to load from file first
    saved_token = client.load_token()
    if saved_token:
        # Check if valid/refresh needed
        try:
            refreshed_token = client.refresh_token() 
            if refreshed_token:
                st.session_state.token = refreshed_token
            else:
                st.session_state.token = saved_token
        except:
             st.session_state.token = None
    else:
        st.session_state.token = None

# Handle Callback
query_params = st.query_params
if "code" in query_params:
    code = query_params["code"]
    try:
        # client.exchange_code now automatically saves to file
        token_data = client.exchange_code(code)
        st.session_state.token = token_data
        st.success("Successfully connected to Xero!")
        # Clear query params to prevent re-exchange on refresh
        st.query_params.clear()
        st.rerun()
    except Exception as e:
        st.error(f"Error connecting to Xero: {e}")

# Main Logic
if st.session_state.token is None:
    st.write("Connect your Xero account to specific Virgin Money Business transactions.")
    auth_url = client.get_auth_url()
    # Streamlit button to redirect
    st.link_button("Connect to Xero", auth_url)

else:
    # Token exists, fetch data
    token = st.session_state.token
    access_token = token['access_token']
    
    st.write("### Connected Organization")
    
    # DEBUG: Show scopes
    if 'scope' in token:
        scopes_list = token['scope'].split()
        missing = []
        if "accounting.reports.read" not in scopes_list:
             missing.append("accounting.reports.read")
        if "accounting.journals.read" not in scopes_list:
             missing.append("accounting.journals.read")
        
        if missing:
             st.error(f"⚠️ MISSING PERMISSIONS: {', '.join(missing)}. Please click LOGOUT below and reconnect.")
        else:
             st.caption(f"Granted Scopes: {token['scope']}")
    else:
        st.caption("Scopes not found in token.")
    
    try:
        # 1. Get Tenants (Orgs)
        tenants = client.get_tenants(access_token)
        
        if not tenants:
            st.warning("No organizations connected.")
        else:
            # For simplicity, assume the first tenant is the one we want, or verify by name
            # Real app might let you select if multiple
            tenant = tenants[0] 
            st.info(f"Using Organization: **{tenant['tenantName']}**")
            
            # 2. Data Fetching Tabs
            tab1, tab2, tab3 = st.tabs(["Bank Transactions", "Chart of Accounts", "Invoices"])

            with tab1:
                if st.button("Fetch Bank Transactions"):
                    with st.spinner("Fetching data from Xero..."):
                        try:
                            data = client.get_bank_transactions(access_token, tenant['tenantId'])
                            transactions = data.get('BankTransactions', [])
                            
                            if transactions:
                                df = pd.json_normalize(transactions)
                                st.write(f"Found {len(transactions)} transactions.")
                                st.dataframe(df)
                            else:
                                st.info("No bank transactions found.")
                        except Exception as e:
                            st.error(f"Error fetching bank transactions: {e}")

            with tab2:
                if st.button("Fetch Chart of Accounts"):
                    with st.spinner("Fetching Accounts..."):
                        try:
                            data = client.get_accounts(access_token, tenant['tenantId'])
                            accounts = data.get('Accounts', [])
                            
                            if accounts:
                                df = pd.json_normalize(accounts)
                                st.write(f"Found {len(accounts)} accounts.")
                                # Display key columns cleanly
                                cols = ['Code', 'Name', 'Type', 'Status', 'TaxType']
                                # Intersection of desired cols and actual cols
                                valid_cols = [c for c in cols if c in df.columns]
                                st.dataframe(df[valid_cols] if valid_cols else df)
                            else:
                                st.info("No accounts found.")
                        except Exception as e:
                            st.error(f"Error fetching accounts: {e}")

            with tab3:
                if st.button("Fetch Invoices (AR/AP)"):
                    with st.spinner("Fetching Invoices..."):
                        try:
                            # Note: This checks ALL invoices. Might be large.
                            data = client.get_invoices(access_token, tenant['tenantId'])
                            invoices = data.get('Invoices', [])
                            
                            if invoices:
                                df = pd.json_normalize(invoices)
                                st.write(f"Found {len(invoices)} invoices.")
                                st.dataframe(df)
                            else:
                                st.info("No invoices found.")
                        except Exception as e:
                            st.error(f"Error fetching invoices: {e}")

            with st.expander("Bank Statement Report (Reconciled Items)"):
                st.write("Fetch the official Bank Statement Report to see reconciled lines. Default: 2020-01-01 to Yesterday.")
                
                # Date Inputs
                col1, col2 = st.columns(2)
                with col1:
                    start_date = st.date_input("Start Date", pd.to_datetime("2020-01-01"))
                with col2:
                    end_date = st.date_input("End Date", pd.to_datetime("today") - pd.Timedelta(days=1))
                
                st.write("---")
                # DIAGNOSTICS
                col_d1, col_d2 = st.columns(2)
                with col_d1:
                    if st.button("Test: Balance Sheet"):
                        try:
                            bs = client.get_balance_sheet(access_token, tenant['tenantId'])
                            st.success("Balance Sheet OK")
                        except Exception as e:
                            st.error(f"BS Fail: {e}")
                
                with col_d2:
                    if st.button("Test: Profit & Loss"):
                        try:
                            pl = client.get_profit_and_loss(access_token, tenant['tenantId'])
                            st.success("P&L OK")
                        except Exception as e:
                            st.error(f"P&L Fail: {e}")
                st.write("---")

                # Bank Account Select
                # We need to fetch accounts first to let user select
                if st.button("Fetch Bank Report"):
                    with st.spinner("Fetching Report..."):
                        try:
                            # 1. Get Bank Accounts
                            acc_data = client.get_accounts(access_token, tenant['tenantId'])
                            all_accs = acc_data.get('Accounts', [])
                            bank_accs = [a for a in all_accs if a['Type'] == 'BANK']
                            
                            if not bank_accs:
                                st.warning("No bank accounts found.")
                            else:
                                for ba in bank_accs:
                                    st.subheader(f"Report for {ba['Name']}")
                                    
                                    st.write(f"**Debug Params:** AccID=`{ba['AccountID']}` | From=`{str(start_date)}` | To=`{str(end_date)}`")
                                    
                                    report = client.get_bank_statement_report(
                                        access_token, 
                                        tenant['tenantId'], 
                                        ba['AccountID'], 
                                        str(start_date), 
                                        str(end_date)
                                    )
                                    
                                    # Basic JSON dump for MVP inspection
                                    st.json(report)
                                    
                        except Exception as e:
                            st.error(f"Error fetching report: {e}")


            with st.expander("Journals / GL View (Account Transactions)"):
                st.write("Fetch full General Ledger lines (Journals). Requires 'accounting.journals.read' permission.")
                
                
                if st.button("Fetch Journals (Last 100)"):
                    with st.spinner("Fetching Journals..."):
                        try:
                            # Fetch Journals (Offset 0 = Latest/First page)
                            # Note: To get ALL, we would loop. For UI MVP, just get one page.
                            data = client.get_journals(access_token, tenant['tenantId'])
                            journals = data.get('Journals', [])
                            
                            flat_rows = []
                            for j in journals:
                                j_date = j.get('JournalDateString')
                                j_num = j.get('JournalNumber')
                                j_ref = j.get('Reference')
                                j_source = j.get('SourceType')
                                
                                for line in j.get('JournalLines', []):
                                    flat_rows.append({
                                        'Date': j_date,
                                        'Journal #': j_num,
                                        'Source': j_source,
                                        'Reference': j_ref,
                                        'AccountCode': line.get('AccountCode'),
                                        'AccountName': line.get('AccountName'),
                                        'Description': line.get('Description'),
                                        'Gross': line.get('GrossAmount'),
                                        'Net': line.get('NetAmount'),
                                        'TaxType': line.get('TaxType'),
                                        'TaxName': line.get('TaxName')
                                    })
                            
                            if flat_rows:
                                st.success(f"Fetched {len(journals)} journals containing {len(flat_rows)} line items.")
                                st.dataframe(pd.DataFrame(flat_rows))
                            else:
                                st.warning("No journals found.")
                                
                        except Exception as e:
                            st.error(f"Error fetching journals: {e}")
                            st.info("Did you remember to Logout & Re-Connect to approve the new Journals permission?")
            
            with st.expander("Custom Reconciliation Report (Phase 2)"):
                st.write("Join Bank Transactions with Journals to see GL Coding.")
                if st.button("Generate Joined Report"):
                    if db is None:
                        st.error("Database not initialized.")
                    else:
                        with st.spinner("Reading full history from Database..."):
                            try:
                                # 1. Get Bank Tx
                                b_docs = db.collection('xero_transactions').stream()
                                bank_rows = []
                                for d in b_docs:
                                    dd = d.to_dict()
                                    bank_rows.append(dd)
                                df_bank = pd.DataFrame(bank_rows)
                                
                                # 2. Get Journals
                                j_docs = db.collection('xero_journals').stream()
                                journal_rows = []
                                for d in j_docs:
                                    j = d.to_dict()
                                    # Explode lines immediately or later? 
                                    # Better to keep 'SourceID' accessible.
                                    # SourceID is on the Journal level.
                                    sid = j.get('SourceID')
                                    stype = j.get('SourceType')
                                    
                                    # Optimization: Only care about Bank Recs
                                    # (Sometimes they are 'BANKREC' or 'BANKTRANSFER' or 'SPENDMONEY'?)
                                    # Let's keep all for now to be safe.
                                    if sid:
                                        for line in j.get('JournalLines', []):
                                            journal_rows.append({
                                                'SourceID': sid,
                                                'SourceType': stype,
                                                'AccountCode': line.get('AccountCode'),
                                                'TaxType': line.get('TaxType'),
                                                'JournalGross': line.get('GrossAmount'),
                                                'JournalNet': line.get('NetAmount')
                                            })
                                            
                                df_journal = pd.DataFrame(journal_rows)
                                
                                if df_bank.empty or df_journal.empty:
                                    st.warning(f"Data missing. Bank: {len(df_bank)}, Journals: {len(df_journal)}")
                                else:
                                    # 3. JOIN
                                    # Bank TransactionID == Journal SourceID
                                    # Note: TransactionID in bank tx might be named 'TransactionID' or 'BankTransactionID'?
                                    # API returns 'BankTransactionID'. Let's check our sync script... we dumped raw.
                                    # Usually 'BankTransactionID'.
                                    
                                    # Let's clean columns for merge
                                    # Rename df_bank 'BankTransactionID' -> 'JoinID'
                                    # Rename df_journal 'SourceID' -> 'JoinID'
                                    
                                    # Prepare Bank DF
                                    # Check actually existing columns
                                    msg = f"Bank Cols: {list(df_bank.columns)}"
                                    # Try to find the ID
                                    bank_id_col = 'BankTransactionID' if 'BankTransactionID' in df_bank.columns else 'TransactionID'
                                    
                                    # Merge
                                    merged = pd.merge(
                                        df_bank, 
                                        df_journal, 
                                        left_on=bank_id_col, 
                                        right_on='SourceID', 
                                        how='left'
                                    )
                                    
                                    # Select useful columns
                                    # Date, Contact.Name, Description, Total, AccountCode, TaxType
                                    # Handle nested 'Contact': Contact is usually a dict in the raw JSON
                                    # We need to flatten it if present.
                                    if 'Contact' in merged.columns:
                                        merged['ContactName'] = merged['Contact'].apply(lambda x: x.get('Name') if isinstance(x, dict) else str(x))
                                    else:
                                        merged['ContactName'] = "Unknown"
                                        
                                    final_cols = ['DateString', 'ContactName', 'Description', 'Total', 'AccountCode', 'TaxType', 'JournalNet', 'JournalGross']
                                    # Filter only cols that exist
                                    final_cols = [c for c in final_cols if c in merged.columns]
                                    
                                    st.success(f"Generated Report with {len(merged)} lines.")
                                    st.dataframe(merged[final_cols])
                                    
                            except Exception as e:
                                st.error(f"Report Generation Failed: {e}")

            with st.expander("📊 Account Transactions Report (Pre-Synced)", expanded=True):
                st.write("This report is generated by the background sync job and stored in Firestore.")
                st.caption("Data comes from `xero_custom_report` collection.")
                
                if db is None:
                    st.error("Database not initialized.")
                else:
                    if st.button("Load Report", key="load_custom_report"):
                        with st.spinner("Loading report from database..."):
                            try:
                                report_docs = db.collection('xero_custom_report').order_by('JournalNumber', direction=firestore.Query.DESCENDING).limit(1000).stream()
                                rows = []
                                for doc in report_docs:
                                    rows.append(doc.to_dict())
                                
                                if rows:
                                    df = pd.DataFrame(rows)
                                    
                                    # Reorder columns for readability
                                    display_cols = ['Date', 'JournalNumber', 'Reference', 'Description', 'AccountCode', 'AccountName', 'Net', 'Tax', 'Gross', 'TaxType']
                                    display_cols = [c for c in display_cols if c in df.columns]
                                    
                                    st.success(f"Loaded {len(df)} line items (showing up to 1000).")
                                    st.dataframe(df[display_cols], use_container_width=True)
                                    
                                    # CSV Download
                                    csv = df[display_cols].to_csv(index=False).encode('utf-8')
                                    st.download_button(
                                        label="📥 Download CSV",
                                        data=csv,
                                        file_name="account_transactions_report.csv",
                                        mime="text/csv"
                                    )
                                else:
                                    st.warning("No data found. Has the background sync run yet?")
                            except Exception as e:
                                st.error(f"Error loading report: {e}")

            if st.button("Logout (Reset Connection)"):
                st.session_state.token = None
                # Delete the token file to force a fresh OAuth flow (needed for scope updates)
                if os.path.exists("/data/xero_token.json"):
                    os.remove("/data/xero_token.json")
                if os.path.exists("xero_token.json"): # Fallback for local dev
                    os.remove("xero_token.json")
                
                st.query_params.clear()
                st.rerun()

    except Exception as e:
        st.error(f"Error: {e}")
