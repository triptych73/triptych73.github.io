import streamlit as st
import io
import json
import datetime

# Import from parent directory? 
# Streamlit pages run with CWD as root, so imports work normally if in python path.
# But we need basic setup.

from graph_client import GraphClient
from google_client import GoogleClient
from indexer_logic import process_selection

st.set_page_config(page_title="Priority Scanner", page_icon="🕵️‍♂️", layout="wide")

st.title("🕵️‍♂️ Priority Scanner & Indexer")
st.info("Use this tool to generate a file manifest for AI prioritization, then index the selected 'Priority' files.")

# --- SHARED AUTH CHECK ---
# We rely on app.py to set session state.
client = None
provider_key = "onedrive"

if "access_token" in st.session_state:
    client = GraphClient(st.session_state["access_token"])
    provider_key = "onedrive"
elif "google_creds" in st.session_state:
    creds = st.session_state["google_creds"]
    client = GoogleClient(credentials=creds)
    if st.session_state.get("source_provider") == "Google Photos":
        provider_key = "google_photos"
    else:
        provider_key = "google"

if not client:
    st.warning("⚠️ Not signed in. Please go to the **Main App** page (sidebar) and sign in first.")
    st.stop()

# --- MAIN LOGIC ---

tab1, tab2 = st.tabs(["1. Scan & Export", "2. Import & Index"])

# GLOBAL VAR for scanned items mapping?
if "scanned_map" not in st.session_state: st.session_state["scanned_map"] = {}

with tab1:
    st.header("Step 1: Scan Folder structure")
    
    # Folder Selector (Default to root or previously visited?)
    # or just input path? Graph API usually needs ID. 
    # Let's simple use Root descending or a specific known path.
    # User asked for: /Documents/SMS Documents
    # We can try to finding it? Or just scan from Root.
    
    st.markdown("This will recursively scan files to build a manifest.")
    
    # --- SCANNER NAVIGATOR ---
    if "scanner_nav_id" not in st.session_state: st.session_state["scanner_nav_id"] = "root"
    if "scanner_nav_name" not in st.session_state: st.session_state["scanner_nav_name"] = "Root"
    if "scanner_nav_history" not in st.session_state: st.session_state["scanner_nav_history"] = []
    
    # Nav Functions
    def scanner_enter(nid, nname):
        st.session_state["scanner_nav_history"].append((st.session_state["scanner_nav_id"], st.session_state["scanner_nav_name"]))
        st.session_state["scanner_nav_id"] = nid
        st.session_state["scanner_nav_name"] = nname
        
    def scanner_up():
        if st.session_state["scanner_nav_history"]:
            pid, pname = st.session_state["scanner_nav_history"].pop()
            st.session_state["scanner_nav_id"] = pid
            st.session_state["scanner_nav_name"] = pname

    # Display Current Path
    hist_names = [n for _, n in st.session_state["scanner_nav_history"]]
    full_path = " / ".join(hist_names + [st.session_state["scanner_nav_name"]])
    st.markdown(f"**Current Path:** `{full_path}`")
    
    col_nav1, col_nav2 = st.columns([1, 4])
    if col_nav1.button("⬅️ Up", key="scan_up", disabled=not st.session_state["scanner_nav_history"]):
        scanner_up()
        st.rerun()
        
    # List Folders for Navigation
    try:
        current_children = client.get_drive_item_children(st.session_state["scanner_nav_id"])
        folders = [c for c in current_children if 'folder' in c]
        if folders:
            st.markdown("### Subfolders:")
            for f in folders:
                if st.button(f"📂 {f['name']}", key=f"nav_{f['id']}"):
                    scanner_enter(f['id'], f['name'])
                    st.rerun()
        else:
            st.caption("No subfolders found.")
            
    except Exception as e:
        st.error(f"Error loading path: {e}")

    st.divider()
    
    # Selection Mechanism
    st.markdown("### Set Scan Target")
    st.write(f"Click below to set **{st.session_state['scanner_nav_name']}** as the start folder.")
    
    col_sel1, col_sel2 = st.columns([1, 1])
    if col_sel1.button("🎯 Select Current Folder", type="primary"):
        st.session_state["target_folder_id"] = st.session_state["scanner_nav_id"]
        st.session_state["target_folder_name"] = st.session_state["scanner_nav_name"]
        st.success(f"Selected: {st.session_state['scanner_nav_name']}")

    # Input Field (Pre-filled)
    default_val = st.session_state.get("target_folder_id", "root")
    start_folder_id = st.text_input("Start Folder ID (auto-filled)", value=default_val)
    
    if st.button("🚀 Start Scan"):
        with st.spinner("Recursive scanning... this may take a while..."):
            all_files = []
            
            # Recursive function
            def scan_recursive(folder_id, path_prefix=""):
                # Get children
                # Note: This might be slow for massive drives.
                try:
                    children = client.get_drive_item_children(folder_id)
                except Exception as e:
                    st.error(f"Error accessing {folder_id}: {e}")
                    return

                for item in children:
                    name = item.get("name")
                    item_id = item.get("id")
                    current_path = f"{path_prefix}/{name}"
                    
                    if "folder" in item:
                        # Recurse
                        scan_recursive(item_id, current_path)
                    elif "file" in item:
                        # Record
                        size = item.get("size", 0)
                        mod_time = item.get("lastModifiedDateTime", "")
                        
                        file_meta = {
                            "id": item_id,
                            "name": name,
                            "path": current_path,
                            "size": size,
                            "modified": mod_time,
                            "mime": item.get("mimeType", "unknown")
                        }
                        all_files.append(file_meta)
                        # Optional: Progress update? (Slows things down)
            
            scan_recursive(start_folder_id if start_folder_id else "root")
            
            st.session_state["scanned_files"] = all_files
            st.success(f"✅ Found {len(all_files)} files.")
            
    if "scanned_files" in st.session_state:
        files = st.session_state["scanned_files"]
        st.dataframe(files)
        
        # Generator for JSON
        json_str = json.dumps(files, indent=2)
        st.download_button("💾 Download JSON for LLM", data=json_str, file_name="file_manifest.json", mime="application/json")


with tab2:
    st.header("Step 2: Index Priority Files")
    st.markdown("Paste the JSON list of files (must contain 'id' field) that the LLM selected.")
    
    input_json = st.text_area("Paste JSON here", height=200)
    
    if st.button("⚡ Index Priority Files"):
        if not input_json.strip():
            st.warning("Empty input.")
        else:
            try:
                # Parse
                priority_list = json.loads(input_json)
                if not isinstance(priority_list, list):
                    st.error("Input must be a JSON list.")
                    st.stop()
                
                st.info(f"Processing {len(priority_list)} items...")
                
                # Setup progress
                prog_bar = st.progress(0)
                status_text = st.empty()
                
                llm_client_inst = None
                # Try to grab LLM client from session state if initialized in Main App?
                # It might not be there if removed from session or page reload.
                # User might need to configure LLM here too? 
                # Or we rely on env vars if saved?
                
                # Ideally, we allow simple "Enable AI" here or rely on App.
                # Let's try to reconstruct LLM client from ENV or sidebar?
                # For now, let's assume if they copy-pasted from LLM, they want indexer to DO logic.
                from llm_client import LLMClient
                from cost_utils import CostEstimator
                import os
                
                # Re-init LLM if possible (simple default to Google/OpenAI if env vars exist)
                # Or just ask user/check session?
                # Simplest: Check st.session_state keys from sidebar?
                # But sidebar state is page-local often? No, session_state is global.
                # IF the user set update in main app, it should be here. BUT objects like `llm_client` might not differ?
                # Python objects in session state ARE preserved across pages.
                
                # However, app.py defines `llm_client` as a local var mostly.
                # Let's hope the user set the keys in main app.
                
                # Re-auth LLM
                params = {}
                if os.getenv("GOOGLE_API_KEY"):
                    params = {"provider": "Google", "api_key": os.getenv("GOOGLE_API_KEY"), "model_name": "gemini-2.0-flash-exp"} # Default high speed
                elif os.getenv("OPENAI_API_KEY"):
                    params = {"provider": "OpenAI", "api_key": os.getenv("OPENAI_API_KEY"), "model_name": "gpt-4o"}
                
                if params:
                    llm_client_inst = LLMClient(provider=params["provider"], api_key=params["api_key"], model_name=params["model_name"], cost_tracker=CostEstimator())
                    st.success(f"Using AI: {params['provider']} ({params['model_name']})")
                else:
                    st.warning("⚠️ No AI API Key found in Environment. Indexing will be text-only (no Summary/Metadata).")
                
                
                results_log = []
                
                for i, item in enumerate(priority_list):
                    name = item.get("name", "Unknown")
                    item_id = item.get("id")
                    
                    status_text.text(f"Indexing {i+1}/{len(priority_list)}: {name}")
                    
                    # Construct item dict for process_selection
                    # process_selection expects list of items.
                    # It downloads by ID.
                    
                    # We need to mimic the 'item' structure expected by process_selection logic?
                    # logic: item.get('@microsoft.graph.downloadUrl') for OneDrive
                    # logic: item.get('id') for Google
                    
                    # Scan output put 'id', 'name', 'path'.
                    # For OneDrive, we might need to fetch the fresh item to get downloadUrl?
                    # Or use `client.get_item(id)`?
                    
                    # Refactor: Let's fetch the full item metadata first to ensure download URL exists.
                    try:
                        full_item = client.get_drive_item(item_id) if hasattr(client, 'get_drive_item') else {"id": item_id, "name": name}
                        # If get_drive_item is not exposed or different? 
                        # GraphClient has get_drive_item usually?
                        # Let's check graph_client.py 
                        
                        # Assuming we can just pass what we have plus ID, but OneDrive logic in process_selection 
                        # specifically looks for '@microsoft.graph.downloadUrl' which expires!
                        # So we MUST fetch fresh item.
                        
                        # GraphClient.get_item?
                        # I'll check graph_client.py in next step.
                        # For now, implemented best guess.
                        
                        # Process
                        process_selection(
                            client, 
                            [full_item], 
                            provider=provider_key, 
                            status_callback=lambda msg: print(msg), # No-op or console
                            recursive=False, 
                            llm_client=llm_client_inst, 
                            sync_db=True
                        )
                        results_log.append(f"✅ {name}")
                        
                    except Exception as e:
                        results_log.append(f"❌ {name}: {e}")
                    
                    prog_bar.progress((i + 1) / len(priority_list))
                
                st.success("Batch Processing Complete!")
                st.expander("Logs").write(results_log)
                
            except json.JSONDecodeError:
                st.error("Invalid JSON.")
