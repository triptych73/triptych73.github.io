
import db_client
from datetime import datetime

print("Initializing DB...")
db = db_client.get_db()

if not db:
    print("Failed to connect to DB.")
    exit(1)

data = {
    "project_progress": 45,
    "project_status": {
        "inspector": "Sarah Jenkins (Pending)",
        "phase": "Structural Assessment"
    },
    "stage_notices": [
        {
            "date": "2025-12-15", 
            "title": "Initial Inspection Notice", 
            "status": "Completed", 
            "icon": "fa-check-circle"
        },
        {
            "date": "2026-01-10", 
            "title": "Structural Defect Warning", 
            "status": "Active", 
            "icon": "fa-exclamation-triangle"
        }
    ],
    "design_checks": [
        { "title": "Steelwork Calculations", "status": "Approved", "date": "2025-11-20" },
        { "title": "Fire Strategy", "status": "Under Review", "date": "2026-01-12" }
    ],
    "submissions": [
        { "title": "Building Control Application", "date": "2025-10-01", "status": "Submitted", "link": "#" }
    ]
}

print(f"Writing data to project_dashboard/summary...")
try:
    db.collection('project_dashboard').document('summary').set(data)
    print("Write Successful!")
except Exception as e:
    print(f"Write Failed: {e}")
