import pandas as pd

INPUT_FILE = 'assets/docs/Drawing List v2.xlsm'

xls = pd.ExcelFile(INPUT_FILE)

# Check content of thumbnail sheets
thumbnail_sheets = ['A0', '03 + D', '01', 'CONDITIONS', 'A2+', 'A1']

for sheet in thumbnail_sheets:
    if sheet in xls.sheet_names:
        print(f"\n=== SHEET: {sheet} ===")
        df = pd.read_excel(xls, sheet_name=sheet, header=None, nrows=10)
        print(df.to_string())
    else:
        print(f"Sheet '{sheet}' not found")
