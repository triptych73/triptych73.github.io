import pandas as pd

file_path = r'c:\Users\gregr\.gemini\antigravity\scratch\triptych73-site\assets\docs\STMS Costs Calculation incl Indexation 20230322 v2.xlsx'

try:
    print("--- Searching COSTS WORKSHEET for Totals/Index ---")
    df_costs = pd.read_excel(file_path, sheet_name='COSTS WORKSHEET')
    
    # Look for rows containing 'Total', 'Index', 'Base' in any column
    mask_costs = df_costs.apply(lambda x: x.astype(str).str.contains('Total|Index|Base', case=False).any(), axis=1)
    print(df_costs[mask_costs].head(20).to_string())

    print("\n--- Searching NEW STATEMENTS for KR/Loan ---")
    df_statements = pd.read_excel(file_path, sheet_name='NEW STATEMENTS')
    
    # Look for rows containing 'KR', 'Keith', 'Loan' in any column
    mask_loan = df_statements.apply(lambda x: x.astype(str).str.contains('KR|Keith|Loan', case=False).any(), axis=1)
    print(df_statements[mask_loan].head(20).to_string())

except Exception as e:
    print(f"Error reading Excel file: {e}")
