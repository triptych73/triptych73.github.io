
import pandas as pd
import sys

file_path = 'assets/docs/Drawing List v2.xlsm'
sheets_file = 'sheets.txt'
dump_file = 'dump_all.csv'

try:
    xls = pd.ExcelFile(file_path)
    
    # specific sheets list
    with open(sheets_file, 'w') as f:
        f.write(str(xls.sheet_names))
    
    with open(dump_file, 'w') as f:
        for sheet in xls.sheet_names:
            f.write(f"--- Sheet: {sheet} ---\n")
            try:
                df = pd.read_excel(xls, sheet_name=sheet, header=None, nrows=10)
                f.write(df.to_csv(index=False))
            except Exception as e:
                f.write(f"Error reading sheet {sheet}: {e}\n")
            f.write("\n")
            
    print("Done")

except Exception as e:
    with open(sheets_file, 'w') as f:
        f.write(f"Error: {e}")
    print(f"Error: {e}")
