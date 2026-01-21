
import zipfile
import xml.etree.ElementTree as ET

INPUT_FILE = 'assets/docs/Drawing List v2.xlsm'
NS = {'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}

with zipfile.ZipFile(INPUT_FILE, 'r') as z:
    wb_xml = z.read('xl/workbook.xml')
    root = ET.fromstring(wb_xml)
    for sheet in root.findall('.//main:sheet', NS):
        print(f"Sheet: {sheet.get('name')} | Id: {sheet.get('sheetId')}")
