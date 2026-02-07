import pandas as pd

file_path = r'c:\Users\gregr\.gemini\antigravity\scratch\triptych73-site\assets\docs\STMS Costs Calculation incl Indexation 20230322 v2.xlsx'

def search_excel():
    try:
        xl = pd.ExcelFile(file_path)
        print(f"Sheets: {xl.sheet_names}")
        
        targets = [2462470, 2901788] # Unindexed, Indexed totals
        
        for sheet in xl.sheet_names:
            print(f"--- Scanning {sheet} ---")
            df = pd.read_excel(file_path, sheet_name=sheet, header=None)
            
            # 1. Search for totals
            for r_idx, row in df.iterrows():
                for c_idx, val in enumerate(row):
                    try:
                        # Handle strings like £2,462,470.74
                        s_val = str(val).replace('£','').replace(',','')
                        f_val = float(s_val)
                        
                        for t in targets:
                            if abs(f_val - t) < 5.0: # lenient match
                                print(f"MATCH TOTAL: Found {f_val} (Target {t}) in {sheet} at Row {r_idx}, Col {c_idx}")
                                # Print surrounding context
                                start_r = max(0, r_idx - 5)
                                end_r = min(len(df), r_idx + 5)
                                print(df.iloc[start_r:end_r])
                    except:
                        pass
            
            # 2. Search for headers
            # Looking for "Indexation", "Acquisition", "Enhancement"
            mask = df.apply(lambda x: x.astype(str).str.contains('Indexation|Acquisition|Enhancement', case=False, na=False))
            if mask.any().any():
                print(f"Potential Headers in {sheet}:")
                # print the rows that have these words
                rows_with_headers = df[mask.any(axis=1)]
                print(rows_with_headers.head())

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    search_excel()
