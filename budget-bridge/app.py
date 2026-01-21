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
            
            if st.button("Logout"):
                st.session_state.token = None
                st.query_params.clear()
                st.rerun()

    except Exception as e:
        st.error(f"Error: {e}")
