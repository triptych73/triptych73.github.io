import openpyxl

file_path = 'assets/docs/Drawing List v2.xlsm'

try:
    print(f"Loading {file_path} with openpyxl...")
    # Try keeping vba to see if it prevents the structure error, and remove data_only
    wb = openpyxl.load_workbook(file_path, keep_vba=True, data_only=False)
    
    total_images = 0
    for sheet_name in wb.sheetnames:
        ws = wb[sheet_name]
        print(f"Sheet: {sheet_name}")
        
        # Method 1: Check _images attribute (standard openpyxl)
        if hasattr(ws, '_images'):
            images = ws._images
            print(f"  Found {len(images)} images via _images.")
            total_images += len(images)
            
            # Print location of first few images
            for i, img in enumerate(images[:3]):
                print(f"    Image {i}: Anchor {img.anchor}")

    print(f"\nTotal images found: {total_images}")

except Exception as e:
    print(f"Error: {e}")
