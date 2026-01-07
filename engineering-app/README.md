# Structural Stair Solver (Refactored)

A modern, type-safe React application for structural staircase analysis. This project replaces the legacy `engineering.html` single-file proof of concept.

## 🚀 Development Pipeline

This project uses a modern web development pipeline:

-   **Framework**: React 18 + TypeScript (Vite)
-   **Styling**: Tailwind CSS v4
-   **Visualization**: Three.js
-   **Testing**: Vitest
-   **Linting**: ESLint

### 1. Installation

```bash
npm install
```

### 2. Development Server

Start the local hot-reloading server:

```bash
npm run dev
```

### 3. Verification & Testing

This project includes a dedicated "Physics Core" (`src/core/physics.ts`) that is isolated from the UI. This allows for rigorous unit testing of the engineering formulas.

**Run Unit Tests:**

```bash
npm test
# or with UI
npx vitest --ui
```

### 4. Production Build

Compile the application for deployment (e.g., GitHub Pages):

```bash
npm run build
```

## 🏗️ Architecture

```
src/
├── core/
│   ├── physics.ts       # Pure engineering logic (No UI dependencies)
│   └── physics.test.ts  # Validation tests for physics
├── components/
│   ├── Visualizer.tsx   # Three.js 3D Viewport
│   ├── InputPanel.tsx   # Interactive parameter inputs
│   └── ResultsPanel.tsx # Live analysis matrix
└── App.tsx              # Main integration
```

## 📐 Engineering Notes

The current physics model uses **Simplified Beam Theory** with efficiency factors for folded plate action.
Future improvements should implement a **Matrix Stiffness Method (MSM)** solver in `src/core` to replace the simplified formulas for greater accuracy.
