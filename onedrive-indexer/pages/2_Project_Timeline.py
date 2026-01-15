import streamlit as st
import json
import datetime
import db_client
from llm_client import LLMClient
import os

st.set_page_config(page_title="Project Timeline", page_icon="📅", layout="wide")

st.markdown("""
<style>
    .stApp { background-color: #F5F5F0; }
    h1, h2, h3 { font-family: 'Cinzel', serif; color: #0F1115; }
    .stButton button { border-radius: 0px; text-transform: uppercase; letter-spacing: 1px; }
</style>
""", unsafe_allow_html=True)

st.title("📅 Project Timeline Generator")

# --- Sidebar Config ---
st.sidebar.header("Configuration")
api_provider = st.sidebar.selectbox("AI Provider", ["Google", "OpenAI", "Anthropic"], index=0)
model_name = st.sidebar.selectbox("Model", ["gemini-3-pro-preview", "gemini-3-flash-preview", "gpt-4o", "claude-3-5-sonnet"], index=0)

api_key = os.getenv("GOOGLE_API_KEY") if api_provider == "Google" else ""
if not api_key:
    api_key = st.sidebar.text_input(f"{api_provider} API Key", type="password")

# --- Main Logic ---

def fetch_and_prepare_context():
    with st.spinner("Fetching indexed documents from Firebase..."):
        docs = db_client.get_all_documents()
        if not docs:
            return None, "No documents found in database."
        
        # Format for LLM
        # We need Date, Title, Type to help it infer the timeline
        context_lines = []
        for doc in docs:
            name = doc.get("name", "Untitled")
            # Try to find a date
            date_str = doc.get("last_modified") or doc.get("created_at") or doc.get("document_date") or "Unknown Date"
            summary = doc.get("summary", "No summary available.")
            
            context_lines.append(f"- [{date_str}] {name}: {summary}")
            
        return "\n".join(context_lines), f"Found {len(docs)} documents."

if st.button("🔄 Analyze & Generate Timeline"):
    if not api_key:
        st.error("Please provide an API Key.")
        st.stop()
        
    context_text, status_msg = fetch_and_prepare_context()
    
    if not context_text:
        st.error(status_msg)
    else:
        st.success(status_msg)
        
        # --- Prompting ---
        prompt = f"""
        You are an expert Project Manager for a construction project (St Mary Somerset Tower).
        
        Task: Analyze the following document list to reconstruct the project timeline and status.
        
        CRITICAL INSTRUCTION:
        Formal stage notices might be missing. You must INTELLIGENTLY INFER the project stage, progress percentage, and status events based on the document dates, types, and summaries provided.
        
        You must categorize every event into one of these 4 WORK STREAMS:
        1. "Structural" (Restoration, masonry, steel, roof, core fabric)
        2. "Fit-out" (M&E, internal stairs, joinery, finishes, utilities)
        3. "Compliance" (Building control, fire safety, planning conditions, legal)
        4. "Design" (Architectural drawings, structural calcs, diagrams, meetings)

        - Look for key words like 'Draft', 'Final', 'Approved', 'Submission'.
        - A 'Final Certificate' or 'Sign-off' implies 100% or near completion.
        - 'Initial Plans' implies early stages (10-20%).
        - Pay close attention to DATES to order events correctly.
        
        Return a valid JSON object with this exact structure:
        {{
            "project_progress": 60,  // Integer 0-100, infer from context
            "project_status": {{
                "inspector": "Infer Inspector Name if possible, else 'Pending'",
                "phase": "Current Phase Name (e.g. 'Design Review', 'Construction', 'Final Sign-off')"
            }},
            "stage_notices": [
                {{ "date": "YYYY-MM-DD", "title": "Notice Title", "status": "Completed/Pending", "icon": "fas fa-check", "stream": "Compliance" }}
            ],
            "design_checks": [
                 {{ "title": "Check Title", "status": "Approved/Pending/Reviewing", "date": "YYYY-MM-DD", "stream": "Design" }}
            ],
            "submissions": [
                 {{ "title": "Submission Name", "date": "YYYY-MM-DD", "status": "Submitted/Approved", "link": "#", "stream": "Structural" }}
            ]
        }}
        
        Documents Context:
        {context_text}
        """
        
        with st.spinner("🤖 AI is reconstructing the timeline... (Gemini 3 Pro)"):
            try:
                # Initialize LLM Client
                # Mock cost estimator for now or import if needed, but LLMClient needs it
                from cost_utils import CostEstimator
                llm = LLMClient(provider=api_provider, api_key=api_key, model_name=model_name, cost_tracker=CostEstimator())
                
                # We use analyze_text which handles basic prompting
                response_text = llm.analyze_text(text_content="", prompt=prompt)
                
                # Cleanup JSON (strip markdown fences if present)
                clean_json = response_text.replace("```json", "").replace("```", "").strip()
                
                try:
                    data = json.loads(clean_json)
                    st.session_state["timeline_json"] = data
                    st.success("Analysis Complete!")
                except json.JSONDecodeError:
                    st.error("Failed to parse JSON response.")
                    st.text(response_text)
                    
            except Exception as e:
                st.error(f"AI Error: {e}")

# --- Result Display ---
if "timeline_json" in st.session_state:
    data = st.session_state["timeline_json"]
    
    st.divider()
    c1, c2 = st.columns([1, 1])
    
    with c1:
        st.subheader("📊 Preview")
        st.json(data)
        
    with c2:
        st.subheader("💾 Actions")
        
        # Download
        st.download_button(
            "Download JSON", 
            data=json.dumps(data, indent=2), 
            file_name="project_timeline.json", 
            mime="application/json"
        )
        
        # Save to Firebase
        if st.button("☁️ Publish to Project Dashboard"):
            try:
                db = db_client.get_db()
                if db:
                    # Save to a singleton document for the dashboard
                    db.collection('project_dashboard').document('summary').set(data)
                    st.toast("Published successfully!", icon="🚀")
                    st.success("Live Dashboard Updated.")
                else:
                    st.error("Could not connect to Database.")
            except Exception as e:
                st.error(f"Publish failed: {e}")

