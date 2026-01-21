import pandas as pd
import json
import os
import numpy as np

# Configuration
INPUT_FILE = 'assets/docs/Drawing List v2.xlsm'
OUTPUT_FILE = 'assets/data/drawings.json'

def parse_excel_to_json():
    print(f"Loading {INPUT_FILE}...")
    try:
        xls = pd.ExcelFile(INPUT_FILE)
    except FileNotFoundError:
        print(f"Error: File not found at {INPUT_FILE}")
        return

    all_drawings = {}
    
    # Sheets to exclude if they are clearly not drawing lists
    EXCLUDED_SHEETS = ['Cover', 'Legend', 'History']

    for sheet_name in xls.sheet_names:
        if sheet_name in EXCLUDED_SHEETS:
            continue
            
        print(f"Processing sheet: {sheet_name}")
        
        # Read the sheet
        # We need to find the header row. It usually contains "Drawing Number", "Title", "Rev", etc.
        # Let's read the first 20 rows to scan for headers
        df_scan = pd.read_excel(xls, sheet_name=sheet_name, header=None, nrows=20)
        
        header_row_idx = -1
        # Flexible Keyword Matching
        keywords_number = ['number', 'dwg', 'detail', 'drg no', 'identifier']
        keywords_title = ['title', 'description', 'subject', 'name']
        
        for idx, row in df_scan.iterrows():
            row_str = row.astype(str).str.lower().tolist()
            # Check if likely header row
            has_number = any(any(k in s for k in keywords_number) for s in row_str)
            has_title = any(any(k in s for k in keywords_title) for s in row_str)
            
            if has_number and has_title:
                header_row_idx = idx
                break
        
        if header_row_idx == -1:
            print(f"  Skipping {sheet_name}: Could not find header row (checked for {keywords_number} + {keywords_title}).")
            continue

        # Now read the full sheet with the correct header
        df = pd.read_excel(xls, sheet_name=sheet_name, header=header_row_idx)
        
        # Create a mapping strategy
        cols = df.columns.tolist()
        col_map = {}
        for c in cols:
            c_lower = str(c).lower().strip()
            # Map loosely
            if any(k in c_lower for k in keywords_number):
                col_map[c] = 'number'
            elif any(k in c_lower for k in keywords_title):
                col_map[c] = 'title'
            elif 'scale' in c_lower:
                col_map[c] = 'scale'
            elif 'size' in c_lower:
                col_map[c] = 'size'
            elif 'rev' in c_lower:
                col_map[c] = 'revision'
            elif 'date' in c_lower:
                 col_map[c] = 'date'
            elif 'status' in c_lower:
                col_map[c] = 'status'
            elif 'phase' in c_lower:
                col_map[c] = 'phase'

        if 'number' not in col_map.values() or 'title' not in col_map.values():
             print(f"  Skipping {sheet_name}: Mapped columns {list(col_map.values())} but missing 'number' or 'title'.")
             continue

        # Load Thumbnail Map
        thumbnail_map = {}
        if os.path.exists('assets/data/thumbnail_map.json'):
            with open('assets/data/thumbnail_map.json', 'r') as f:
                thumbnail_map = json.load(f)

        # Extract data
        sheet_data = []
        for idx, row in df.iterrows():
            # Skip empty rows (where Number or Title is missing)
            number_col = next((k for k, v in col_map.items() if v == 'number'), None)
            if pd.isna(row[number_col]):
                continue

            item = {}
            for original_col, standard_key in col_map.items():
                val = row[original_col]
                # Clean up values
                if pd.isna(val):
                    val = ""
                else:
                    val = str(val).strip()
                    # Handle dates if they come through as timestamps
                    if 'date' in standard_key and '00:00:00' in val:
                        val = val.split(' ')[0]
                
                item[standard_key] = val
            
            # Add Thumbnail if exists
            # XML Row Index = header_row_idx + 1 + df_index
            # Note: df index usually starts at 0 for the first data row
            xml_row_index = header_row_idx + 1 + idx
            
            if sheet_name in thumbnail_map:
                # Keys in JSON are strings
                key = str(xml_row_index)
                if key in thumbnail_map[sheet_name]:
                    item['thumbnail'] = thumbnail_map[sheet_name][key]
            
            sheet_data.append(item)
            
        if sheet_data:
            all_drawings[sheet_name] = sheet_data
            print(f"  Extracted {len(sheet_data)} drawings.")

    # Save to JSON
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(all_drawings, f, indent=2)
    
    print(f"\nSuccess! Data saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    parse_excel_to_json()
