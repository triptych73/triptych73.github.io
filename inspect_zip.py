
import zipfile
import os

file_path = 'assets/docs/Drawing List v2.xlsm'
extract_path = 'temp_excel_extract'

try:
    with zipfile.ZipFile(file_path, 'r') as zip_ref:
        # List all files matching media
        media_files = [f for f in zip_ref.namelist() if 'media' in f]
        print(f"Found {len(media_files)} media files.")
        for f in media_files[:10]:
            print(f" - {f}")
        
        # Also check for drawing XMLs
        drawing_files = [f for f in zip_ref.namelist() if 'drawings/drawing' in f]
        print(f"Found {len(drawing_files)} drawing XML files.")

except Exception as e:
    print(f"Error: {e}")
