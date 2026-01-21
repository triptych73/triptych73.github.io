import streamlit as st
import pandas as pd
from xero_client import XeroClient
import os
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

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
        if "accounting.reports.read" not in scopes_list:
             st.error("⚠️ MISSING PERMISSION: 'accounting.reports.read'. Please click LOGOUT below and reconnect to grant this permission.")
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


            with st.expander("Account Transactions Report (Detailed Ledger)"):
                st.write("Fetch item-by-item details including GL Codes and Tax Rates.")
                
                col_a1, col_a2 = st.columns(2)
                with col_a1:
                    at_start = st.date_input("From", pd.to_datetime("2020-01-01"), key="at_start")
                with col_a2:
                    at_end = st.date_input("To", pd.to_datetime("today"), key="at_end")
                
                if st.button("Fetch Detailed Ledger"):
                    with st.spinner("Fetching Account Transactions..."):
                        try:
                            # Fetch Report (All Accounts)
                            report = client.get_account_transactions_report(
                                access_token, 
                                tenant['tenantId'], 
                                str(at_start), 
                                str(at_end)
                            )
                            
                            # Parse Headers to find Columns
                            # Reports[0] -> Rows
                            rows = report.get('Reports', [{}])[0].get('Rows', [])
                            
                            # Flatten Data
                            simpler_rows = []
                            for row in rows:
                                if row.get('RowType') == 'Row':
                                    cells = row.get('Cells', [])
                                    # We capture the raw text for now.
                                    # Expected cols: Date, Description, Source, Reference, Debit, Credit, Gross, VAT, Account??
                                    # The 'Account' column might depend on grouping.
                                    # If not grouped, it usually appears.
                                    
                                    row_data = [c.get('Value') for c in cells]
                                    simpler_rows.append(row_data)
                            
                            if simpler_rows:
                                st.write(f"Found {len(simpler_rows)} lines.")
                                st.dataframe(pd.DataFrame(simpler_rows)) 
                                st.json(report) 
                            else:
                                st.warning("No data rows found in report.")
                                st.json(report)

                        except Exception as e:
                            st.warning(f"Report fetch failed (likely API path 404): {e}")
                            st.info("Falling back to parsing raw Bank Transactions...")
                            
                            # Fallback: Fetch Bank Transactions and explode LineItems
                            try:
                                # Fetch logic similar to Tab 1 but we process differently
                                data_fallback = client.get_bank_transactions(access_token, tenant['tenantId'])
                                txs = data_fallback.get('BankTransactions', [])
                                
                                detailed_rows = []
                                for tx in txs:
                                    base_info = {
                                        'Date': tx.get('DateString'),
                                        'Type': tx.get('Type'),
                                        'Reference': tx.get('Reference'),
                                        'Total': tx.get('Total')
                                    }
                                    # Iterate LineItems
                                    for line in tx.get('LineItems', []):
                                        row = base_info.copy()
                                        row['Description'] = line.get('Description')
                                        row['Quantity'] = line.get('Quantity')
                                        row['UnitAmount'] = line.get('UnitAmount')
                                        row['AccountCode'] = line.get('AccountCode')
                                        row['TaxType'] = line.get('TaxType')
                                        row['LineAmount'] = line.get('LineAmount')
                                        detailed_rows.append(row)
                                        
                                if detailed_rows:
                                    df_det = pd.DataFrame(detailed_rows)
                                    st.success(f"Successfully parsed {len(detailed_rows)} line items from Bank Transactions.")
                                    # Show AccountCode and TaxType prominently
                                    st.dataframe(df_det)
                                else:
                                    st.warning("No line items found in transactions.")
                                    
                            except Exception as ex2:
                                st.error(f"Fallback failed: {ex2}")
                                st.json(report) # Show the original 404 payload if helpful
            
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
