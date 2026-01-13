from pdf_utils import extract_pdf_text
from pptx_utils import extract_pptx
import io
import datetime

# Lazy import
import db_client

def extract_word(file_bytes):
    # Placeholder - in real app, use python-docx
    return "[Word extraction placeholder]" # You might want to implement this properly later

def extract_excel(file_bytes):
    return "[Excel extraction placeholder]"

def extract_image_with_llm(image_bytes, llm_client, system_prompt=None):
    if not llm_client:
        return "[Image Content - AI analysis required]"
    
    default_prompt = "Analyze this image. Transcribe any text found (OCR) and describe the visual content in detail."
    final_prompt = system_prompt if system_prompt and system_prompt.strip() else default_prompt
    
    return llm_client.analyze_image(
        image_bytes, 
        prompt=final_prompt
    )

def process_selection(client, selected_items, provider="onedrive", status_callback=None, recursive=True, llm_client=None, sync_db=False, system_prompt=None):
    """
    Processes a list of selected items (files or folders).
    Generic logic for OneDrive and Google Drive.
    """
    results = {}
    
    # Standardize item structure if needed or assume client returns standard props
    queue = [(item, item.get('name')) for item in selected_items]
    
    processed_count = 0
    
    while queue:
        item, current_path = queue.pop(0)
        item_name = item.get('name')
        item_id = item.get('id')
        print(f"DEBUG: Processing {item_name} (ID: {item_id})")
        
        # Determine if folder or file
        is_folder = 'folder' in item
        is_file = 'file' in item or not is_folder
        
        if is_folder:
            if recursive:
                try:
                    children = client.get_drive_item_children(item_id)
                    for child in children:
                        child_path = f"{current_path}/{child.get('name')}"
                        queue.append((child, child_path))
                except Exception as e:
                    if status_callback: status_callback(f"Error accessing folder {item_name}: {e}")
                    
        elif is_file:
            # Handle mime types or extensions
            if '.' in item_name:
                ext = item_name.split('.')[-1].lower()
            else:
                # Try to map mimeType to ext if possible, or skip?
                mime = item.get('mimeType', '')
                if 'google-apps.document' in mime: ext = 'docx' 
                elif 'google-apps.spreadsheet' in mime: ext = 'xlsx'
                elif 'google-apps.presentation' in mime: ext = 'pptx'
                elif 'image' in mime: ext = 'jpg' # generic
                else: ext = 'unknown'

            content = None
            format_tag = ""
            
            # Filter by supported extensions
            supported_extensions = {
                'docx', 'xlsx', 'xls', 'pdf', 'pptx', 'ppt', 
                'jpg', 'jpeg', 'png', 'tiff', 'txt', 'md'
            }
            
            if ext not in supported_extensions:
                continue

            if status_callback: status_callback(f"Checking: {current_path}")

            # Download
            file_bytes = None
            try:
                if provider == "onedrive":
                    # Backward compat: OneDrive client expects URL
                    url = item.get('@microsoft.graph.downloadUrl')
                    file_bytes = client.download_file(url)
                elif provider in ["google", "google_photos", "googlephotos", "googledrive"]:
                    # Check for direct URL (Picker API)
                    photo_url = item.get('photo_url')
                    if photo_url:
                        # Append =d for download if not present (though baseUrl usually works)
                        download_url = photo_url
                        if '=d' not in download_url:
                             download_url += '=d'
                        
                        import requests
                        
                        headers = {}
                        # Picker API documentation implies baseUrl is short-lived public, 
                        # but 403 suggests we might need Auth or the URL expired.
                        # Adding Auth header to be safe if client has creds.
                        if hasattr(client, 'creds') and client.creds:
                            # Some sources suggest header isn't needed, but 403 implies access denied.
                            headers['Authorization'] = f'Bearer {client.creds.token}'
                        # Try without modification first? Or with =d.
                        # Let's verify what we are getting.
                        
                        resp = requests.get(download_url, headers=headers, allow_redirects=True)
                        print(f"DEBUG: Resp: Code={resp.status_code}, Headers={dict(resp.headers)}")
                        
                        if resp.status_code == 200 and len(resp.content) > 0:
                            file_bytes = resp.content
                        
                        # Fallback: Try RAW baseUrl without =d
                        elif '=d' in download_url:
                            print("DEBUG: Zero bytes or non-200 with =d. Retrying RAW baseUrl...")
                            raw_url = download_url.replace('=d', '')
                            resp = requests.get(raw_url, headers=headers, allow_redirects=True)
                            print(f"DEBUG: Resp RAW: Code={resp.status_code}, Headers={dict(resp.headers)}, Len={len(resp.content)}")
                            if resp.status_code == 200 and len(resp.content) > 0:
                                file_bytes = resp.content
                        
                            
                    else:
                        # Standard Drive File (ID based)
                        file_bytes = client.download_file(item_id, item.get('mimeType'))
            except Exception as e:
                if status_callback: status_callback(f"Failed: {item_name} ({str(e)})")
                continue

            if not file_bytes:
                print("DEBUG: Download returned empty bytes.")
                continue
            
            print(f"DEBUG: Download success ({len(file_bytes)} bytes). Extracting...")
            # Extraction
            if ext == 'docx':
                content = extract_word(file_bytes)
                format_tag = "DOCX"
            elif ext in ['xlsx', 'xls']:
                content = extract_excel(file_bytes)
                format_tag = "EXCEL"
            elif ext == 'pdf':
                content = extract_pdf_text(file_bytes, llm_client=llm_client, prompt=system_prompt)
                format_tag = "PDF"
            elif ext in ['pptx', 'ppt']:
                content = extract_pptx(file_bytes)
                format_tag = "PPTX"
            if ext in ['jpg', 'jpeg', 'png', 'tiff']:
                print("DEBUG: Extracting image...")
                content = extract_image_with_llm(file_bytes, llm_client, system_prompt=system_prompt)
                format_tag = "IMAGE"
            
            # AI Text Analysis for non-image files (SKIP if already analyzed by Vision approach)
            is_vision_result = content and "### AI Vision Analysis" in content
            if content and llm_client and ext not in ['jpg', 'jpeg', 'png', 'tiff'] and not is_vision_result:
                 print(f"DEBUG: Running AI analysis on {ext} content...")
                 analysis = llm_client.analyze_text(content, prompt=system_prompt)
                 content = f"{content}\n\n---\n### AI Analysis\n{analysis}"
            
            print(f"DEBUG: Content after extraction: {'Found' if content else 'None'}")
            print(f"DEBUG: Content Check -> {type(content)}: '{str(content)[:20]}...'")
            
            if content:
                # 1. Add to MD Result for ZIP
                md_filename = f"{current_path.rsplit('.', 1)[0]}.md"
                # safe access to md_filename just in case
                if not md_filename: md_filename = f"{item_name}.md"
                
                header = f"# Source: {item_name} [{format_tag}]\n**Path:** `{current_path}`\n---\n\n"
                full_text = header + content
                results[md_filename] = full_text
                processed_count += 1
                
                # 2. Sync to Firebase if enabled
                if sync_db:
                    db_data = {
                        "original_id": item_id,
                        "name": item_name,
                        "folder_path": current_path,
                        "content": content,
                        "file_type": ext,
                        "last_indexed_at": datetime.datetime.utcnow(),
                        "ai_model": llm_client.model_name if llm_client else "none"
                    }
                    if status_callback: status_callback(f"Syncing to DB: {item_name}...")
                    db_client.upsert_document(item_id, db_data, provider=provider)
                
    return results
