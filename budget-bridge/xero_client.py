import os
import requests
import base64
import json
import time
from urllib.parse import urlencode
from datetime import datetime

TOKEN_FILE = "/data/xero_token.json"  # Persist in the mapped /data volume

class XeroClient:
    def __init__(self):
        self.client_id = os.getenv("XERO_CLIENT_ID")
        self.client_secret = os.getenv("XERO_CLIENT_SECRET")
        self.redirect_uri = os.getenv("REDIRECT_URI")
        self.auth_url = "https://login.xero.com/identity/connect/authorize"
        self.token_url = "https://identity.xero.com/connect/token"
        self.api_base = "https://api.xero.com/api.xro/2.0"
        
        self.scopes = [
            "offline_access",
            "openid",
            "profile",
            "email",
            "accounting.transactions.read",
            "accounting.settings.read",
            "accounting.reports.read"
        ]

    def get_auth_url(self):
        params = {
            "response_type": "code",
            "client_id": self.client_id,
            "redirect_uri": self.redirect_uri,
            "scope": " ".join(self.scopes),
            "state": "state_123" 
        }
        return f"{self.auth_url}?{urlencode(params)}"

    def exchange_code(self, code):
        data = {
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": self.redirect_uri
        }
        headers = self._get_auth_headers()
        
        response = requests.post(self.token_url, data=data, headers=headers)
        
        if response.status_code == 200:
            token = response.json()
            self.save_token(token)
            return token
        else:
            raise Exception(f"Token exchange failed: {response.text}")

    def refresh_token(self):
        token = self.load_token()
        if not token or 'refresh_token' not in token:
            print("No refresh token available.")
            return None

        data = {
            "grant_type": "refresh_token",
            "refresh_token": token['refresh_token']
        }
        headers = self._get_auth_headers()
        
        response = requests.post(self.token_url, data=data, headers=headers)
        
        if response.status_code == 200:
            new_token = response.json()
            self.save_token(new_token)
            return new_token
        else:
            print(f"Token refresh failed: {response.text}")
            return None

    def get_valid_token(self):
        """Returns a valid access token, refreshing if necessary."""
        token = self.load_token()
        if not token:
            return None
            
        # Check if expired (give 60s buffer)
        # Assuming we save 'expires_at' or calculate it using 'expires_in' when saving but logic simplifies here:
        # Just try to use it? Or better, Xero tokens usually have 'expires_in' (seconds).
        # For robustness, let's just refresh if we suspect it's old or if a call fails (401).
        # A simple strategy: ALWAYS refresh if it's been more than 25 mins since last save? 
        # Or simpler: Just try refresh first if allow_refresh is true? 
        # Best practice: Check expiration.
        
        # NOTE: For simplicity in this script, we will just try to refresh if the file is older than 20 mins
        # or rely on the caller to handle 401. 
        # Actually, let's just attempt refresh if provided.
        
        return self.refresh_token() 


    def _get_auth_headers(self):
        auth_str = f"{self.client_id}:{self.client_secret}"
        b64_auth = base64.b64encode(auth_str.encode()).decode()
        return {
            "Authorization": f"Basic {b64_auth}",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "BudgetBridge/1.0"
        }

    def get_account_transactions_report(self, access_token, tenant_id, from_date, to_date, bank_account_id=None):
        """
        Fetches the Account Transactions Report.
        params:
          bank_account_id: Optional. If None, Xero defaults (usually All or need to specify).
                           Xero API param is 'bankAccountID' ?? No, Account Transactions is usually 'account' param.
                           Wait, endpoint is /Reports/AccountTransactions. 
                           Docs say params: 'fromDate', 'toDate'.
                           And 'bankAccountID' is NOT a standard param here. It's usually a list of accounts?
                           Actually, standard Reports can filter by 'AccountID' or 'BankAccountId'?
                           Let's check Xero Docs mentally: 
                           GET /Reports/AccountTransactions
                           Query parameters: date, fromDate, toDate, periods, timeframe, trackingCategoryID, trackingOptionID...
                           Does it filter by Account? 
                           Use generic 'get_report' approach or specific?
                           Actually, Xero's new Reports API might be different. But 2.0 /Reports/AccountTransactions exists.
                           It generally returns *all* unless filtered? 
                           Wait, the user wants "Bank Account" specific? 
                           Let's try standard params. If 'bankAccountID' isn't supported, we might get everything.
        """
        url = f"{self.api_base}/Reports/AccountTransactions"
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Xero-Tenant-Id": tenant_id,
            "Accept": "application/json",
            "User-Agent": "BudgetBridge/1.0"
        }
        params = {
            "fromDate": from_date,
            "toDate": to_date
        }
        # If the user wants to filter by a specific bank account, we usually pass 'bankAccountID' 
        # BUT for AccountTransactions, it might be just 'account'.
        # Let's try passing 'bankAccountID' as it is a common filter for Bank Reports, 
        # but for AccountTransactions it might be ignored or error.
        # User screenshot showed "Accounts: 104 selected". 
        # For now, let's fetch ALL by default (minimal params) to ensure 200 OK, 
        # and if possible filter in Pandas or if we find the specific param.
        # (Research says: Xero API 2.0 AccountTransactions doesn't easily take 'AccountID' as a single param to filter ONE account 
        # except maybe via deep hacks or it's not documented well for the 'Classic' report. 
        # The 'BankStatement' report took 'bankAccountID'. 
        # We will try fetching ALL and filtering Client-side in Python for MVP).
        
        response = requests.get(url, headers=headers, params=params)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Failed to fetch account transactions report: {response.text}")
        
    def save_token(self, token):
        # Add timestamp for convenience
        token['saved_at'] = time.time()
        
        # Ensure dir exists (it should because of Docker volume, but good to be safe)
        os.makedirs(os.path.dirname(TOKEN_FILE), exist_ok=True)
        
        with open(TOKEN_FILE, 'w') as f:
            json.dump(token, f)
            
    def load_token(self):
        try:
            if os.path.exists(TOKEN_FILE):
                with open(TOKEN_FILE, 'r') as f:
                    return json.load(f)
        except Exception as e:
            print(f"Error loading token: {e}")
        return None

    def get_tenants(self, access_token):
        url = "https://api.xero.com/connections"
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json"
        }
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Failed to get tenants: {response.text}")

    def get_bank_transactions(self, access_token, tenant_id, if_modified_since=None):
        url = f"{self.api_base}/BankTransactions"
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Xero-Tenant-Id": tenant_id,
            "Accept": "application/json"
        }
        if if_modified_since:
            headers['If-Modified-Since'] = if_modified_since.strftime('%a, %d %b %Y %H:%M:%S GMT')
            
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json()
        elif response.status_code == 304:
             return {"BankTransactions": []} # Not modified
        else:
            raise Exception(f"Failed to fetch bank transactions: {response.text}")

    def get_accounts(self, access_token, tenant_id):
        url = f"{self.api_base}/Accounts"
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Xero-Tenant-Id": tenant_id,
            "Accept": "application/json"
        }
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Failed to fetch accounts: {response.text}")

    def get_invoices(self, access_token, tenant_id):
        # Fetch all invoices (no paging logic for MVP, might hit limits if massive)
        # Xero API supports paging, but 'Invoices' endpoint without filters returns a lot.
        # We might want to filter by status or date in future.
        url = f"{self.api_base}/Invoices"
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Xero-Tenant-Id": tenant_id,
            "Accept": "application/json"
        }
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Failed to fetch invoices: {response.text}")

    def get_bank_statement_report(self, access_token, tenant_id, bank_account_id, from_date, to_date):
        """
        Fetches the Bank Statement Report.
        Dates should be strings 'YYYY-MM-DD'.
        """
        url = f"{self.api_base}/Reports/BankStatement"
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Xero-Tenant-Id": tenant_id,
            "Accept": "application/json",
            "User-Agent": "BudgetBridge/1.0"
        }
        params = {
            "bankAccountID": bank_account_id,
            "fromDate": from_date,
            "toDate": to_date
        }
        response = requests.get(url, headers=headers, params=params)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Failed to fetch bank statement report: {response.text}")

    def get_balance_sheet(self, access_token, tenant_id, date=None):
        url = f"{self.api_base}/Reports/BalanceSheet"
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Xero-Tenant-Id": tenant_id,
            "Accept": "application/json",
            "User-Agent": "BudgetBridge/1.0"
        }
        params = {}
        if date:
            params['date'] = date
            
        response = requests.get(url, headers=headers, params=params)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Failed to fetch balance sheet: {response.text}")
