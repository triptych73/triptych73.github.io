
import os

target_file = 'c:/Users/gregr/.gemini/antigravity/scratch/triptych73-site/tax-strategy-engine/index.html'

def prune_file():
    if not os.path.exists(target_file):
        print(f"File not found: {target_file}")
        return

    with open(target_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    print(f"Original line count: {len(lines)}")
    
    # Range to remove: 124 to 32947 (1-based)
    # 0-based index: 123 to 32947
    
    start_idx = 123
    end_idx = 32947 
    
    if len(lines) < end_idx:
        print("File is smaller than expected end index. Aborting safely.")
        return

    # Keep beginning
    new_lines = lines[:start_idx]
    # Insert placeholder
    new_lines.append("        // DATA REMOVED BY SCRIPT\n")
    # Keep end (everything AFTER end_idx)
    new_lines.extend(lines[end_idx:])

    print(f"New line count: {len(new_lines)}")

    with open(target_file, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print("Pruning complete.")

if __name__ == '__main__':
    prune_file()
