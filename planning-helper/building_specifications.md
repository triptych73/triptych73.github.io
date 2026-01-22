# BLENDER MCP CONSTRUCTION SPECIFICATION: TOWER 1407

**Status:** Ready for Construction (Revision 4 - Split Hull & Extension)  
**Target Engine:** Blender 4.x (Cycles/Eevee)  
**Reference:** 1407-image 02.tif + User Level Data

---

## 1. PROJECT INITIALIZATION

*   **Unit System:** Metric (Meters)
*   **Global Scale:** 1.0
*   **Orientation:** North is +Y.
*   **Origin:** World Origin (0,0,0) represents the center of the "Floor Plates" before splitting.

---

## 2. DIMENSIONAL CONSTRAINTS & Z-LEVELS

### A. Level Data (Z-Height)

| Level | Height (Z) | Notes |
| :--- | :--- | :--- |
| **Level 0 (Base)** | 0.0m | |
| **Level 1** | 2.3m | Extension Only |
| **Level 2** | 5.3m | Extension Only |
| **Level 3** | 7.3m | |
| **Level 4** | 11.0m | |
| **Level 5** | 14.7m | |
| **Level 6** | 18.4m | |
| **Level 7** | 22.1m | |
| **Extension Roof** | 21.5m | Parapet top ~22.0m |
| **Level 8** | 25.0m | |
| **Main Tower Roof Deck** | 31.0m | |
| **Total Height** | 36.576m | Finial Tip (120ft) |

### B. Wall Thickness

*   **Main Tower:** ~1.0m
*   **Extension:** ~0.4m

---

## 3. GEOMETRY BUILD STEPS

### PHASE A: THE MAIN TOWER SHELL

**Footprint:** 6.2m x 6.2m | **Wall Thickness:** 1.0m

#### Outer Shell Generation
1.  **Create Cube:** X=6.2m, Y=6.2m, Z=31.0m.
2.  **Position:** Centered on X=0, Y=0. Base at Z=0.
3.  **Taper:** Select top face (Z=31), scale X/Y by 0.95.

#### Internal Volume (Hollowing)
1.  **Create a "Boolean Negative" Cube.**
2.  **Dimensions:** X=4.2m, Y=4.2m (Derived from 6.2 - 2*1.0m walls).
3.  **Height:** Extend from Z=0 to Z=31m.
4.  **Action:** Boolean Difference (Cut the inside out to create 1m thick walls).

#### Tower Fenestration (Alcoves)
*   **Levels:** 3, 4, 5, 6, 7, 8.
*   **Action:** Cut window alcoves that penetrate the 1m wall thickness.
*   **Note:** Ensure alcove base aligns with Z-levels.

### PHASE B: THE NORTH EXTENSION

**Footprint:** 6.2m x 1.6m | **Location:** North of Tower

#### Placement
*   **Tower Back Face:** Y = +3.1m.
*   **Gap (Slot Window):** 0.4m (Y range: +3.1m to +3.5m).
*   **Extension Start:** Y = +3.5m.
*   **Extension End:** Y = +5.1m (1.6m depth).

#### Extension Shell
1.  **Create Cube:** X=6.2m, Y=1.6m, Z=22.0m.
2.  **Position:** X=0, Center Y = +4.3m.
3.  **Hollowing:** Create internal boolean to leave 0.4m thick walls.

#### The Slot Windows (Connector)
*   **In the 0.4m gap (Y=3.1 to 3.5):** Create vertical glass panes running from Z=0 to Z=22m on the Left and Right sides.

### PHASE C: FLOOR PLATES (CENTRAL CORE)

> **Note:** These remain at X=0 during the split.

#### Generation Loop
**For each Level (0, 3, 4, 5, 6, 7, 8):**
*   **Create Tower Floor Plate:** 6.0m x 6.0m (Fits inside walls with slight tolerance).
*   **Thickness:** 0.3m.
*   **Z-Location:** Match Level Height list.

#### Extension Floors
**For Levels 0, 1, 2, 3, 4, 5, 6, 7:**
*   **Create Extension Floor Plate:** 6.0m x 1.4m.
*   **Position:** Inside Extension shell (Y offset).

#### Window Alcove Floors
*   **Action:** Extrude floor plates into the window alcoves where they align with the levels.

### PHASE D: TOWER DETAILING (Review)

*   **Base:** Chamfer/Plinth at Level 0.
*   **Roof:** At Z=31m, create the flat roof deck inside the parapet.
*   **Finials & Spire:**
    *   Construct Finials starting from Z=31m parapet level.
    *   Tips extend to Z=36.576m.
    *   *(Refer to Rev 3 geometry for Finial specifics).*

---

## 4. PHASE H: THE "SPLIT" (CRITICAL OPERATION)

> **Important:** Once the model is fully built, textured, and detailed, perform this split.

### Object Separation
1.  Separate the **Tower Walls**, **Extension Walls**, **Roof**, and **Finials** into two distinct groups:
    *   **WEST_HALF** (Negative X)
    *   **EAST_HALF** (Positive X)
2.  **DO NOT** include the Floor Plates in these groups.

### Bisect/Slice
1.  Use a Boolean Slice or Bisect tool along the Y-Axis (X=0).
2.  Close the mesh holes (Fill) on the cut surface to verify "Solid" walls.

### The Move (Explosion)
1.  **Select WEST_HALF objects.**
    *   Translate: X = -6.0m.
2.  **Select EAST_HALF objects.**
    *   Translate: X = +6.0m.

### Result Validation
*   **Center:** Floating Floor Plates at X=0.
*   **Gap:** 12.0m empty space between the two hull halves.
*   **Visual:** Should look like a cross-section or exploded view diagram.

---

## 5. FINAL MATERIAL ASSIGNMENTS

*   **Cut Surface (Where split happens):** `MAT_Section_Red` (or technical white) to highlight the wall thickness.
*   **Exterior Stone:** `MAT_Stone_Main`.
*   **Floors:** `MAT_Concrete_Floor`.
*   **Glass:** `MAT_Glass_Slot` (For the connecting gap windows).