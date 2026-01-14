import os
import mimetypes
import datetime

class LocalClient:
    def __init__(self, root_path):
        self.root_path = os.path.abspath(root_path)

    def _item_from_entry(self, entry):
        """Convert os.DirEntry to Graph-like dict."""
        stats = entry.stat()
        is_dir = entry.is_dir()
        
        # Mime Type
        mime = "folder" if is_dir else mimetypes.guess_type(entry.name)[0]
        
        item = {
            "id": entry.path, # Use full path as ID
            "name": entry.name,
            "size": stats.st_size,
            "lastModifiedDateTime": datetime.datetime.fromtimestamp(stats.st_mtime).isoformat(),
            "webUrl": f"file://{entry.path}",
            "mimeType": mime,
            # For compatibility with indexer_logic which might check '@microsoft.graph.downloadUrl'
            # We can leave it empty and handle download via ID
            "@microsoft.graph.downloadUrl": None 
        }
        
        if is_dir:
            item["folder"] = {}
            
        return item

    def get_drive_root_children(self):
        """Get children of the root folder."""
        return self.get_drive_item_children(self.root_path)

    def get_drive_item_children(self, item_path):
        """Get children of a specific folder path."""
        results = []
        try:
            # Ensure we are inside root? (Security check optional for now)
            with os.scandir(item_path) as entries:
                for entry in entries:
                    results.append(self._item_from_entry(entry))
        except Exception as e:
            print(f"Error reading {item_path}: {e}")
        return results

    def get_drive_item(self, item_path):
        """Get a single item's metadata."""
        try:
            # os.scandir is efficient but for single file we use os.stat + os.path
            if not os.path.exists(item_path):
                return None
                
            name = os.path.basename(item_path)
            stats = os.stat(item_path)
            is_dir = os.path.isdir(item_path)
            mime = "folder" if is_dir else mimetypes.guess_type(name)[0]
            
            item = {
                "id": item_path,
                "name": name,
                "size": stats.st_size,
                "lastModifiedDateTime": datetime.datetime.fromtimestamp(stats.st_mtime).isoformat(),
                "webUrl": f"file://{item_path}",
                "mimeType": mime
            }
            
            if is_dir:
                item["folder"] = {}
                
            return item
        except Exception as e:
            print(f"Error getting item {item_path}: {e}")
            return None

    def download_file(self, item_path, mime_type=None):
        """Download file content from path."""
        try:
            with open(item_path, 'rb') as f:
                return f.read()
        except Exception as e:
            print(f"Error reading file {item_path}: {e}")
            return None
