# Financial Strategy Engine

This folder contains the Financial Strategy application and its data processing scripts.

## Directory Structure

- **index.html**: The main application file (formerly `tax-strategy.html`). Open this in your browser.
- **data/**: Contains the extracted financial data (`extracted_data.json`).
  - *Note: This folder is git-ignored to protect sensitive information.*
- **scripts/**: Python scripts for data extraction.

## Updating Data

To refresh the data from the master Excel source (`assets/docs/STMS Costs Calculation incl Indexation 20230322 v2.xlsx`):

1. Open a terminal in `financial-strategy-engine/scripts/`
2. Run data extraction:
   ```bash
   python extract_data.py
   ```
   This reads the Excel file and updates `../data/extracted_data.json`.

3. Inject data into the App (Optional):
   ```bash
   python update_app.py
   ```
   *Note: This step is technically optional if the `index.html` loads the JSON dynamically, but currently the app has the data pre-injected for performance/portability. Run this if you change the data.*

## Security Note

The `data/` directory contains sensitive financial transaction history. Do not commit `extracted_data.json` to public repositories. The root `.gitignore` is configured to exclude `*.json` files.
