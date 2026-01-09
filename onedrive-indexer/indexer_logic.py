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

def extract_image_with_llm(image_bytes, llm_client):
    if not llm_client:
        return "[Image Content - AI analysis required]"
    return llm_client.analyze_image(
        image_bytes, 
        prompt="Analyze this image. Transcribe any text found (OCR) and describe the visual content in detail."
    )

def process_onedrive_selection(graph_client, selected_items, status_callback=None, recursive=True, llm_client=None, sync_db=False):
    """
    Processes a list of selected OneDrive items (files or folders).
    Added sync_db parameter.
    """
    results = {}
    queue = [(item, item.get('name')) for item in selected_items]
    
    processed_count = 0
    
    while queue:
        item, current_path = queue.pop(0)
        item_name = item.get('name')
        item_id = item.get('id')
        
        if 'folder' in item:
            if recursive:
                children = graph_client.get_drive_item_children(item_id)
                for child in children:
                    child_path = f"{current_path}/{child.get('name')}"
                    queue.append((child, child_path))
                    
        elif 'file' in item:
            ext = item_name.split('.')[-1].lower()
            content = None
            format_tag = ""
            
            supported_extensions = {
                'docx', 'xlsx', 'xls', 'pdf', 'pptx', 'ppt', 
                'jpg', 'jpeg', 'png', 'tiff'
            }
            
            if ext not in supported_extensions:
                continue

            if status_callback: status_callback(f"Checking: {current_path}")

            download_url = item.get('@microsoft.graph.downloadUrl')
            if not download_url:
                continue
                
            file_bytes = graph_client.download_file(download_url)
            if not file_bytes:
                continue

            # Extraction
            if ext == 'docx':
                content = extract_word(file_bytes)
                format_tag = "DOCX"
            elif ext in ['xlsx', 'xls']:
                content = extract_excel(file_bytes)
                format_tag = "EXCEL"
            elif ext == 'pdf':
                content = extract_pdf_text(file_bytes, llm_client=llm_client)
                format_tag = "PDF"
            elif ext in ['pptx', 'ppt']:
                content = extract_pptx(file_bytes)
                format_tag = "PPTX"
            elif ext in ['jpg', 'jpeg', 'png', 'tiff']:
                content = extract_image_with_llm(file_bytes, llm_client)
                format_tag = "IMAGE"
            
            if content:
                # 1. Add to MD Result for ZIP
                md_filename = f"{current_path.rsplit('.', 1)[0]}.md"
                header = f"# Source: {item_name} [{format_tag}]\n**Path:** `{current_path}`\n---\n\n"
                full_text = header + content
                results[md_filename] = full_text
                processed_count += 1
                
                # 2. Sync to Firebase if enabled
                if sync_db:
                    db_data = {
                        "onedrive_id": item_id,
                        "name": item_name,
                        "folder_path": current_path,
                        "content": content,
                        "file_type": ext,
                        "last_indexed_at": datetime.datetime.utcnow(),
                        "ai_model": llm_client.model_name if llm_client else "none"
                    }
                    if status_callback: status_callback(f"Syncing to DB: {item_name}...")
                    db_client.upsert_document(item_id, db_data)
                
    return results
