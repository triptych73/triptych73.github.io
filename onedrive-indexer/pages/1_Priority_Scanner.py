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
    # Try to grab keys from env
    provider = "Google" # Default
    api_key = os.getenv("GOOGLE_API_KEY")
    model = model_override or "gemini-1.5-pro" # Default context monster

    if not api_key:
        if os.getenv("OPENAI_API_KEY"):
            provider = "OpenAI"
            api_key = os.getenv("OPENAI_API_KEY")
            model = "gpt-4o"
        elif os.getenv("ANTHROPIC_API_KEY"):
            provider = "Anthropic"
            api_key = os.getenv("ANTHROPIC_API_KEY")
            model = "claude-3-5-sonnet-20241022"
    
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
        all_files_found = []
        
        def scan_recursive(folder_id, path_prefix=""):
            try:
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
                    if len(all_files_found) % 10 == 0:
                        status_box.write(f"Found {len(all_files_found)} files...")
        
        scan_recursive(target_id_input if target_id_input else "root")
        status_box.update(label="✅ Scan Complete!", state="complete", expanded=False)
        
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
            
            # Auto-Select Model
            # < 1M tokens -> Gemini 2.0 Flash (simulating "Gemini 3 Pro")
            # > 1M tokens -> Gemini 1.5 Pro (2M context)
            if est_tokens < 1_000_000:
                selected_model = "gemini-2.0-flash-exp"
                display_model = "Gemini 3 Pro (Preview)"
                reason = "Fast & Smart (< 1M tokens)"
            else:
                selected_model = "gemini-1.5-pro"
                display_model = "Gemini 1.5 Pro"
                reason = "High Context (> 1M tokens)"

            st.info(f"📊 **Context Analysis**: ~{token_fmt} tokens. \n\n🤖 **Auto-Selected Model**: `{display_model}` ({reason})")
            
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
            
            progress_bar = st.progress(0)
            log_container = st.container()
            log_container.write("Starting...")
            
            llm_idx = get_ai_client() # Standard client for individual file analysis
            
            processed_count = 0
            skipped_count = 0
            
            for i, target in enumerate(files_to_index):
                t_name = target.get("name")
                t_id = target.get("id")
                
                # Skip Logic
                if skip_existing:
                    # Check DB
                    is_indexed = db_client.get_indexed_status([t_id], provider=provider_key)
                    if t_id in is_indexed:
                        log_container.write(f"⏭️ Skipped (Already Indexed): {t_name}")
                        skipped_count += 1
                        progress_bar.progress((i + 1) / len(files_to_index))
                        continue

                # Process
                log_container.write(f"🔄 Processing: {t_name}...")
                try:
                    # Need fresh item for download URL (OneDrive)
                    full_item = client.get_drive_item(t_id) if hasattr(client, 'get_drive_item') else {"id": t_id, "name": t_name}
                    
                    process_selection(
                        client, 
                        [full_item], 
                        provider=provider_key, 
                        status_callback=None, # Silent in console
                        recursive=False, 
                        llm_client=llm_idx, 
                        sync_db=True
                    )
                    processed_count += 1
                    
                except Exception as e:
                    log_container.error(f"Failed {t_name}: {e}")
                
                progress_bar.progress((i + 1) / len(files_to_index))
            
            st.balloons()
            st.success(f"Batch Complete! Processed: {processed_count}, Skipped: {skipped_count}")
    else:
        st.markdown("*Waiting for file selection...*")
