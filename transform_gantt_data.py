
import json
import re

input_path = r"c:\Users\gregr\.gemini\antigravity\scratch\triptych73-site\gantt-app\src\lib\data.js"
output_path = r"c:\Users\gregr\.gemini\antigravity\scratch\triptych73-site\gantt-app\src\lib\data.js"

with open(input_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract JSON array part
# Assuming format: export const initialTasks = [...];
match = re.search(r'export const initialTasks = (\s*\[.*\]\s*);', content, re.DOTALL)
if not match:
    print("Could not find initialTasks array.")
    exit(1)

json_str = match.group(1)
# Handle trailing commas if any (simple regex cleanup)
json_str = re.sub(r',\s*]', ']', json_str)
json_str = re.sub(r',\s*}', '}', json_str)

try:
    tasks = json.loads(json_str)
except json.JSONDecodeError as e:
    # If standard JSON fails, fallback to ast.literal_eval for JS-like objects if needed, 
    # but the file looks like valid JSON-ish.
    # Let's try to be resilient or just use manual parsing if needed.
    # The view_file output showed standard JSON syntax (keys quoted).
    print(f"JSON Parse Error: {e}")
    # Try correcting key quotes if they are missing? No, they were quoted in view_file.
    exit(1)

# Transformation Logic
new_tasks = []

# 1. Create Phase 1
phase1_id = "Phase1"
phase1 = {
    "id": phase1_id,
    "name": "Phase 1",
    "startDate": "2021-01-19",
    "duration": 1, # Will be auto-calculated by app logic
    "progress": 0,
    "type": "task",
    "dependencies": [],
    "parentId": None
}
new_tasks.append(phase1)

# 2. Process existing tasks
for t in tasks:
    # Check if top level (simple numeric ID e.g. "1", "12")
    # OR if it's a child (contains ".")
    
    is_top_level = '.' not in t['id']
    
    if is_top_level:
        t['parentId'] = phase1_id
    else:
        # It's a sub-item (e.g. "1.1")
        # Existing implicit parent logic (1.1 -> 1) works, 
        # but "1" now has parent "Phase1".
        # So "1" is a child, "1.1" is a grandchild of Phase1.
        # We don't strictly need to add parentId to "1.1" if logic handles implicit,
        # BUT explicit is better.
        
        # Infer parent ID
        parts = t['id'].split('.')
        parent_id = parts[0] # "1.1" -> "1"
        if len(parts) > 2:
             parent_id = ".".join(parts[:-1])
        
        t['parentId'] = parent_id

    new_tasks.append(t)

# 3. Output back to file
json_output = json.dumps(new_tasks, indent=4)
new_content = f"export const initialTasks = {json_output};\n"

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully restructured tasks.")
