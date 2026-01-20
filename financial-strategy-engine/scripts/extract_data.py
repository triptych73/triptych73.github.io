import pandas as pd
import json
import datetime
import re
import os

# Relative path from financial-strategy-engine/scripts/ to assets/docs/
# ../../assets/docs/...
file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'assets', 'docs', 'STMS Costs Calculation incl Indexation 20230322 v2.xlsx')

def excel_date_to_datetime(serial):
    try:
        if isinstance(serial, datetime.datetime): return serial
        if isinstance(serial, pd.Timestamp): return serial.to_pydatetime()
        if isinstance(serial, str):
            pd_date = pd.to_datetime(serial, errors='coerce')
            if not pd.isna(pd_date): return pd_date.to_pydatetime()
            return None
        fval = float(serial)
        if fval < 35000 or fval > 60000: return None
        return datetime.datetime(1899, 12, 30) + datetime.timedelta(days=fval)
    except:
        return None

def extract_all():
    data = {
        "transactions": [],
        "yearly_summary": []
    }
    
    try:
        xl = pd.ExcelFile(file_path)
        
        # --- 1. FULL TRANSACTIONAL ---
        sheet_trans = next((s for s in xl.sheet_names if "TRANSACT" in s or "FULL" in s), None)
        if sheet_trans:
            print(f"Processing Transactions from: {sheet_trans}")
            # Read with header at row 0
            df = pd.read_excel(file_path, sheet_name=sheet_trans, header=0)
            
            # Normalize column names
            df.columns = [str(c).strip() for c in df.columns]
            print(f"Columns: {list(df.columns)}")
            
            # Identify columns
            date_col = next((c for c in df.columns if 'Date' in c or 'date' in c), None)
            desc_col = next((c for c in df.columns if 'Description' in c or 'Desc' in c), None)
            payee_col = next((c for c in df.columns if 'Payee' in c), None)
            debit_col = next((c for c in df.columns if 'Debit' in c), None)
            credit_col = next((c for c in df.columns if 'Credit' in c), None)
            indexed_col = next((c for c in df.columns if 'Indexed' in c), None)
            
            print(f"Mapped: Date={date_col}, Desc={desc_col}, Payee={payee_col}, Debit={debit_col}, Indexed={indexed_col}")
            
            count = 0
            for r_idx, row in df.iterrows():
                try:
                    # Get Date
                    raw_date = row[date_col] if date_col else None
                    dt = excel_date_to_datetime(raw_date)
                    if not dt: continue # minimal requirement: validation of date?
                    
                    year = dt.year
                    period = dt.strftime("%Y-%m")
                    
                    # desc
                    base_desc = str(row[desc_col]).strip() if desc_col else "Unknown"
                    if base_desc == 'nan': base_desc = "Unknown"
                    
                    # Payee
                    payee = ""
                    if payee_col:
                        p_val = str(row[payee_col]).strip()
                        if p_val and p_val.lower() != 'nan':
                            payee = p_val
                            
                    # Combine Source
                    source = f"{base_desc} - {payee}" if payee else base_desc
                    # Clean up
                    source = source.replace('"', '').replace('\n', ' ').strip()
                    if source.endswith('-'): source = source[:-1].strip()
                    
                    # Amount
                    debit = 0.0
                    credit = 0.0
                    
                    if debit_col:
                        try:
                            val = str(row[debit_col]).replace('£','').replace(',','')
                            if val.lower() != 'nan':
                                debit = float(val)
                        except: pass
                        
                    if credit_col:
                        try:
                            val = str(row[credit_col]).replace('£','').replace(',','')
                            if val.lower() != 'nan':
                                credit = float(val)
                        except: pass
                        
                    if pd.isna(debit): debit = 0.0
                    if pd.isna(credit): credit = 0.0

                    # Standard Accounting Sign: Debit (+) / Credit (-)
                    amount = debit - credit
                    
                    # Filter empty or zero
                    if abs(amount) < 0.01: continue
                    
                    # Filter very old/future
                    if year < 2004 or year > 2026: continue

                    data["transactions"].append({
                        "id": r_idx,
                        "period": period,
                        "source": source,
                        "amount": amount,
                        "indexed_amount": indexed_amount,
                        "year": year
                    })
                    count += 1
                except Exception as e:
                    # print(f"Row {r_idx} error: {e}")
                    pass
            print(f"Extracted {count} transactions")

        # --- 2. COSTS WORKSHEET ---
        sheet_costs = "COSTS WORKSHEET"
        if sheet_costs in xl.sheet_names:
            print(f"Processing Costs from: {sheet_costs}")
            df = pd.read_excel(file_path, sheet_name=sheet_costs, header=None)
            
            summary_data = []
            for r_idx, row in df.iterrows():
                try:
                    # Check for Year in Col 0
                    y_val = row[0]
                    if pd.isna(y_val): continue
                    
                    # Robust check for year
                    try:
                        year = int(float(y_val))
                    except: continue

                    if year < 2004 or year > 2026: continue
                    
                    unindexed = float(str(row[5]).replace(',','')) if not pd.isna(row[5]) else 0
                    indexed = float(str(row[11]).replace(',','')) if not pd.isna(row[11]) else 0
                    
                    summary_data.append({
                        "year": year,
                        "unindexed": unindexed,
                        "indexed": indexed
                    })
                except: pass
            
            data["yearly_summary"] = summary_data
            print(f"Extracted {len(summary_data)} summary years")

        # Save
        output_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'extracted_data.json')
        with open(output_path, 'w') as f:
            json.dump(data, f, indent=2)
        print("Saved to extracted_data.json")

    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    extract_all()
