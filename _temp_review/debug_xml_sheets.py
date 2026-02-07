import zipfile
import xml.etree.ElementTree as ET

INPUT_FILE = 'assets/docs/Drawing List v2.xlsm'

NS = {'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
      'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}

with zipfile.ZipFile(INPUT_FILE, 'r') as z:
    # 1. Get Sheets from Workbook
    wb_xml = z.read('xl/workbook.xml')
    wb_root = ET.fromstring(wb_xml)
    
    print("=== WORKBOOK SHEETS ===")
    sheets = {} # rId -> Name
    for sheet in wb_root.findall('.//main:sheet', NS):
        r_id = sheet.get(f'{{{NS["r"]}}}id')
        name = sheet.get('name')
        print(f"  rId: {r_id} -> Name: '{name}'")
        sheets[r_id] = name
    
    # 2. Get Sheet Paths from Workbook Rels
    print("\n=== WORKBOOK RELS ===")
    wb_rels_xml = z.read('xl/_rels/workbook.xml.rels')
    rels_root = ET.fromstring(wb_rels_xml)
    
    sheet_paths = {} # Name -> Path
    for rel in rels_root.findall('.//{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
        r_id = rel.get('Id')
        target = rel.get('Target')
        rel_type = rel.get('Type')
        if 'worksheet' in str(rel_type):
            if r_id in sheets:
                print(f"  rId: {r_id} -> Target: {target} -> Sheet: '{sheets[r_id]}'")
                sheet_paths[sheets[r_id]] = f"xl/{target}"
            else:
                print(f"  rId: {r_id} -> Target: {target} (NOT IN SHEETS DICT)")
    
    print("\n=== FINAL SHEET_PATHS ===")
    for name, path in sheet_paths.items():
        print(f"  '{name}' -> {path}")
