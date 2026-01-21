
import pandas as pd
import sys

file_path = 'assets/docs/Drawing List v2.xlsm'
output_file = 'excel_analysis.txt'

try:
    with open(output_file, 'w') as f:
        sys.stdout = f
        print(f"Inspecting: {file_path}")
        xls = pd.ExcelFile(file_path)
        print(f"Sheet names: {xls.sheet_names}")

        for sheet_name in xls.sheet_names:
            print(f"\n{'='*20}")
            print(f"Sheet: {sheet_name}")
            print(f"{'='*20}")
            df = pd.read_excel(xls, sheet_name=sheet_name, nrows=10) # Read first 10 rows
            print(f"Columns: {df.columns.tolist()}")
            print("-" * 10)
            print("First 10 rows:")
            print(df.to_string()) 
            print("\n")

    sys.stdout = sys.__stdout__
    print(f"Analysis complete. Results saved to {output_file}")

except Exception as e:
    sys.stdout = sys.__stdout__
    print(f"Error: {e}")
