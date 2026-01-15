import requests

GRAPH_URI = "https://graph.microsoft.com/v1.0"

class GraphClient:
    def __init__(self, token):
        self.token = token
        self.headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }

    def get_me(self):
        """Get current user's profile."""
        response = requests.get(f"{GRAPH_URI}/me", headers=self.headers)
        if response.status_code == 200:
            return response.json()
        return None

    def _get_all_pages(self, url):
        """Helper to fetch all pages of results."""
        results = []
        while url:
            response = requests.get(url, headers=self.headers)
            if response.status_code == 200:
                data = response.json()
                results.extend(data.get('value', []))
                url = data.get('@odata.nextLink') # None if no more pages
            else:
                error_msg = f"Graph API Error: {response.status_code} - {response.text}"
                print(error_msg)
                raise Exception(error_msg)
        return results

    def get_drive_root_children(self):
        """Get children of the root folder (paginated)."""
        # top=999 helps, but pagination is key
        return self._get_all_pages(f"{GRAPH_URI}/me/drive/root/children?top=999")

    def get_drive_item_children(self, item_id):
        """Get children of a specific folder (paginated)."""
        return self._get_all_pages(f"{GRAPH_URI}/me/drive/items/{item_id}/children?top=999")

    def get_drive_item(self, item_id):
        """Get a single item's metadata."""
        response = requests.get(f"{GRAPH_URI}/me/drive/items/{item_id}", headers=self.headers)
        if response.status_code == 200:
            return response.json()
        return None

    def download_file(self, download_url):
        """Download file content from the @microsoft.graph.downloadUrl."""
        if not download_url: return None
        response = requests.get(download_url)
        if response.status_code == 200:
            return response.content
        return None

    def put_file(self, parent_id, filename, content):
        """Upload a file to a specific folder."""
        url = f"{GRAPH_URI}/me/drive/items/{parent_id}:/{filename}:/content"
        response = requests.put(url, headers=self.headers, data=content)
        return response.status_code in [200, 201]
