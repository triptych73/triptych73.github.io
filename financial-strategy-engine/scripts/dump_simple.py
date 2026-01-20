import pandas as pd
import json

file_path = "c:/Users/gregr/.gemini/antigravity/scratch/triptych73-site/assets/docs/Annual Report Data.xlsx"
try:
    xl = pd.ExcelFile(file_path)
    sheet_name = [s for s in xl.sheet_names if "Consolidation" in s][0]
    df = pd.read_excel(file_path, sheet_name=sheet_name, header=None, nrows=20)
    data = df.where(pd.notnull(df), None).values.tolist()
    print(json.dumps(data, indent=2, default=str))
except Exception as e:
    print(str(e))
