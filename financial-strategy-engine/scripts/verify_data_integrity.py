import json

# Load data
with open('c:/Users/gregr/.gemini/antigravity/scratch/triptych73-site/tax-strategy-engine/data/extracted_data.json', 'r') as f:
    data = json.load(f)

transactions = data['transactions']
summary = data['yearly_summary']

# Helper to identify loans (using the JS logic approximation)
def is_loan(t):
    s = (t.get('source') or "").lower()
    amt = abs(t.get('amount', 0))
    # Condition 1
    if 'loan' in s or 'borrow' in s or ('advance' in s and 'electronics' not in s and 'boltin' not in s):
        if 'electronic' in s or 'boltin' in s: return False
        return True
    
    # Condition 2 (Renwick/Salafia > 99 round hundred)
    if ('renwick' in s or 'salafia' in s) and amt >= 99 and amt % 100 == 0:
        return True
    
    return False

# Group transactions by year
calc_summary = {}

for t in transactions:
    if is_loan(t):
        continue
        
    y = t.get('year')
    if y not in calc_summary:
        calc_summary[y] = 0.0
    
    # In the app, extracted_costs are unfiltered, so we sum them up.
    # Note: extracted_costs = transactions !isLoan
    # But wait, does 'unindexed' in summary include EVERYTHING or just costs?
    # Usually summary matches 'costs'.
    calc_summary[y] += t.get('amount', 0)

print(f"{'Year':<6} | {'Sum(Trans)':<15} | {'Summary(Unindexed)':<20} | {'Diff':<15} | {'Summary(Indexed)':<20}")
print("-" * 80)

for row in summary:
    y = row['year']
    summ_val = row['unindexed']
    idx_val = row['indexed']
    calc_val = calc_summary.get(y, 0.0)
    
    diff = calc_val - summ_val
    
    print(f"{y:<6} | {calc_val:<15.2f} | {summ_val:<20.2f} | {diff:<15.2f} | {idx_val:<20.2f}")
