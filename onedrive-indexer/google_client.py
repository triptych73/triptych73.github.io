import os
import io
import pickle
import requests
from google_auth_oauthlib.flow import Flow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload
import streamlit as st

# Scopes required
SCOPES = [
    'https://www.googleapis.com/auth/drive.readonly',
    'https://www.googleapis.com/auth/photospicker.mediaitems.readonly', # New Picker API Scope
    'openid',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
]

class GoogleClient:
    def __init__(self, credentials=None):
        self.creds = credentials
        self.drive_service = None
        self.photos_service = None
        
        if self.creds:
            self.drive_service = build('drive', 'v3', credentials=self.creds)

    def get_me(self):
        """Get current user profile info."""
        if not self.creds: return None
        try:
            # helper to get user info
            user_info_service = build('oauth2', 'v2', credentials=self.creds)
            user_info = user_info_service.userinfo().get().execute()
            return {
                "displayName": user_info.get('name'),
                "mail": user_info.get('email'),
                "id": user_info.get('id')
            }
        except Exception:
            return None

    # --- Drive Methods ---

    def get_drive_root_children(self):
        """Get items in root."""
        if not self.drive_service: return []
        # Query for files in root folder and not trashed
        query = "'root' in parents and trashed = false"
        return self._list_drive_files(query)

    def get_drive_item_children(self, folder_id):
        """Get items in a specific folder."""
        if not self.drive_service: return []
        query = f"'{folder_id}' in parents and trashed = false"
        return self._list_drive_files(query)

    def _list_drive_files(self, query):
        results = self.drive_service.files().list(
            q=query,
            pageSize=100,
            fields="nextPageToken, files(id, name, mimeType, webContentLink)" # fetch essential fields
        ).execute()
        files = results.get('files', [])
        
        # Normalize to look like common interface
        normalized = []
        for f in files:
            is_folder = f['mimeType'] == 'application/vnd.google-apps.folder'
            
            # Construct a normalized item
            item = {
                "id": f['id'],
                "name": f['name'],
                "mimeType": f['mimeType'],
                "webUrl": f.get('webContentLink'),
            }
            if is_folder:
                item['folder'] = {} # Signal it's a folder
            else:
                item['file'] = {'mimeType': f['mimeType']}
            
            normalized.append(item)
        return normalized

    def download_file(self, file_id, mime_type=None):
        """Download file content."""
        if not self.drive_service: return None
        
        # Handle Google Docs export
        if mime_type and mime_type.startswith('application/vnd.google-apps.'):
            # Map Google types to export types
            export_mime = None
            if 'document' in mime_type: export_mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' # docx
            elif 'spreadsheet' in mime_type: export_mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' # xlsx
            elif 'presentation' in mime_type: export_mime = 'application/vnd.openxmlformats-officedocument.presentationml.presentation' # pptx
            
            if export_mime:
                request = self.drive_service.files().export_media(fileId=file_id, mimeType=export_mime)
            else:
                return None # Unsupported g-suite type
        else:
            # Binary download
            request = self.drive_service.files().get_media(fileId=file_id)
            
        fh = io.BytesIO()
        downloader = MediaIoBaseDownload(fh, request)
        done = False
        while done is False:
            status, done = downloader.next_chunk()
            
        return fh.getvalue()

    # --- Picker API Methods ---
    
    def create_picker_session(self):
        """Creates a Picker session and returns the session object."""
        if not self.creds: return None
        
        try:
            if not self.creds.valid:
                self.creds.refresh(Request())
        except Exception:
            return None
            
        url = 'https://photospicker.googleapis.com/v1/sessions'
        headers = {
            'Authorization': f'Bearer {self.creds.token}',
            'Content-Type': 'application/json'
        }
        
        # Spec requires pollingConfig
        body = {
            "pollingConfig": {
                "pollInterval": "5s"
            }
        }
        
        try:
            response = requests.post(url, headers=headers, json=body)
            if response.status_code != 200:
                st.error(f"Picker Error {response.status_code}: {response.text}")
                return None
            return response.json()
        except Exception as e:
            st.error(f"Critical Exception in Picker Request: {e}")
            return None

    def get_session_status(self, session_id):
        """Checks if the session is done (mediaItemsSet=true)."""
        if not self.creds: return None
        
        url = f'https://photospicker.googleapis.com/v1/sessions/{session_id}'
        headers = {'Authorization': f'Bearer {self.creds.token}'}
        
        try:
            response = requests.get(url, headers=headers)
            if response.status_code == 200:
                return response.json() # Returns session object with mediaItemsSet bool
        except Exception:
            pass
        return None

    def get_picker_items(self, session_id):
        """Recovers media items from a COMPLETED session."""
        if not self.creds: return []
        
        # NOTE: client code should verify mediaItemsSet is true before calling this
        url = f'https://photospicker.googleapis.com/v1/mediaItems?sessionId={session_id}&pageSize=100'
        headers = {'Authorization': f'Bearer {self.creds.token}'}
        
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            st.error(f"Error fetching items: {response.text}")
            return []
            
        data = response.json()
        media_items = data.get('mediaItems', [])
        
        normalized = []
        for item in media_items:
            # Check for nested mediaFile (standard Picker API) vs top-level (some user reports)
            media_file = item.get('mediaFile', {})
            
            # ID is usually top level
            item_id = item.get('id')
            
            # Filename might be in mediaFile or top level
            name = media_file.get('filename') or item.get('filename') or f"photo_{item_id[-5:]}.jpg"
            
            # MimeType might be in mediaFile or top level
            mime_type = media_file.get('mimeType') or item.get('mimeType')
            
            # BaseUrl is usually in mediaFile
            base_url = media_file.get('baseUrl') or item.get('baseUrl')
            
            norm_item = {
                "id": item_id, 
                "name": name,
                "mimeType": mime_type,
                "webUrl": None, 
                "photo_url": base_url,
                "file": {"mimeType": mime_type}
            }
            normalized.append(norm_item)
        return normalized

    def download_photo(self, photo_url):
        # Picker BaseURL works same as Library API for download
        if not photo_url: return None
        try:
            # =d downloads original
            download_url = f"{photo_url}=d" 
            response = requests.get(download_url, headers={'Authorization': f'Bearer {self.creds.token}'})
            if response.status_code == 200:
                return response.content
        except Exception:
            return None

# Auth Flow Helpers
def create_flow(client_secret_file=None, client_config=None, redirect_uri=None):
    """Helper to create Flow from file or dict."""
    if client_secret_file and os.path.exists(client_secret_file):
        return Flow.from_client_secrets_file(
            client_secret_file,
            scopes=SCOPES,
            redirect_uri=redirect_uri
        )
    if client_config:
        return Flow.from_client_config(
            client_config,
            scopes=SCOPES,
            redirect_uri=redirect_uri
        )
    raise ValueError("No valid client_secret.json or client_config provided.")

def get_google_auth_url(client_secret_file=None, client_config=None, redirect_uri=None, **kwargs):
    flow = create_flow(client_secret_file, client_config, redirect_uri)
    auth_url, _ = flow.authorization_url(prompt='consent', **kwargs)
    return auth_url

def get_google_token_from_code(client_secret_file=None, client_config=None, code=None, redirect_uri=None):
    flow = create_flow(client_secret_file, client_config, redirect_uri)
    flow.fetch_token(code=code)
    return flow.credentials
