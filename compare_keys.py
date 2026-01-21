
import json
import sys

output_file = 'compare_keys_out.txt'

try:
    with open('assets/data/drawings.json') as f:
        drawings = json.load(f)

    with open('assets/data/thumbnail_map.json') as f:
        t_map = json.load(f)

    d_keys = set(drawings.keys())
    t_keys = set(t_map.keys())

    with open(output_file, 'w') as f:
        f.write(f"Drawings Sheets: {sorted(list(d_keys))}\n")
        f.write(f"Thumbnail Sheets: {sorted(list(t_keys))}\n")
        f.write(f"Overlap: {sorted(list(d_keys & t_keys))}\n")
        
    print("Done")

except Exception as e:
    print(f"Error: {e}")
