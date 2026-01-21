
import zipfile
import xml.etree.ElementTree as ET
import os
import shutil
import json

INPUT_FILE = 'assets/docs/Drawing List v2.xlsm'
OUTPUT_DIR = 'assets/data/thumbnails'
MAP_FILE = 'assets/data/thumbnail_map.json'

NS = {'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
      'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
      'xdr': 'http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing',
      'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}

def extract_thumbnails():
    if not os.path.exists(INPUT_FILE):
        print(f"Error: {INPUT_FILE} not found")
        return

    # Clean output
    if os.path.exists(OUTPUT_DIR):
        try:
            shutil.rmtree(OUTPUT_DIR)
        except:
            pass
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    image_map = {}

    with zipfile.ZipFile(INPUT_FILE, 'r') as z:
        # 1. Get Sheets from Workbook
        wb_xml = z.read('xl/workbook.xml')
        wb_root = ET.fromstring(wb_xml)
        
        sheets = {} # rId -> Name
        for sheet in wb_root.findall('.//main:sheet', NS):
            r_id = sheet.get(f'{{{NS["r"]}}}id')
            name = sheet.get('name')
            print(f"Workbook Sheet: {name} (rId: {r_id})")
            sheets[r_id] = name

        # 2. Get Sheet Paths from Workbook Rels
        wb_rels_xml = z.read('xl/_rels/workbook.xml.rels')
        rels_root = ET.fromstring(wb_rels_xml)
        
        sheet_paths = {} # Name -> Path
        for rel in rels_root.findall('.//{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
            r_id = rel.get('Id')
            target = rel.get('Target')
            if r_id in sheets:
                sheet_paths[sheets[r_id]] = f"xl/{target}"
        
        # 3. Process Each Sheet
        for sheet_name, sheet_path in sheet_paths.items():
            print(f"Processing Sheet: {sheet_name}")
            
            try:
                sheet_xml = z.read(sheet_path)
            except:
                continue
                
            sheet_root = ET.fromstring(sheet_xml)
            drawing = sheet_root.find('.//main:drawing', NS)
            
            if drawing is None:
                continue
            
            drawing_rid = drawing.get(f'{{{NS["r"]}}}id')
            
            # Get Sheet Rels to find Drawing Path
            sheet_dir = os.path.dirname(sheet_path)
            sheet_rels = f"{sheet_dir}/_rels/{os.path.basename(sheet_path)}.rels"
            
            if sheet_rels not in z.namelist():
                continue
            
            drawing_path = None
            rels_root = ET.fromstring(z.read(sheet_rels))
            for rel in rels_root.findall('.//{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
                if rel.get('Id') == drawing_rid:
                    target = rel.get('Target')
                    drawing_path = os.path.normpath(os.path.join(sheet_dir, target)).replace('\\', '/')
            
            if not drawing_path: 
                continue

            print(f"  Drawing XML: {drawing_path}")
            
            # 4. Parse Drawing XML
            try:
                drawing_xml = z.read(drawing_path)
            except:
                continue
            
            d_root = ET.fromstring(drawing_xml)
            
            # Map Images (Blips)
            drawing_dir = os.path.dirname(drawing_path)
            drawing_rels = f"{drawing_dir}/_rels/{os.path.basename(drawing_path)}.rels"
            
            blip_map = {} # rId -> target path
            if drawing_rels in z.namelist():
                d_rels_root = ET.fromstring(z.read(drawing_rels))
                for rel in d_rels_root.findall('.//{http://schemas.openxmlformats.org/package/2006/relationships}Relationship'):
                    blip_map[rel.get('Id')] = rel.get('Target')
            
            # Find Anchors (TwoCell and OneCell)
            if sheet_name not in image_map: image_map[sheet_name] = {}
            
            anchors = []
            anchors.extend(d_root.findall('.//xdr:twoCellAnchor', NS))
            anchors.extend(d_root.findall('.//xdr:oneCellAnchor', NS))
            
            print(f"  Anchors found: {len(anchors)}")

            for anchor in anchors:
                row_node = anchor.find('./xdr:from/xdr:row', NS)
                pic_node = anchor.find('./xdr:pic', NS)
                
                if row_node is not None and pic_node is not None:
                    row = int(row_node.text)
                    blip = pic_node.find('.//a:blip', NS)
                    if blip is not None:
                        embed = blip.get(f'{{{NS["r"]}}}embed')
                        if embed in blip_map:
                            img_target = blip_map[embed]
                            img_path = os.path.normpath(os.path.join(drawing_dir, img_target)).replace('\\', '/')
                            
                            # Save Image
                            ext = os.path.splitext(img_path)[1]
                            fname = f"{sheet_name}_row_{row}{ext}".replace(' ', '_').lower()
                            with open(os.path.join(OUTPUT_DIR, fname), 'wb') as f:
                                f.write(z.read(img_path))
                            
                            image_map[sheet_name][str(row)] = f"assets/data/thumbnails/{fname}"
            
    # Save Map
    with open(MAP_FILE, 'w') as f:
        json.dump(image_map, f, indent=2)
    print("Done.")

if __name__ == "__main__":
    extract_thumbnails()
