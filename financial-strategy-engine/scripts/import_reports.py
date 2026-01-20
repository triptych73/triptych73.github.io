import os
import re
import glob

DOCS_DIR = r"c:/Users/gregr/.gemini/antigravity/scratch/triptych73-site/assets/docs"

def parse_currency(val_str):
    if not val_str: return 0.0
    # Remove () for negative, commas, currency symbols
    val_str = str(val_str).strip()
    is_negative = False
    if val_str.startswith('(') and val_str.endswith(')'):
        is_negative = True
        val_str = val_str[1:-1]
    elif val_str.startswith('-'):
        is_negative = True
        val_str = val_str[1:]
    
    clean = re.sub(r'[^\d.]', '', val_str)
    try:
        val = float(clean)
        return -val if is_negative else val
    except:
        return 0.0

def extract_val_from_table(content, key_pattern, col_index=1):
    """
    Finds a row matching key_pattern in a markdown table and returns value at col_index.
    Assumes standard markdown table format | Col | Col |.
    """
    lines = content.split('\n')
    for line in lines:
        if '|' in line:
            parts = [p.strip() for p in line.split('|') if p.strip() != '']
            if len(parts) > col_index:
                if re.search(key_pattern, parts[0], re.IGNORECASE):
                    return parse_currency(parts[col_index])
    return 0.0

def extract_year(filename, content):
    # Try filename first "Client Copy 2015.md"
    match = re.search(r'20(\d{2})', filename)
    if match:
        return int("20" + match.group(1))
    
    # Try content
    match = re.search(r'YEAR ENDED.*?30 June 20(\d{2})', content, re.IGNORECASE | re.DOTALL)
    if match:
        return int("20" + match.group(1))
    return None

def process_file(filepath):
    filename = os.path.basename(filepath)
    print(f"Processing {filename}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    year = extract_year(filename, content)
    if not year:
        print(f"Skipping {filename}: Could not determine year.")
        return

    # Extract Key Metrics
    
    # 1. P&L Section
    turnover = extract_val_from_table(content, r'TURNOVER')
    admin_expenses = extract_val_from_table(content, r'Administrative expenses')
    operating_profit = extract_val_from_table(content, r'OPERATING PROFIT')
    tax = extract_val_from_table(content, r'Tax on profit')
    
    # 2. Balance Sheet
    tangible_assets = extract_val_from_table(content, r'Tangible assets')
    cash = extract_val_from_table(content, r'Cash at bank')
    net_assets = extract_val_from_table(content, r'NET ASSETS')
    
    # 3. Creditors / Notes
    # "Loan from directors" usually in Note 8 or similar table
    director_loan = extract_val_from_table(content, r'Loan from directors|Directors loan|Director loan|Directors current account')
    
    # Insurance logic from detailed P&L?
    insurance = extract_val_from_table(content, r'^Insurance$')
    
    data = {
        'year': year,
        'filename': filename,
        'turnover': turnover,
        'admin_expenses': admin_expenses,
        'operating_profit': operating_profit,
        'tangible_assets': tangible_assets,
        'cash': cash,
        'director_loan': director_loan,
        'net_assets': net_assets,
        'insurance': insurance,
        'tax': tax
    }
    
    print(f"  > Year: {year}, Loan: {director_loan}, Net Assets: {net_assets}")
    
    print(f"  > Year: {year}, Loan: {director_loan}, Net Assets: {net_assets}")
    return data

def main():
    md_files = glob.glob(os.path.join(DOCS_DIR, "Client Copy *.md"))
    if not md_files:
        print("No markdown files found matching 'Client Copy *.md'")
        return

    all_data = []
    for fp in md_files:
        d = process_file(fp)
        if d:
            all_data.append(d)

    import json
    out_file = "annual_reports.json"
    with open(out_file, 'w') as f:
        json.dump(all_data, f, indent=2)
    
    print(f"Done. Saved {len(all_data)} reports to {out_file}")

if __name__ == "__main__":
    main()
