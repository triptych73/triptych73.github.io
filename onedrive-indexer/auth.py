import msal
import os

# Load settings from environment variables (or Streamlit secrets in app.py)
# Ideally these are injected, but helper functions can accept them.

def build_msal_app(client_id, client_secret, authority):
    return msal.ConfidentialClientApplication(
        client_id,
        authority=authority,
        client_credential=client_secret,
    )

def get_auth_url(app, redirect_uri, scopes):
    return app.get_authorization_request_url(
        scopes,
        redirect_uri=redirect_uri
    )

def get_token_from_code(app, code, redirect_uri, scopes):
    result = app.acquire_token_by_authorization_code(
        code,
        scopes=scopes,
        redirect_uri=redirect_uri
    )
    return result
