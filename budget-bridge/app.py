import streamlit as st
import pandas as pd
from xero_client import XeroClient
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

st.set_page_config(page_title="Budget Bridge", layout="wide")

st.title("Virgin Money <-> Xero Budget Bridge")

client = XeroClient()

# Initialize session state for auth
if 'token' not in st.session_state:
    st.session_state.token = None

# Handle Callback
query_params = st.query_params
if "code" in query_params and st.session_state.token is None:
    code = query_params["code"]
    try:
        token_data = client.exchange_code(code)
        st.session_state.token = token_data
        st.success("Successfully connected to Xero!")
        # Clear query params to prevent re-exchange on refresh
        st.query_params.clear()
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
            
            # 2. Fetch Transactions
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
                        st.error(f"Error fetching transactions: {e}")
            
            if st.button("Logout"):
                st.session_state.token = None
                st.query_params.clear()
                st.rerun()

    except Exception as e:
        st.error(f"Error: {e}")
