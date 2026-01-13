import streamlit as st
import io
import json
import datetime
import os
import time

# Import from parent directory
from graph_client import GraphClient
from google_client import GoogleClient
from indexer_logic import process_selection
from llm_client import LLMClient
from cost_utils import CostEstimator
import db_client

st.set_page_config(page_title="Priority Scanner", page_icon="🕵️‍♂️", layout="wide")

st.title("🕵️‍♂️ Priority Scanner & Indexer")
st.info("Agentic Tool: Scan folders, ask AI to prioritize files, and then batch-index the best ones.")

# --- SHARED AUTH CHECK ---
client = None
provider_key = "onedrive"

# 1. Attempt Restore if missing
if "access_token" not in st.session_state and "google_creds" not in st.session_state:
    try:
        db_tokens = db_client.get_user_tokens("default_user_session")
        if db_tokens:
            # Check if it's Google or MS based on structure (Google has refresh_token/client_id fields)
            if 'client_email' in db_tokens or 'scopes' in db_tokens:
                # Google
                from google.oauth2.credentials import Credentials
                creds = Credentials(
                    token=db_tokens.get('token'),
                    refresh_token=db_tokens.get('refresh_token'),
                    token_uri=db_tokens.get('token_uri'),
                    client_id=db_tokens.get('client_id'),
                    client_secret=db_tokens.get('client_secret'),
                    scopes=db_tokens.get('scopes')
                )
                st.session_state["google_creds"] = creds
                st.toast("Restored session from database!", icon="🎉")
            else:
                # OneDrive (simpler token dict usually)
                if 'access_token' in db_tokens:
                    st.session_state["access_token"] = db_tokens
                    st.toast("Restored session from database!", icon="🎉")
    except Exception as e:
        print(f"Error restoring session in scanner: {e}")

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

# --- HELPER: GET AI CLIENT ---
def get_ai_client(model_override=None):
    # 1. Check if user selected something globally (in sidebar of Main App)
    global_provider = st.session_state.get("global_provider_selection")
    global_model = st.session_state.get("global_model_selection")
    
    # 2. Defaults if not set
    provider = global_provider or "Google" 
    model = model_override or global_model or "gemini-3-pro-preview" 

    # 3. Get API Key from Environment or Session?
    # app.py doesn't strictly save API key to session state in a "global_api_key" variable usually, 
    # but relies on env vars or local input. 
    # Let's try standard env vars first.
    api_key = None
    
    if provider == "Google":
        api_key = os.getenv("GOOGLE_API_KEY")
    elif provider == "OpenAI":
        api_key = os.getenv("OPENAI_API_KEY")
    elif provider == "Anthropic":
        api_key = os.getenv("ANTHROPIC_API_KEY")
        
    if api_key:
        return LLMClient(provider=provider, api_key=api_key, model_name=model, cost_tracker=CostEstimator())
    return None

# --- MAIN LAYOUT ---
tab1, tab2, tab3 = st.tabs(["1. Scan Structure", "2. AI Prioritize", "3. Batch Index"])

# GLOBAL VARS
if "scanned_files" not in st.session_state: st.session_state["scanned_files"] = []
if "to_index_list" not in st.session_state: st.session_state["to_index_list"] = []
if "generated_prompt" not in st.session_state: st.session_state["generated_prompt"] = ""

# ==========================================
# TAB 1: SCAN
# ==========================================
with tab1:
    st.header("Step 1: Scan Folder Structure")
    
    # --- NAVIGATOR ---
    if "scanner_nav_id" not in st.session_state: st.session_state["scanner_nav_id"] = "root"
    if "scanner_nav_name" not in st.session_state: st.session_state["scanner_nav_name"] = "Root"
    if "scanner_nav_history" not in st.session_state: st.session_state["scanner_nav_history"] = []
    
    col_nav1, col_nav2 = st.columns([1, 4])
    if col_nav1.button("⬅️ Up Level", key="scan_nav_up", disabled=not st.session_state["scanner_nav_history"]):
        if st.session_state["scanner_nav_history"]:
            pid, pname = st.session_state["scanner_nav_history"].pop()
            st.session_state["scanner_nav_id"] = pid
            st.session_state["scanner_nav_name"] = pname
            st.rerun()

    current_path_str = " / ".join([n for _, n in st.session_state["scanner_nav_history"]] + [st.session_state["scanner_nav_name"]])
    st.markdown(f"**Current:** `{current_path_str}`")

    # Fetch Children
    try:
        current_children = client.get_drive_item_children(st.session_state["scanner_nav_id"])
        folders = [c for c in current_children if 'folder' in c]
    except Exception as e:
        folders = []
        st.error(f"Error: {e}")

    # Display Current Folders
    if folders:
        with st.expander(f"📁 Browse Subfolders ({len(folders)})", expanded=True):
            cols = st.columns(3)
            for i, f in enumerate(folders):
                if cols[i%3].button(f"📂 {f['name']}", key=f"nav_{f['id']}"):
                    st.session_state["scanner_nav_history"].append((st.session_state["scanner_nav_id"], st.session_state["scanner_nav_name"]))
                    st.session_state["scanner_nav_id"] = f["id"]
                    st.session_state["scanner_nav_name"] = f["name"]
                    st.rerun()
    
    st.divider()
    
    # Target Selection
    default_target_id = st.session_state.get("target_folder_id", "root")
    default_target_name = st.session_state.get("target_folder_name", "Root")
    
    c1, c2 = st.columns([3, 1])
    target_id_input = c1.text_input("Scan Target ID", value=default_target_id)
    if c2.button("🎯 Use Current", use_container_width=True):
        st.session_state["target_folder_id"] = st.session_state["scanner_nav_id"]
        st.session_state["target_folder_name"] = st.session_state["scanner_nav_name"]
        st.rerun()
        
    if st.button("🚀 Start Recursive Scan", type="primary"):
        st.session_state["scanned_files"] = [] # Reset
        
        status_box = st.status("Scanning...", expanded=True)
        # Use a placeholder for the live count update
        scan_placeholder = status_box.empty()
        
        all_files_found = []
        
        def scan_recursive(folder_id, path_prefix=""):
            try:
                # Throttling scan slightly to avoid immediate rate limits on Graph
                time.sleep(0.1) 
                children = client.get_drive_item_children(folder_id)
            except Exception as e:
                st.error(f"Access error: {e}")
                return

            for item in children:
                name = item.get("name")
                item_id = item.get("id")
                current_path = f"{path_prefix}/{name}"
                
                if "folder" in item:
                    # Update status periodically
                    status_box.update(label=f"Scanning: {current_path}...")
                    scan_recursive(item_id, current_path)
                elif "file" in item:
                    size = item.get("size", 0)
                    mod = item.get("lastModifiedDateTime", "")
                    meta = {
                        "id": item_id, 
                        "name": name, 
                        "path": current_path, 
                        "size": size, 
                        "modified": mod,
                        "mime": item.get("mimeType", "")
                    }
                    all_files_found.append(meta)
                    # Live Update in Place
                    if len(all_files_found) % 5 == 0:
                        scan_placeholder.info(f"📂 Found **{len(all_files_found)}** files so far...")
        
        scan_recursive(target_id_input if target_id_input else "root")
        
        # Final update
        scan_placeholder.empty() # Clear the info box
        status_box.write(f"✅ Found {len(all_files_found)} files total.")
        status_box.update(label="✅ Scan Complete!", state="complete", expanded=True)
        
        st.session_state["scanned_files"] = all_files_found
        st.success(f"Scan complete. Found {len(all_files_found)} files.")

    # DOWNLOAD JSON
    if st.session_state["scanned_files"]:
        st.dataframe(st.session_state["scanned_files"], use_container_width=True)
        json_data = json.dumps(st.session_state["scanned_files"], indent=2)
        st.download_button("💾 Download Manifest", json_data, "file_manifest.json", "application/json")


# ==========================================
# TAB 2: AI PRIORITIZE
# ==========================================
with tab2:
    st.header("Step 2: AI Prioritization")
    st.markdown("Ask Gemini High-Context models to select the most important files.")
    
    if not st.session_state["scanned_files"]:
        st.warning("⚠️ No files scanned yet. Please go to **Step 1**.")
    else:
        # Settings
        col_set1, col_set2 = st.columns(2)
        selection_mode = col_set1.radio("Selection Mode", ["Top N Files", "Relevance Threshold (1-10)"])
        
        if "Top N" in selection_mode:
            top_n = col_set2.number_input("Number of files to return", min_value=1, max_value=100, value=20)
            criteria_text = f"Select the top {top_n} most critical files."
        else:
            threshold = col_set2.slider("Minimum Relevance Score", 1, 10, 7)
            criteria_text = f"Select ALL files with a relevance score of {threshold} or higher (out of 10)."
            
        # Model Preference Option
        st.markdown("---")
        model_pref_options = ["Auto (Best)", "Gemini 3 Pro (High Reasoning)", "Gemini 3 Flash (Fast/OCR)"]
        model_pref = st.radio("🤖 AI Model Preference", model_pref_options, horizontal=True)

        user_context_prompt = st.text_area("Additional Context for AI", 
            value="Project: St Mary Somerset Tower (5 Lambeth Hill). Focus on agreements, plans, architectural drawings, and legal contracts.",
            height=100)

        if st.button("📝 Generate Prompt"):
            manifest_sample = json.dumps(st.session_state["scanned_files"], indent=None) # Compact JSON
            
            prompt = f"""You are an expert archivist. 
Review the following file manifest (JSON) for the project described below.

CONTEXT:
{user_context_prompt}

TASK:
{criteria_text}
CRITICAL: Focus on files relevant for a **Strategic Project Overview**. Prioritize high-level agreements, master plans, legal contracts, and architectural summaries. Ignore low-level operational details (e.g., minor invoices, specific sub-contractor correspondence) unless they are critical to the project timeline.

OUTPUT FORMAT:
Return ONLY a valid JSON List of Objects. Do not include any markdown formatting (no ```json blocks), no introductory text.
Each object must have:
- "id": The file ID (exact match from input)
- "name": The file name
- "reason": A brief reason for selection

MANIFEST:
{manifest_sample}
"""
            st.session_state["generated_prompt"] = prompt
            st.rerun()

        # Display Prompt & Confirm
        if st.session_state["generated_prompt"]:
            st.subheader("Review Prompt")
            user_approved_prompt = st.text_area("Edit Info Prompt before sending:", 
                                                value=st.session_state["generated_prompt"], 
                                                height=300)
            
            # --- TOKEN ESTIMATION ---
            est_chars = len(user_approved_prompt)
            est_tokens = int(est_chars / 4)
            token_fmt = f"{est_tokens:,}"
            
            # Smart Selection Logic
            if "Gemini 3 Pro" in model_pref:
                 selected_model = "gemini-3-pro-preview"
                 display_model = "Gemini 3 Pro (Forced)"
                 reason = "User Selection"
            elif "Gemini 3 Flash" in model_pref:
                 selected_model = "gemini-3-flash-preview"
                 display_model = "Gemini 3 Flash (Forced)"
                 reason = "User Selection"
            else:
                # AUTO Mode
                if est_tokens < 1_000_000:
                    selected_model = "gemini-3-flash-preview"
                    display_model = "Gemini 3 Flash (Auto)"
                    reason = "Speed & Efficiency (< 1M tokens)"
                else:
                    selected_model = "gemini-3-pro-preview"
                    display_model = "Gemini 3 Pro (Auto)"
                    reason = "High Reasoning (> 1M tokens)"

            st.info(f"📊 **Context Analysis**: ~{token_fmt} tokens. \n\n🤖 **Model**: `{display_model}` ({reason})")
            
            if st.button(f"🤖 Consult AI ({display_model})", type="primary"):
                llm = get_ai_client(model_override=selected_model) 
                if not llm:
                    st.error("No AI configured. Please set GOOGLE_API_KEY in .env or Main App.")
                else:
                    with st.status(f"Thinking with {display_model}...") as status:
                        try:
                            status.write("Sending manifest to Gemini...")
                            response = llm.analyze_text(text_content="", prompt=user_approved_prompt)
                            
                            status.write("Parsing response...")
                            import re
                            
                            # Robust JSON Extraction
                            try:
                                # 1. Try finding the first [ and last ]
                                start_idx = response.find('[')
                                end_idx = response.rfind(']')
                                
                                if start_idx != -1 and end_idx != -1:
                                    json_str = response[start_idx:end_idx+1]
                                    priority_files = json.loads(json_str)
                                else:
                                    # Fallback: maybe it's just a single object?
                                    priority_files = json.loads(response)

                            except json.JSONDecodeError:
                                # 2. Hard cleanup if direct find failed
                                clean_resp = response.replace("```json", "").replace("```", "").strip()
                                priority_files = json.loads(clean_resp)
                            
                            if not isinstance(priority_files, list):
                                st.error("AI returned a single object instead of a list. wrapping it.")
                                priority_files = [priority_files]
                                
                            st.session_state["to_index_list"] = priority_files
                            status.write(f"✅ AI Selected {len(priority_files)} files!")
                            status.update(state="complete")
                            
                        except Exception as e:
                            st.error(f"AI Error: {e} \n\nRaw Response: {response}")
                            st.stop()
                            
                    st.rerun()

# ==========================================
# TAB 3: BATCH INDEX
# ==========================================
with tab3:
    st.header("Step 3: Batch Indexing")
    
    # Allow manual paste if AI step skipped
    if not st.session_state["to_index_list"]:
        st.info("No AI selection found. You can paste a JSON list manually below.")
        manual_json = st.text_area("Paste JSON List ([{'id':...}, ...])")
        if manual_json:
            try:
                data = json.loads(manual_json)
                if isinstance(data, list):
                    st.session_state["to_index_list"] = data
            except:
                pass

    files_to_index = st.session_state["to_index_list"]
    
    if files_to_index:
        st.success(f"Ready to index **{len(files_to_index)}** priority files.")
        st.dataframe(files_to_index)
        
        if st.button("⚡ Start Batch Indexing", type="primary"):
            skip_existing = st.session_state.get("skip_indexed_global", False)
            
            # PRE-FILTERING (Skip Indexed)
            final_list_to_process = []
            skipped_count = 0
            
            if skip_existing:
                # Batch check DB
                all_ids = [f["id"] for f in files_to_index]
                indexed_set = db_client.get_indexed_status(all_ids, provider=provider_key)
                
                for f in files_to_index:
                    if f["id"] in indexed_set:
                        skipped_count += 1
                        log_container.write(f"⏭️ Skipped (Already Indexed): {f['name']}")
                    else:
                        final_list_to_process.append(f)
            else:
                final_list_to_process = files_to_index
            
            if not final_list_to_process:
                st.warning("All selected files were already indexed or skipped!")
            else:
                # Use the SAME batch function as the Main App
                def update_status_callback(msg):
                    log_container.write(msg)
                    
                # Need fresh client logic or just pass the dicts?
                # indexer_logic handles dicts with 'id' if client is provided.
                # However, for 'onedrive' it typically needs 'get_drive_item' or similar?
                # app.py passes `items_to_index` which are dicts. process_selection handles it.
                
                # We need to ensure we have the 'client' object for the download logic inside process_selection
                # We have 'client' from top defined.
                
                processed_results = process_selection(
                    client=client, 
                    selected_items=final_list_to_process, 
                    provider=provider_key, 
                    status_callback=update_status_callback, 
                    recursive=False, 
                    llm_client=llm_idx, 
                    sync_db=True
                )
                
                processed_count = len(processed_results)
                
                st.balloons()
                st.success(f"Batch Complete! Processed: {processed_count}, Skipped: {skipped_count}")
    else:
        st.markdown("*Waiting for file selection...*")
