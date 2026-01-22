import pandas as pd
import json
import os

INPUT_FILE = 'assets/docs/Drawing List v2.xlsm'
MAP_FILE = 'assets/data/thumbnail_map.json'

# Load thumbnail map
with open(MAP_FILE, 'r') as f:
    thumbnail_map = json.load(f)

xls = pd.ExcelFile(INPUT_FILE)

# Test with a sheet that has thumbnails (e.g., 'A0')
test_sheet = 'A0'
print(f"=== DEBUG: Sheet '{test_sheet}' ===\n")

# Show thumbnail map keys for this sheet
if test_sheet in thumbnail_map:
    print(f"Thumbnail Map Row Keys: {sorted(thumbnail_map[test_sheet].keys(), key=int)}")
else:
    print("Sheet not in thumbnail map!")

# Read sheet WITHOUT header to see raw indices
df_raw = pd.read_excel(xls, sheet_name=test_sheet, header=None)

print(f"\nRaw DataFrame shape: {df_raw.shape}")
print(f"First 10 rows (raw):")
for i in range(min(10, len(df_raw))):
    row_preview = str(df_raw.iloc[i].tolist())[:100]
    print(f"  Excel Row {i+1} (0-based idx {i}): {row_preview}...")

# Find header row manually
keywords_number = ['number', 'dwg', 'detail', 'drg no', 'identifier']
keywords_title = ['title', 'description', 'subject', 'name']

header_row_idx = -1
for idx in range(len(df_raw)):
    row = df_raw.iloc[idx]
    row_str = row.astype(str).str.lower().tolist()
    has_number = any(any(k in s for k in keywords_number) for s in row_str)
    has_title = any(any(k in s for k in keywords_title) for s in row_str)
    if has_number and has_title:
        header_row_idx = idx
        break

print(f"\nHeader Row Index (0-based): {header_row_idx}")
print(f"Header Row (Excel 1-based): {header_row_idx + 1}")
print(f"First Data Row (Excel 1-based): {header_row_idx + 2}")

# Calculate what row indices SHOULD match thumbnail map
print(f"\n--- Expected Row Mapping ---")
# Thumbnail map uses 1-based Excel row numbers
# First data row after header is header_row_idx + 2 (in 1-based)
# So for df iteration index i (0-based): Excel row = header_row_idx + 2 + i

for i in range(5):
    excel_row = header_row_idx + 2 + i  # 1-based Excel row
    map_key = str(excel_row)
    in_map = map_key in thumbnail_map.get(test_sheet, {})
    print(f"  Data item {i}: Excel Row = {excel_row}, Key '{map_key}' in map: {in_map}")
