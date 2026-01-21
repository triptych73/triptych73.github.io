
import zipfile
import xml.etree.ElementTree as ET
import os
import shutil
import json

INPUT_FILE = 'assets/docs/Drawing List v2.xlsm'
OUTPUT_DIR = 'assets/data/thumbnails'
MAP_FILE = 'assets/data/thumbnail_map.json'

NS = {
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'xdr': 'http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'
}

def extract_thumbnails():
    if not os.path.exists(INPUT_FILE):
        print("Input file not found.")
        return

    if os.path.exists(OUTPUT_DIR):
        shutil.rmtree(OUTPUT_DIR)
    os.makedirs(OUTPUT_DIR)

    image_map = {} # { SheetName: { RowIndex: ImageFilename } }

    with zipfile.ZipFile(INPUT_FILE, 'r') as z:
        # 1. Parse Workbook to map Sheet Name -> Sheet ID -> Target XML
        print("Parsing workbook.xml...")
        wb_xml = z.read('xl/workbook.xml')
        wb_root = ET.fromstring(wb_xml)
        
        sheets = {} # rId -> name
        for sheet in wb_root.findall('.//main:sheet', NS):
            r_id = sheet.get(f'{{{NS["r"]}}}id')
            name = sheet.get('name')
            sheets[r_id] = name
            
        print(f"Found sheets: {list(sheets.values())}")

        # Map rId to Target XML path (Workbook Rels)
        wb_rels_xml = z.read('xl/_rels/workbook.xml.rels')
        wb_rels_root = ET.fromstring(wb_rels_xml)
        
        sheet_paths = {} # name -> zip_path
        for rel in wb_rels_root.findall('.//main:Relationship', {'main': 'http://schemas.openxmlformats.org/package/2006/relationships'}):
            r_id = rel.get('Id')
            target = rel.get('Target')
            if r_id in sheets:
                # Target is usually relative like "worksheets/sheet1.xml"
                path = f"xl/{target}"
                sheet_paths[sheets[r_id]] = path
        
        # 2. Iterate Sheets
        for sheet_name, sheet_path in sheet_paths.items():
            print(f"Processing {sheet_name} ({sheet_path})...")
            
            # Read Sheet XML to find Drawing rId
            try:
                sheet_xml = z.read(sheet_path)
            except KeyError:
                print(f"  Warning: Could not read {sheet_path}")
                continue
                
            sheet_root = ET.fromstring(sheet_xml)
            drawing = sheet_root.find('.//main:drawing', NS)
            
            if drawing is None:
                continue
                
            drawing_rid = drawing.get(f'{{{NS["r"]}}}id')
            
            # Find Drawing XML path from Sheet Rels
            sheet_dir = os.path.dirname(sheet_path)
            sheet_filename = os.path.basename(sheet_path)
            sheet_rels_path = f"{sheet_dir}/_rels/{sheet_filename}.rels"
            
            if sheet_rels_path not in z.namelist():
                continue
                
            sheet_rels_xml = z.read(sheet_rels_path)
            sheet_rels_root = ET.fromstring(sheet_rels_xml)
            
            drawing_path = None
            for rel in sheet_rels_root.findall('.//main:Relationship', {'main': 'http://schemas.openxmlformats.org/package/2006/relationships'}):
                if rel.get('Id') == drawing_rid:
                    target = rel.get('Target')
                    # Target is like "../drawings/drawing1.xml"
                    drawing_path = os.path.normpath(os.path.join(sheet_dir, target)).replace('\\', '/')
                    break
            
            if not drawing_path:
                continue

            print(f"  Found drawing XML: {drawing_path}")
            
            # 3. Parse Drawing XML for Anchors + Image rIds
            try:
                drawing_xml = z.read(drawing_path)
            except KeyError:
                 print(f"  Warning: Could not read {drawing_path}")
                 continue

            drawing_root = ET.fromstring(drawing_xml)
            
            # Map rIds in this drawing to Media files
            drawing_dir = os.path.dirname(drawing_path)
            drawing_filename = os.path.basename(drawing_path)
            drawing_rels_path = f"{drawing_dir}/_rels/{drawing_filename}.rels"
            
            image_targets = {}
            if drawing_rels_path in z.namelist():
                 drawing_rels_xml = z.read(drawing_rels_path)
                 rels_root = ET.fromstring(drawing_rels_xml)
                 for rel in rels_root.findall('.//main:Relationship', {'main': 'http://schemas.openxmlformats.org/package/2006/relationships'}):
                     image_targets[rel.get('Id')] = rel.get('Target')
            
            # Find anchors
            # Support twoCellAnchor
            count = 0
            if sheet_name not in image_map: image_map[sheet_name] = {}

            for anchor in drawing_root.findall('.//xdr:twoCellAnchor', NS):
                row_node = anchor.find('./xdr:from/xdr:row', NS)
                pic_node = anchor.find('./xdr:pic', NS)
                
                if row_node is not None and pic_node is not None:
                    row = int(row_node.text)
                    
                    blip = pic_node.find('.//a:blip', NS)
                    if blip is not None:
                        embed_id = blip.get(f'{{{NS["r"]}}}embed')
                        if embed_id in image_targets:
                            raw_target = image_targets[embed_id]
                            # raw_target might be "../media/image1.png"
                            media_path = os.path.normpath(os.path.join(drawing_dir, raw_target)).replace('\\', '/')
                            
                            # Extract file
                            ext = os.path.splitext(media_path)[1]
                            new_filename = f"{sheet_name}_row_{row}{ext}".replace(' ', '_').lower()
                            out_path = os.path.join(OUTPUT_DIR, new_filename)
                            
                            with open(out_path, 'wb') as f_out:
                                f_out.write(z.read(media_path))
                            
                            image_map[sheet_name][row] = f"assets/data/thumbnails/{new_filename}"
                            count += 1
            
            print(f"  Extracted {count} images for {sheet_name}")

    # Save Map
    with open(MAP_FILE, 'w') as f:
        json.dump(image_map, f, indent=2)
    print(f"Map saved to {MAP_FILE}")

if __name__ == "__main__":
    extract_thumbnails()
