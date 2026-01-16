import pandas as pd

try:
    df = pd.read_excel("Tax Considerations (1).xlsx", sheet_name="MODEL")
    print(df.to_csv(index=False))
except Exception as e:
    print(f"Error: {e}")
