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
            "accounting.settings.read"
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
            "Content-Type": "application/x-www-form-urlencoded"
        }
        
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
