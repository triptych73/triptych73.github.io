
import pandas as pd
import sys

file_path = 'assets/docs/Drawing List v2.xlsm'
output_file = 'dump.csv'

try:
    with open(output_file, 'w') as f:
        xls = pd.ExcelFile(file_path)
        sheets_to_inspect = ['NMA PLANS', 'PHASE 3']
        
        for sheet in sheets_to_inspect:
            if sheet in xls.sheet_names:
                f.write(f"--- Sheet: {sheet} ---\n")
                df = pd.read_excel(xls, sheet_name=sheet, header=None, nrows=20)
                f.write(df.to_csv(index=False))
                f.write("\n")
    print(f"Dumped to {output_file}")

except Exception as e:
    print(f"Error: {e}")
