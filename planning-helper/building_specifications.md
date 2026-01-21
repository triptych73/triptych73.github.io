# Building Model Specifications

## Overview
This document outlines the geometric and configuration details for the "Cracked Open" 3D building model used in the Planning Application Helper.

## 1. Main Tower
*   **Width:** 6.2m
*   **Depth:** 6.2m
*   **Height:** 36.0m
*   **Wall Thickness:** 1.0m
*   **Structure:** Hollow shell, split vertically into Left and Right halves.

## 2. Extension (Rear)
*   **Width:** 6.2m
*   **Depth:** 2.0m
*   **Height:** 16.0m
*   **Wall Thickness:** 0.5m
*   **Position:** Attached to the Front face (y = -3.1) of the Tower.
*   **Structure:** Hollow shell, split vertically and attached to the respective Tower halves.

## 3. Internal Floor Levels (Static Core)
These floors remain static in the center while the shell opens.
*   **Levels (Z-height):**
    *   Ground: 0.0m
    *   Level 1: 7.3m
    *   Level 2: 11.0m
    *   Level 3: 14.7m
    *   Level 4: 18.4m
    *   Level 5: 22.1m
    *   Level 6: 26.0m
*   **Dimensions:** ~6.0m x 6.0m
*   **Thickness:** 0.2m

## 4. Visualization Logic ("Cracked Open")
*   **Metaphor:** "Open Book" / "Cracked Egg"
*   **Split Axis:** Central Y-Z plane (x=0).
*   **Offset:** The Left and Right shell halves are moved linearly apart.
    *   **Linear Offset:** 3.0m per side (Total Gap: 6.0m).
*   **Rotation:** Each half rotates around a local pivot point near the "spine" (rear inner corner).
    *   **Rotation Angle:** 35 degrees.
    *   **Left Half:** Rotates -35° (Counter-Clockwise).
    *   **Right Half:** Rotates +35° (Clockwise).

## 5. Components & Materials
*   **Shell (Walls):** `Opaque Stone` (Warm Grey: #CCBFB3)
*   **Floors:** `Floor` (Matte Grey: #808080)
*   **Glass:** `Glass` (Blue-Tinted Transparent: #1A3380, Alpha 0.3)

## 6. Generated Assets
*   **Format:** GLB (Binary glTF)
*   **File Path:** `/planning-helper/assets/building.glb`
*   **Generation Script:** `/planning-helper/generate_building.py`
