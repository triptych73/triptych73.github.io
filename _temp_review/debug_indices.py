
import pandas as pd
import json

INPUT_FILE = 'assets/docs/Drawing List v2.xlsm'
MAP_FILE = 'assets/data/thumbnail_map.json'

with open(MAP_FILE) as f:
    t_map = json.load(f)

# Pick a sheet that has thumbnails
sheet_name = list(t_map.keys())[0]
print(f"Checking Sheet: {sheet_name}")
print(f"Thumbnail Map Keys (First 10): {sorted(list(t_map[sheet_name].keys()), key=lambda x: int(x))[:10]}")

xls = pd.ExcelFile(INPUT_FILE)
df_scan = pd.read_excel(xls, sheet_name=sheet_name, header=None, nrows=20)
header_row_idx = -1
keywords_number = ['number', 'dwg', 'detail', 'drg no', 'identifier']
keywords_title = ['title', 'description', 'subject', 'name']

for idx, row in df_scan.iterrows():
    row_str = row.astype(str).str.lower().tolist()
    has_number = any(any(k in s for k in keywords_number) for s in row_str)
    has_title = any(any(k in s for k in keywords_title) for s in row_str)
    if has_number and has_title:
        header_row_idx = idx
        break

print(f"Header Row Index: {header_row_idx}")

if header_row_idx != -1:
    df = pd.read_excel(xls, sheet_name=sheet_name, header=header_row_idx)
    print("Calculated Indices for first 5 data rows:")
    for idx, row in df.head(5).iterrows():
        xml_row_index = header_row_idx + 1 + idx
        print(f"  Data Row {idx}: Calculated Index {xml_row_index} | Number: {row.iloc[0] if len(row) > 0 else '?'}")
