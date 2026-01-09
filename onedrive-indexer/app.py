import streamlit as st
import msal
import os
import zipfile
import io
import time
import datetime
from dotenv import load_dotenv
from auth import build_msal_app, get_auth_url, get_token_from_code
from graph_client import GraphClient
from indexer_logic import process_onedrive_selection
from cost_utils import CostEstimator
from llm_client import LLMClient
import db_client

# 1. Load Environment Variables
load_dotenv(override=True)

# 2. Page Config
st.set_page_config(page_title="OneDrive Indexer", page_icon="📂", layout="wide")

st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
    
    :root {
        --primary-color: #4a89dc;
        --secondary-color: #5cb85c;
        --background-color: #f9f9f9;
        --border-color: #ddd;
        --text-color: #333;
        --card-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    
    html, body, [class*="css"]  {
        font-family: 'Inter', 'Segoe UI', sans-serif;
        color: var(--text-color);
    }
    
    .stApp {
        background-color: var(--background-color);
    }
    
    /* Breadcrumb */
    .breadcrumb {
        font-size: 0.95rem;
        color: #4b5563;
        padding: 0.75rem 1rem;
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        box-shadow: var(--card-shadow);
        margin-bottom: 1.5rem;
    }
    
    /* Cost Box */
    .cost-box {
        padding: 1rem;
        background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
        border: 1px solid #91d5ff;
        border-radius: 8px;
        color: #003a8c;
        font-weight: 600;
        text-align: center;
        box-shadow: var(--card-shadow);
        margin-bottom: 1.5rem;
    }
    
    /* Indexed Badge */
    .indexed-badge {
        display: inline-flex;
        align-items: center;
        padding: 2px 8px;
        background-color: #f0fdf4;
        border: 1px solid #86efac;
        border-radius: 9999px;
        color: var(--secondary-color);
        font-size: 0.75rem;
        font-weight: 600;
        margin-left: 8px;
    }
    
    /* Row styling */
    div[data-testid="stHorizontalBlock"] {
        align-items: center;
        padding-top: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--border-color);
    }
    div[data-testid="stHorizontalBlock"]:hover {
        background-color: #f0f9ff;
    }
    
    /* Sticky action panel */
    .sticky-action-panel {
        position: sticky;
        top: 20px;
        align-self: flex-start;
    }
</style>
""", unsafe_allow_html=True)

# 3. Session State
if "history" not in st.session_state: st.session_state["history"] = []
if "current_folder_id" not in st.session_state: st.session_state["current_folder_id"] = "root"
if "current_folder_name" not in st.session_state: st.session_state["current_folder_name"] = "Root"
if "current_folder_items" not in st.session_state: st.session_state["current_folder_items"] = None 
if "indexing_results" not in st.session_state: st.session_state["indexing_results"] = None
if "indexing_zip" not in st.session_state: st.session_state["indexing_zip"] = None
if "indexed_ids_cache" not in st.session_state: st.session_state["indexed_ids_cache"] = set()

cost_estimator = CostEstimator()

def save_key_to_env(key_name, key_value):
    if not key_value: return
    lines = []
    if os.path.exists(".env"):
        with open(".env", "r") as f: lines = f.readlines()
    
    key_found = False
    new_lines = []
    for line in lines:
        if line.startswith(f"{key_name}="):
            new_lines.append(f"{key_name}={key_value}\n")
            key_found = True
        else:
            new_lines.append(line)
    
    if not key_found:
        if new_lines and not new_lines[-1].endswith('\n'):
            new_lines.append('\n')
        new_lines.append(f"{key_name}={key_value}\n")
    
    with open(".env", "w") as f: f.writelines(new_lines)
    os.environ[key_name] = key_value
    st.toast(f"Saved {key_name} to .env!", icon="💾")

# 4. Auth & Settings
st.sidebar.title("⚙️ Settings")
client_id = os.environ.get("CLIENT_ID") or st.sidebar.text_input("Client ID")
client_secret = os.environ.get("CLIENT_SECRET") or st.sidebar.text_input("Client Secret", type="password")
tenant_id = os.environ.get("TENANT_ID", "common")
redirect_uri = os.environ.get("REDIRECT_URI", "http://localhost:8501")

if not client_id or not client_secret:
    st.warning("⚠️ See sidebar to configure credentials.")
    st.stop()

# --- AI Settings ---
st.sidebar.divider()
st.sidebar.title("🧠 AI / OCR")
enable_ai = st.sidebar.checkbox("Enable AI OCR", value=False)
llm_client = None

if enable_ai:
    provider = st.sidebar.selectbox("Provider", ["Google", "OpenAI", "Anthropic"])
    env_var_map = {"Google": "GOOGLE_API_KEY", "OpenAI": "OPENAI_API_KEY", "Anthropic": "ANTHROPIC_API_KEY"}
    env_key = env_var_map[provider]
    existing_key = os.environ.get(env_key, "")
    api_key_input = st.sidebar.text_input(f"{provider} API Key", value=existing_key, type="password")
    
    if st.sidebar.button("💾 Save Key to .env"):
        save_key_to_env(env_key, api_key_input)
        st.rerun()

    model_map = {
        "Google": ["gemini-3-flash-preview", "gemini-3-pro-preview", "gemini-3-deep-think", "gemini-2.5-flash"],
        "OpenAI": ["gpt-4o", "gpt-4o-mini", "o1-preview", "o1-mini"],
        "Anthropic": ["claude-3-5-sonnet-20241022", "claude-3-5-haiku-20241022"]
    }
    model_name = st.sidebar.selectbox("Model", model_map[provider])
    final_key = api_key_input or existing_key
    if final_key:
        llm_client = LLMClient(provider, final_key, model_name, cost_estimator)

st.sidebar.divider()
st.sidebar.header("Indexing Options")
recursive_indexing = st.sidebar.checkbox("Recursively Index Subfolders", value=True)
sync_to_db = st.sidebar.checkbox("Sync to Firebase DB", value=True, help="Save logic/metadata to Firestore")

# Auth Logic
SCOPES = ["Files.Read.All", "User.Read", "Files.ReadWrite.All"] 
AUTHORITY = f"https://login.microsoftonline.com/{tenant_id}"
msal_app = build_msal_app(client_id, client_secret, AUTHORITY)

if "access_token" not in st.session_state:
    query_params = st.query_params
    code = query_params.get("code")
    if code:
        result = get_token_from_code(msal_app, code, redirect_uri, SCOPES)
        if "access_token" in result:
            st.session_state["access_token"] = result["access_token"]
            st.rerun()
        else:
            st.error(f"❌ Login failed: {result.get('error_description')}")
            st.stop()
    else:
        auth_url = get_auth_url(msal_app, redirect_uri, SCOPES)
        st.markdown(f"<a href='{auth_url}'><button>Sign in with Microsoft</button></a>", unsafe_allow_html=True)
        st.stop()

# 5. Main UI
token = st.session_state["access_token"]
client = GraphClient(token)

if "user_info" not in st.session_state: st.session_state["user_info"] = client.get_me()
user = st.session_state["user_info"]
if user: st.sidebar.success(f"👤 {user.get('displayName')}")

# Navigation
def enter_folder(new_id, new_name):
    st.session_state["history"].append((st.session_state["current_folder_id"], st.session_state["current_folder_name"]))
    st.session_state["current_folder_id"] = new_id
    st.session_state["current_folder_name"] = new_name
    st.session_state["selected_items"] = set() 
    st.session_state["current_folder_items"] = None 
    st.session_state["indexed_ids_cache"] = set() # Clear cache on nav
    st.rerun()

def go_up():
    if st.session_state["history"]:
        prev_id, prev_name = st.session_state["history"].pop()
        st.session_state["current_folder_id"] = prev_id
        st.session_state["current_folder_name"] = prev_name
        st.session_state["selected_items"] = set()
        st.session_state["current_folder_items"] = None
        st.session_state["indexed_ids_cache"] = set()
        st.rerun()

current_selection = []

col_nav, col_action = st.columns([3, 1])

with col_nav:
    hist_names = [name for _, name in st.session_state["history"]]
    path_str = " / ".join(hist_names + [st.session_state["current_folder_name"]])
    st.markdown(f"<div class='breadcrumb'>📂 <strong>{path_str}</strong></div>", unsafe_allow_html=True)
    if st.session_state["history"]: st.button("⬅️ Up One Level", on_click=go_up)

    # --- Document Viewer Area ---
    if "view_content" not in st.session_state: st.session_state["view_content"] = None
    if "view_name" not in st.session_state: st.session_state["view_name"] = ""

    if st.session_state["view_content"]:
        with st.expander(f"📖 Viewing: {st.session_state['view_name']}", expanded=True):
            st.markdown(st.session_state["view_content"])
            if st.button("❌ Close Viewer", use_container_width=True):
                st.session_state["view_content"] = None
                st.rerun()
    # ---------------------------

    if st.session_state["current_folder_items"] is None:
        with st.spinner("Loading..."):
            items = client.get_drive_item_children(st.session_state["current_folder_id"])
            st.session_state["current_folder_items"] = items
            
            # --- Check DB Status ---
            if sync_to_db: 
                 ids_to_check = [item['id'] for item in items]
                 st.session_state["indexed_ids_cache"] = db_client.get_indexed_status(ids_to_check)
    
    items = st.session_state["current_folder_items"]
    indexed_ids = st.session_state["indexed_ids_cache"]

    st.markdown("---")
    h1, h2, h3, h4, h5 = st.columns([0.05, 0.05, 0.6, 0.15, 0.15])
    h1.write("✅")
    h3.write("**Name**")

    # Selection list populated in loop

    for item in items:
        item_id = item.get('id')
        is_folder = 'folder' in item
        name = item.get('name')
        icon = "📁" if is_folder else "📄"
        
        # Color coding logic
        is_indexed = item_id in indexed_ids
        
        c1, c2, c3, c4, c5 = st.columns([0.05, 0.05, 0.6, 0.15, 0.15], vertical_alignment="center")
        
        if c1.checkbox("", key=f"sel_{item_id}"):
            current_selection.append(item)
            
        c2.write(icon)
        
        if is_indexed:
            c3.markdown(f"**{name}** <span class='indexed-badge'>✅ Indexed</span>", unsafe_allow_html=True)
        else:
            c3.write(name)
        
        if is_folder:
            if c5.button("Open", key=f"btn_{item_id}"):
                enter_folder(item_id, name)
        elif is_indexed:
            # View Button for files
            if c5.button("👁️ View", key=f"view_{item_id}"):
                doc = db_client.get_document_content(item_id)
                if doc:
                    st.session_state["view_content"] = doc.get("content", "*No content found in DB*")
                    st.session_state["view_name"] = name
                    st.rerun()
                else:
                    st.error("Could not fetch document.")

with col_action:
    st.markdown('<div class="sticky-action-panel">', unsafe_allow_html=True)
    st.markdown("### Actions")
    current_cost = cost_estimator.get_total_cost()
    st.markdown(f"<div class='cost-box'>💰 Est. Cost: ${current_cost:.4f}</div>", unsafe_allow_html=True)
    
    if current_selection:
        btn_label = f"🚀 Index {len(current_selection)} Selected"
        items_to_index = current_selection
    else:
        btn_label = "🚀 Index Entire Folder"
        items_to_index = items

    if st.button(btn_label, type="primary"):
        status_area = st.empty()
        try:
            with st.spinner("Indexing & Syncing..."):
                def update_status(msg): status_area.text(msg)
                
                results = process_onedrive_selection(
                    client, 
                    items_to_index,
                    status_callback=update_status,
                    recursive=recursive_indexing,
                    llm_client=llm_client,
                    sync_db=sync_to_db # Pass the toggle value
                )
                
                if results:
                    st.session_state["indexing_results"] = results
                    st.session_state["indexed_ids_cache"] = set() # Force refresh of green checks
                    st.session_state["current_folder_items"] = None # Force complete refresh to update UI
                    st.success(f"✅ Processed {len(results)} files!")
                    st.rerun() # Rerun to show new green checks
                else:
                    st.warning("No supported files found.")
        except Exception as e:
            st.error(f"Error: {e}")
    
    st.markdown('</div>', unsafe_allow_html=True)  # Close sticky container

