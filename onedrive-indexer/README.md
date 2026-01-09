# OneDrive Indexer Web App 📂

A powerful Streamlit web application that indexes files (Word, Excel, PDF) directly from your OneDrive and converts them into LLM-ready Markdown.

## ✨ Features
*   **Cloud-Native**: Streams files directly from OneDrive memory (no local disk storage needed).
*   **File Explorer**: Navigate your OneDrive folders with an intuitive point-and-click interface.
*   **Smart Conversion**: Automatically converts `.docx`, `.xlsx`, and `.pdf` to clean Markdown.
*   **Secure**: Uses Microsoft OAuth 2.0 (Azure AD) for authentication.
*   **Auto-Config**: Automatically loads credentials from a `.env` file.

## 🚀 Setup Instructions

### 1. Prerequisites
- Python 3.8+
- A Microsoft Azure account (free tier is fine)

### 2. Azure App Registration
To allow this app to access your OneDrive, you must register it in the Microsoft Azure Portal:

1.  Go to the [Azure Portal](https://portal.azure.com/) and search for "App registrations".
2.  Click **New registration**.
    *   **Name**: `OneDrive Indexer` (or any name you prefer).
    *   **Supported account types**: `Accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)`.
    *   **Redirect URI**: Select `Web` and enter `http://localhost:8501`.
3.  Click **Register**.
4.  Copy the **Application (client) ID** and save it.
5.  Under **Certificates & secrets** (in the left menu), create a **New client secret**.
    *   Copy the **Value** (not the Secret ID) immediately.
6.  Under **API permissions** (in the left menu):
    *   **Add a permission** -> **Microsoft Graph** -> **Delegated permissions**.
    *   Search for and add: `Files.Read.All` and `User.Read`.
    *   Click **Add permissions**.

### 3. Configuration
Create a `.env` file in the project root directory. This will be automatically loaded by the app.

```ini
CLIENT_ID=your_client_id_here
CLIENT_SECRET=your_client_secret_here
TENANT_ID=common
REDIRECT_URI=http://localhost:8501
```

### 4. Running the App
1.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
2.  Run the app:
    ```bash
    streamlit run app.py
    ```

## 🛠️ Usage
1.  **Login**: Click "Sign in with Microsoft" and authorize the app.
2.  **Navigate**: Use the File Explorer to browse your OneDrive folders. 
    *   Click folders 📁 to open them.
    *   Use the "⬅️ Back" button or Breadcrumbs to navigate up.
3.  **Index**: When you are in the desired folder, click **🚀 Index This Folder** in the sidebar actions panel.
4.  **Download**: Once complete, download the ZIP file containing your Markdown documents.
