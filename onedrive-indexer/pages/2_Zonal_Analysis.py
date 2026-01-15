import streamlit as st
import firebase_admin
from firebase_admin import firestore
try:
    from llm_client import LLMClient
except ImportError:
    import sys
    import os
    sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    from llm_client import LLMClient

import os
import json
import datetime
from dotenv import load_dotenv

# Load env (if not already loaded by main app)
load_dotenv(override=True)

st.set_page_config(page_title="Zonal Analysis", page_icon="🏢", layout="wide")

st.title("🏢 Zonal Compliance Analysis")
st.markdown("Use AI to scan all indexed documents and map them to building zones/levels against regulations.")

# --- Firestore Setup ---
import db_client

# Use the centralized client which handles Env Vars and Local Files
db = db_client.get_db()

if not db:
    st.error("""
    ❌ **Firebase Not Connected**
    
    Could not find credentials. Please ensure:
    1. `FIREBASE_CREDENTIALS` environment variable is set (with JSON content).
    2. OR `firebase-adminsdk.json` file is present in the directory.
    """)
    st.stop()


# --- AI Client Setup ---
api_key = os.getenv("GOOGLE_API_KEY") 
if not api_key:
    # Try getting from session state of main app if possible, or warn
    st.warning("⚠️ GOOGLE_API_KEY not found. Please ensure it is set in .env")
else:
    # Initialize LLM
    class MockTracker:
        def track(self, *args): pass
    
    # Use best available model
    llm = LLMClient(provider="Google", api_key=api_key, model_name="gemini-1.5-pro", cost_tracker=MockTracker())

    if st.button("🚀 Run Full Zonal Analysis", type="primary"):
        with st.status("Running Analysis...", expanded=True) as status:
            # 1. Fetch All Docs
            status.write("Fetching documents from Firestore...")
            docs = db.collection('indexer_files').where('provider', '==', 'onedrive').stream()
            
            context_text = ""
            doc_count = 0
            
            for doc in docs:
                data = doc.to_dict()
                name = data.get('name', 'Untitled')
                path = data.get('folder_path', '')
                content = data.get('content', '')
                
                # Truncate
                summary = ""
                if "### AI Analysis" in content:
                    parts = content.split("### AI Analysis")
                    if len(parts) > 1:
                        summary = parts[1].strip()
                
                excerpt = summary if summary else content[:500]
                
                context_text += f"ID: {doc.id}\nFile: {name}\nPath: {path}\nContent Summary: {excerpt}\n---\n"
                doc_count += 1
            
            status.write(f"Processed {doc_count} documents. Sending to AI...")
            
            # 2. Construct Prompt
            prompt = """
            You are a Building Control expert. Analyze the provided list of project documents.
            
            Your Goal: Map the project's progress against Building Regulations for each specific Zone/Level.
            
            Defined Zones:
            - "Basement"
            - "Ground" (Ground Floor)
            - "Level 1" to "Level 10"
            - "Roof"
            
            Regulations to tracking:
            - "Structure" (Part A)
            - "Fire Safety" (Part B)
            - "Sound" (Part E)
            - "Ventilation" (Part F)
            - "Access" (Part M)
            
            Instructions:
            1. Identify which Zone each document belongs to based on its Name and Path.
            2. Determine if it satisfies or relates to a specific Regulation.
            3. EXTRACT any specific warnings, missing items, or critical notes for that Zone.
            
            Output strictly as JSON:
            {
                "zones": {
                    "Ground": {
                        "regulations": {
                            "Structure": {"status": "present", "docs": ["doc_name..."]},
                            "Fire Safety": {"status": "missing", "docs": []}
                        },
                        "notes": "Specific notes for Ground floor..."
                    },
                    "Level 1": ...
                }
            }
            """
            
            # 3. Call AI
            try:
                response = llm.analyze_text(context_text, prompt)
                
                # 4. Clean & Parse JSON
                import re
                # Find the first opening brace and the last closing brace
                match = re.search(r'\{[\s\S]*\}', response)
                
                if match:
                    clean_json = match.group(0)
                    try:
                        data = json.loads(clean_json)
                        
                        # 5. Save to Firestore
                        status.write("Saving results indexer_analysis/zonal_matrix...")
                        db.collection('indexer_analysis').document('zonal_matrix').set({
                            "last_updated": datetime.datetime.utcnow(),
                            "data": data,
                            "doc_count": doc_count
                        })
                        
                        status.update(label="Analysis Complete!", state="complete", expanded=False)
                        st.success("✅ Analysis Updated! Check the Portal.")
                        st.json(data)
                        
                    except json.JSONDecodeError as je:
                        status.update(label="JSON Parsing Failed", state="error")
                        st.error(f"JSON Error: {je}")
                        with st.expander("View Raw AI Response (Debug)", expanded=True):
                            st.code(response)
                else:
                    status.update(label="No JSON Found in Response", state="error")
                    st.error("The AI did not return a valid JSON object.")
                    with st.expander("View Raw AI Response (Debug)", expanded=True):
                        st.code(response)
                
            except Exception as e:
                status.update(label="Analysis Failed", state="error")
                st.error(f"System Error: {e}")
