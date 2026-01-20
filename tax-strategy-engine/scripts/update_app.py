import json
import re
import os

# Paths relative to this script (tax-strategy-engine/scripts/update_app.py)
html_path = os.path.join(os.path.dirname(__file__), '..', 'index.html')
json_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'extracted_data.json')

def update_app():
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Create the JS block
    js_data = f"const APP_DATA = {json.dumps(data, indent=4)};"
    
    # Replacement target: const APP_DATA = { ... };
    # We need to match the existing APP_DATA block which might be huge.
    # Regex for "const APP_DATA = { ... };"
    # Note: The JSON might contain nested braces, so simple regex is risky.
    # However, since we formatted it with indent=4, it ends with "};" on a new line?
    # Or we can just look for the start "const APP_DATA =" and the next "const isLoan ="
    
    # Safe approach: Read the file, find start index of `const APP_DATA =`, find start index of `const isLoan =`
    # Replace everything in between.
    
    start_marker = "const APP_DATA ="
    end_marker = "const isLoan ="
    
    if start_marker in content and end_marker in content:
        start_idx = content.find(start_marker)
        end_idx = content.find(end_marker)
        
        # Keep the end_marker
        new_content = content[:start_idx] + js_data + "\n\n    " + content[end_idx:]
        
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully updated APP_DATA.")
    else:
        # Fallback to the original replacement if APP_DATA isn't there yet (shouldn't happen here but good for safety)
        print("Could not find APP_DATA block. Checking for EXTRACTED_LOANS...")
        regex = r'const EXTRACTED_LOANS = \[[\s\S]*?\];'
        if re.search(regex, content):
             js_derived = """
        const isLoan = (t) => {
            const s = (t.source || "").toLowerCase();
            // Stricter check:
            // 1. Must NOT match "advanced electronics" or similar non-loan uses of "advance"
            // 2. Must match "loan", "borrow", "advance" (words)
            
            // Exclude explicit false positives if any specific ones persist, but regex boundaries usually help.
            if (s.includes('electronic') || s.includes('boltin')) return false;

            // Simple robust check
            const keywords = ['loan', 'borrow', 'lending', 'repayment'];
            if (keywords.some(k => s.includes(k))) return true;

            // "Advance" is tricky. "Cash Advance" = Yes. "Advanced Electronics" = No.
            // Check for strict "advance" or "advances" but maybe exclude if followed by "electronics"?
            if (s.includes('advance') && !s.includes('electronics') && !s.includes('boltin')) return true;
            
            return false;
        };

        const EXTRACTED_LOANS = APP_DATA.transactions.filter(isLoan);
        const EXTRACTED_COSTS = APP_DATA.transactions.filter(t => !isLoan(t));
        const COST_SUMMARY = APP_DATA.yearly_summary;
    """
             new_content = re.sub(regex, js_data + js_derived, content)
             with open(html_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
             print("Successfully injected APP_DATA (First run logic).")
        else:
            print("Could not find target block.")

if __name__ == "__main__":
    update_app()
