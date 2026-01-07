# Deployment Guide: St. Mary Somerset Gantt App

This app is designed to be hosted on **GitHub Pages**. The repository structure is:
- `/gantt-app`: The React source code.
- `/gantt`: The compiled/built production code (what your users see).

## How it works

1.  **Development**: You work in the `gantt-app` folder.
2.  **Building**: You run `npm run build` (or the `build` script in `package.json`).
3.  **Deploying**: This build script compiles the React code into static HTML/CSS/JS and places it in the `/gantt` folder at the root of your repo.
4.  **Hosting**: GitHub Pages serves the contents of your repo. Users access the app at `https://triptych73.github.io/gantt/`.

## Manual Deployment Steps

Whenever you make changes to the source code:

1.  **Build the App**:
    Open a terminal in `gantt-app` and run:
    ```bash
    npm run build
    xcopy dist ..\gantt /E /H /Y
    ```
    *(Note: use `cp -r` or similar on Mac/Linux. On Windows, `xcopy` works well.)*

2.  **Commit Changes**:
    Go to the repo root and commit both the source and the built files.
    ```bash
    cd ..
    git add .
    git commit -m "Update Gantt app"
    git push
    ```

## Firebase Database
The app uses Google Firebase for the database.
-   **No "Build" Required**: The database lives in the cloud. You don't need to deploy anything for the database itself.
-   **Persistence**: The connection logic is baked into the app. When you deploy new code, it simply connects to the same existing database.
-   **Security**: Currently configured for **Anonymous Authentication**. This means anyone visiting the site can edit the data. For a private project, this is usually acceptable during development.

## Troubleshooting
-   **Blank Page?** Ensure `vite.config.js` has `base: '/gantt/'` set correctly.
-   **Data Not Loading?** Check if `triptych73.github.io` is authorized in your Firebase Console (Authentication -> Settings -> Authorized Domains).
