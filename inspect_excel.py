import pandas as pd

try:
    xl = pd.ExcelFile("Tax Considerations (1).xlsx")
    print(xl.sheet_names)
except Exception as e:
    print(f"Error: {e}")
