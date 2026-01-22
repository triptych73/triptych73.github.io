import zipfile
import os

INPUT_FILE = 'assets/docs/Drawing List v2.xlsm'

with zipfile.ZipFile(INPUT_FILE, 'r') as z:
    print("=== ALL FILES IN XLSX ===")
    
    # Show all drawing-related files
    drawing_files = [f for f in z.namelist() if 'drawing' in f.lower()]
    print("\nDrawing files:")
    for f in sorted(drawing_files):
        print(f"  {f}")
    
    # Show all media files
    media_files = [f for f in z.namelist() if 'media' in f.lower()]
    print(f"\nMedia files: {len(media_files)} total")
    for f in sorted(media_files)[:10]:
        print(f"  {f}")
    if len(media_files) > 10:
        print(f"  ... and {len(media_files) - 10} more")
    
    # Show all worksheets
    print("\nWorksheet files:")
    for f in sorted(z.namelist()):
        if f.startswith('xl/worksheets/sheet'):
            print(f"  {f}")
