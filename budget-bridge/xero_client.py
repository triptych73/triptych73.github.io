import os
import requests
import base64
from urllib.parse import urlencode

class XeroClient:
    def __init__(self):
        self.client_id = os.getenv("XERO_CLIENT_ID")
        self.client_secret = os.getenv("XERO_CLIENT_SECRET")
        self.redirect_uri = os.getenv("REDIRECT_URI")
        self.auth_url = "https://login.xero.com/identity/connect/authorize"
        self.token_url = "https://identity.xero.com/connect/token"
        self.api_base = "https://api.xero.com/api.xro/2.0"
        
        # Scopes required for Bank Transactions
        self.scopes = [
            "offline_access",
            "openid",
            "profile",
            "email",
            "accounting.transactions.read",
            "accounting.settings.read" # For knowing the org currency etc
        ]

    def get_auth_url(self):
        params = {
            "response_type": "code",
            "client_id": self.client_id,
            "redirect_uri": self.redirect_uri,
            "scope": " ".join(self.scopes),
            "state": "random_state_string" # In prod, use a random string and verify it
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
            return response.json()
        else:
            raise Exception(f"Token exchange failed: {response.text}")

    def refresh_token(self, refresh_token):
        data = {
            "grant_type": "refresh_token",
            "refresh_token": refresh_token
        }
        headers = self._get_auth_headers()
        
        response = requests.post(self.token_url, data=data, headers=headers)
        
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Token refresh failed: {response.text}")

    def _get_auth_headers(self):
        auth_str = f"{self.client_id}:{self.client_secret}"
        b64_auth = base64.b64encode(auth_str.encode()).decode()
        return {
            "Authorization": f"Basic {b64_auth}",
            "Content-Type": "application/x-www-form-urlencoded"
        }

    def get_tenants(self, access_token):
        """Get connected tenants (organizations)"""
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

    def get_bank_transactions(self, access_token, tenant_id):
        """Fetch bank transactions for the organization"""
        url = f"{self.api_base}/BankTransactions"
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Xero-Tenant-Id": tenant_id,
            "Accept": "application/json"
        }
        # You might want to add pagination or filtering here
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Failed to fetch bank transactions: {response.text}")
