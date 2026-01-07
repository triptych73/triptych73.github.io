# Development Pipeline & Roadmap

This document outlines the workflow for developing, testing, and deploying the St. Mary Somerset Gantt App, and lists planned future improvements.

## Development Workflow ("The Pipeline")

### 1. Setup & Run Locally
To start the local development server:
```bash
cd gantt-app
npm install  # (First time only)
npm run dev
```
Access the app at `http://localhost:5173/`.

### 2. Making Changes
-   **Source Code**: Edit files in `src/`.
-   **Styling**: Update `src/index.css` or use Tailwind classes directly.
-   **Components**: Add new React components in `src/components/Gantt/`.

### 3. Testing (Manual)
Before building, verify:
-   [ ] **Drag & Drop**: Can you move tasks? Do dependencies constrain movement?
-   [ ] **Editing**: Does double-clicking open the modal? Do inputs validate?
-   [ ] **Undo/Redo**: Does Ctrl+Z (or the button) revert changes correctly?
-   [ ] **Responsiveness**: Check mobile view toggles on small screens.

### 4. Build for Production
Compiles the app into static assets.
```bash
npm run build
```
This creates a `dist` folder.

### 5. Deployment
To deploy to GitHub Pages (served from `/gantt` folder):
```bash
# 1. Copy build to deployment folder (Windows)
xcopy dist ..\gantt /E /H /Y /I

# 2. Commit and Push
cd ..
git add .
git commit -m "feat: Description of changes"
git push
```
*Wait ~1 minute for GitHub Pages to update.*

---

## Roadmap (Backlog)

### High Priority
- [x] **Undo/Redo**: Basic history stack implemented.
- [ ] **Zoom Levels**: Toggle between Day/Week/Month/Year view scales dynamically.
- [ ] **Task Grouping**: Ability to collapse/expand groups of tasks.
- [ ] **Export to PDF**: Generate a printable report of the Gantt chart.

### Medium Priority
- [ ] **Dependency Auto-Layout**: Button to automatically arrange tasks based on dependencies (Critical Path Method).
- [ ] **Resource Assignment**: Assign people/teams to specific tasks.
- [ ] **Milestone Styling**: Distinct visual treatment for 0-day milestones (Diamond shape).

### Low Priority / Nice-to-Have
- [ ] **Dark/Light Mode Toggle**: Currently fixed to Dark Mode.
- [ ] **Search/Filter**: Find tasks by name.
- [ ] **Keyboard Shortcuts**: Ctrl+Z (Undo), Delete backspace (Remove task).
