import pandas as pd
import json
import os

INPUT_FILE = 'assets/docs/Drawing List v2.xlsm'
MAP_FILE = 'assets/data/thumbnail_map.json'

print("--- PANDAS SHEET NAMES ---")
try:
    xls = pd.ExcelFile(INPUT_FILE)
    print(xls.sheet_names)
except Exception as e:
    print(f"Pandas Error: {e}")

print("\n--- THUMBNAIL MAP KEYS ---")
try:
    if os.path.exists(MAP_FILE):
        with open(MAP_FILE, 'r') as f:
            data = json.load(f)
            print(list(data.keys()))
    else:
        print("Map file not found.")
except Exception as e:
    print(f"JSON Error: {e}")
