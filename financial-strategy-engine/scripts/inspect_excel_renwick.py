import pandas as pd
import os

file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'assets', 'docs', 'STMS Costs Calculation incl Indexation 20230322 v2.xlsx')

def inspect():
    try:
        xl = pd.ExcelFile(file_path)
        print(f"Sheets: {xl.sheet_names}")
        
        for sheet in xl.sheet_names:
            if "TRANSACT" in sheet or "FULL" in sheet:
                print(f"\nScanning Sheet: {sheet}")
                df = pd.read_excel(file_path, sheet_name=sheet)
                
                # Check Columns
                print(f"Columns: {list(df.columns)}")
                
                # Search for Renwick
                # Convert whole DF to string to search
                mask = df.astype(str).apply(lambda x: x.str.contains('Renwick', case=False, na=False)).any(axis=1)
                
                renwick_rows = df[mask]
                if not renwick_rows.empty:
                    print(f"\nFound {len(renwick_rows)} Renwick rows:")
                    print(renwick_rows.head(5).to_string())
                else:
                    print("No 'Renwick' found in this sheet.")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    inspect()
