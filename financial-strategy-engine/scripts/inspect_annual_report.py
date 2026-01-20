import pandas as pd
import json

file_path = "c:/Users/gregr/.gemini/antigravity/scratch/triptych73-site/assets/docs/Annual Report Data.xlsx"

try:
    xl = pd.ExcelFile(file_path)
    print(f"Sheet Names: {xl.sheet_names}")
    
    sheet_name = [s for s in xl.sheet_names if "Consolidation" in s][0]
    print(f"\n--- Reading Sheet: {sheet_name} ---")
    df = pd.read_excel(file_path, sheet_name=sheet_name, header=None, nrows=40)
    
    # Fill NaN with None for JSON dumping
    data = df.where(pd.notnull(df), None).values.tolist()
    
    print("RAW DATA JSON:")
    print(json.dumps(data, default=str)) # default=str to handle Dates if any

        
except Exception as e:
    print(f"Error reading Excel: {e}")
