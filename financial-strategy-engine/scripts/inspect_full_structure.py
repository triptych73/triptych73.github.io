import pandas as pd
import os

file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'assets', 'docs', 'STMS Costs Calculation incl Indexation 20230322 v2.xlsx')

def inspect():
    try:
        xl = pd.ExcelFile(file_path)
        print(f"Sheets: {xl.sheet_names}")
        
        # Find Trans sheet
        sheet_trans = next((s for s in xl.sheet_names if "TRANSACT" in s.upper() or "FULL" in s.upper()), None)
        if sheet_trans:
            print(f"\nTarget Sheet: {sheet_trans}")
            df = pd.read_excel(file_path, sheet_name=sheet_trans, header=0)
            print(f"Columns: {list(df.columns)}")
            
            # Print first 5 rows to see data samples for columns that might contain 'Renwick' or 'Indexed'
            print("\nFirst 5 rows:")
            print(df.head(5).to_string())
            
            # Search for Renwick
            print("\nSearch 'Renwick':")
            mask = df.astype(str).apply(lambda x: x.str.contains('Renwick', case=False, na=False)).any(axis=1)
            print(df[mask].head(5).to_string())
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    inspect()
