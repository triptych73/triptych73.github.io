Project Brief: St Mary Somerset – Digital Visualization Strategy

Asset Class: Grade I Listed Wren Tower (Shell & Core)
Target Audience: UHNW Tech Entrepreneur / West Coast Buyer
Concept: "The Interface Between 1695 and 2026"

1. Executive Summary

We are marketing a partially completed Christopher Wren tower not as a renovation project, but as a high-performance structural integration. The goal is to celebrate the raw state of the building as a primary feature, demonstrating technical confidence and architectural volume.

The marketing assets must move away from standard "beige luxury" renders and instead utilize a "Blade Runner meets The Crown" aesthetic: high contrast, data-driven, and structurally transparent.

2. Core Visual Concepts (Deliverables)

A. The "X-Ray" Overlay (Infrastructure Visibility)

Objective: Visualise the hidden value (structural reinforcement, fiber optics, elevator integration) without obscuring the heritage.

Visual Style: A "Technical Schematics" aesthetic. The stone walls are rendered with semi-transparency or point-cloud density.

Key Elements:

Steel Work: Highlighted in glowing Electric Blue.

Data/Fiber: Highlighted in Neon Amber.

Stone: Warm, semi-transparent grey/sepia.

Narrative: "State-of-the-art infrastructure, integrated invisibly."

B. The "Light-Field" Installation (Volume Definition)

Objective: Define the "missing 20%" (furniture, joinery, partitions) without imposing a specific interior design style or hiding the raw architecture.

Visual Style: Atmospheric, cinematic night shots. The raw space is dark, lit only by precise, high-intensity architectural lasers (amber or white).

The Effect: Lasers project 1:1 scale geometric wireframes onto the dust and stone, outlining where the kitchen island, staircase, and mezzanine will go.

Narrative: "The volume is defined. The finish is yours."

C. The Interactive Digital Twin (Browser-Based)

Format: A browser-based Unreal Engine 5 experience (Pixel Streaming). No downloads required.

Function: A "Time-Split" interface allowing the user to wipe between the current laser-scanned reality and the future architectural concept.

Lighting Engine: Must use UE5 Lumen (Global Illumination) to accurately simulate how light interacts with the irregular stone surfaces.

3. User Experience (UX) & Navigation

The digital experience should feel like a high-end simulation tool, not a standard virtual tour.

Navigation Logic

Z-Axis Sidebar: A permanent vertical wireframe section of the tower on the right of the screen. Users click a floor level to initiate a "high-speed flight" transition up the central void to that level.

Dual-Mode Movement:

Walk Mode: Eye-level physics (1.75m), grounded.

Drone Mode: Gravity-off, allowing inspection of high-level roof trusses and stonework.

Smart Waypoints: Floating geometric data nodes. Hovering reveals labels (e.g., "The Wren Skylight"); clicking glides the camera to the optimal cinematic angle.

Interaction Mechanics

The "Sunset Slider": A UI control allowing the user to manually drag the sun position from noon to dusk, watching real-time shadows lengthen across the stone.

The "Inspector" Key: Holding SPACEBAR (or long-press on touch) temporarily shifts the render mode from Photorealistic to Structural Wireframe, revealing systems behind the walls.

4. Visual Style Guide

Atmosphere: Moody, Chiaroscuro. Avoid flat, bright lighting. Let shadows dominate.

Texture: High contrast between Rough (Pitted Portland Stone, Ancient Brick, Dust) and Smooth (Blackened Steel, Glass, Light Beams).

Palette:

Primary: Sandstone, Charcoal, Deep Shadow.

Accents: Oxidized Copper, Burnished Brass, Electric Blue (Data layers).

Camera: Wide-angle, low perspectives (Hero shots) to emphasize ceiling height.

5. Technology Stack & Requirements

To achieve the required fidelity and functionality, the following stack is mandated:

Phase 1: Reality Capture (Input)

Lidar Scanning: Leica BLK2GO (Mobile SLAM) for rapid, motion-based capture of the irregular geometry.

Photogrammetry: High-resolution (60MP+) photography to capture the specific grain and patina of the stone.

Processing: RealityCapture to fuse Lidar and Photo data into a high-density mesh.

Phase 2: The Digital Asset (Processing)

BIM Core: Autodesk Revit. A fully parametric model of the renovation elements (Steel, Glass, HVAC).

Geometry Handling: Rhino.Inside.Revit for complex joinery or curved elements.

Phase 3: The Engine (Simulation)

Core Engine: Unreal Engine 5.4+.

Required Features:

Nanite: To render the raw scan data without polygon reduction.

Lumen: For real-time, dynamic global illumination.

Delivery: Pixel Streaming (via AWS g4dn instances or Arcware) to deliver high-fidelity graphics to web browsers/tablets.

6. Implementation Strategy

Data Acquisition: Full site scan (Lidar + Photo) to create the "Ground Truth" digital twin.

Structural Modelling: Build the intervention elements (Mezzanine, Lift, Stair) in Revit.

whereEngine Synthesis: Import Raw Scan (Nanite) and New Structure (Clean Geometry) into Unreal Engine 5.

Lighting & Logic: Setup Lumen lighting and program the "Slider" and "Inspector" interaction logic.

Deployment: Configure cloud streaming instances for browser access.



Strategic Vision:

Strategic Disposal Memorandum: St Mary Somerset Tower

Date: January 15, 2026
Subject: Strategic Exit & Positioning for St Mary Somerset (80% Complete)
Asset Class: Grade I Listed Christopher Wren Masterpiece
Location: City of London

1. Executive Summary

The objective is to dispose of St Mary Somerset on the open market at 80% completion. The core challenge is mitigating the stigma of a "stalled" project. The strategy is to pivot the narrative from "Incomplete" to "The Ultimate Shell & Core."

We are not selling a construction site; we are selling a "Curator’s Canvas." We offer the buyer the provenance of a 17th-century masterpiece with the heavy structural lifting complete, leaving them the "privilege" of the final 20% (Interiors & Fit-out).

2. Positioning & Narrative

The Hook: "We have restored the history; you create the legacy."
The Tagline: Your vision, wrapped in Wren’s history.

The Narrative Arc

A developer finishing this building would inevitably choose finishes that are 'market safe' but generic. A buyer of this stature does not want generic. They want a bathroom carved from a single block of Carrara marble or a smart-home system that rivals the Pentagon.

The 80% (Done): The headache. Planning, structural reinforcement, heritage restoration, steelwork.

The 20% (Left): The ego. Design, texture, technology, and personal expression.

Valuation Methodology

Do not use: A standard "Cost-to-Complete" discount model.
Recommended: Scarcity Premium + Replacement Cost.

Formula: Estimated Finished Value (Super Prime) – Cost of High Spec Fitout + Unicorn Asset Premium.

Rationale: There are no comparables for a private Wren tower. The price must be high enough to denote exclusivity. Low pricing signals distress.

3. Target Buyer Profile: "The Modern Medici"

Primary Demographic: American Tech Entrepreneur / West Coast VC / UHNW Anglophile.

Psychographics

Motivation: They own the penthouse in Hudson Yards and the ranch in Montana. They lack history. They seek a European "Trophy" that grants cultural gravity.

Pain Points: Zero patience for English Heritage bureaucracy or structural risk.

The Pitch: We treat the building as a Hardware Platform (Structure/History) ready for their Software (Interiors/Tech).

Outreach Strategy: The "Whisper Campaign"

No open listings (Rightmove/LoopNet).

Channels: Private Office divisions (Knight Frank/Savills), Art Consultancies (Sotheby’s), and direct approaches to Family Offices.

4. Red Flag Mitigation: The "White Glove" Handover

To alleviate anxiety regarding the "stopped works," we present a comprehensive "Golden File" in the Data Room:

Warranties: Full collateral warranties from the main contractor/professional team, assignable to the new owner.

Novation Rights: Pre-negotiated agreements with the current architect/contractor to remain on the project if desired.

The "Zoning Passport": A legal opinion letter and color-coded plan summarizing exactly what can/cannot be done under the Grade I listing.

Financial Baseline: A fixed-price quote from a high-end fitter for a "standard luxury" completion to anchor the budget.

5. Marketing Framework & Visualisation Strategy

The marketing material must not look like a property brochure. It should resemble a coffee table book on architecture and a high-tech briefing.

A. The "Digital Twin" Concept

We are building a Digital Twin to appeal to the tech-literate buyer. This consists of three layers:

The Truth Layer (LiDAR): Millimeter-perfect scans of the current shell.

The Systems Layer (BIM/X-Ray): Showing the "nervous system" (MEP/Data).

The Vision Layer (Unreal Engine 5): Photorealistic potential.

B. Creative Brief for Visualisation Agency

Use the following requirements to brief The Boundary, DBOX, or similar agencies.

Required Tech Stack:

Scanning: Matterport Pro3 or Leica BLK2GO (Must provide Point Cloud files).

Engine: Unreal Engine 5 (for real-time ray tracing/lighting).

AR Tool: Gamma AR or TwinBIM for on-site iPad overlays.

Deliverable 1: The "X-Ray" Overlay

Concept: "Iron Man HUD" aesthetic. Clean cyan/white lines overlaid on warm stone.

Goal: Make the stone walls semi-transparent to reveal the new steel reinforcement, elevator shafts, and fiber conduits.

Caption: “State-of-the-art infrastructure, invisible to the eye.”

Deliverable 2: The "Ghost" Perspectives

Technique: Camera Matching. High-res photography of the raw, dusty space overlaid with "ghosted" or wireframe furniture.

Contrast: A Poltrona Frau leather armchair sitting on a raw concrete sub-floor.

Message: You don’t need to cover the history; you just need to furnish it.

Deliverable 3: Interactive "Day in the Life" (Pixel Streaming)

A browser-based slider tool.

Left Swipe: Current Condition (Laser scan accuracy).

Right Swipe: "The Monastery" Concept (Ultra-modern, minimalist).

C. Visual Concepts to Develop

We must hallucinate the interior without promising it. Develop three distinct concept visions:

"The Monastery": Minimalist, brutalist, concrete, frameless glass. (For the Tech Purist).

"The Gentleman’s Club": Mahogany, library shelves, brass, dark leather. (For the Anglophile).

"The HQ": Executive office suite, boardroom, sleeping quarters in the spire. (For the Corporate Titan).

D. The "Zoning Passport" (2D)

A "Traffic Light" floorplan to visualize permissions:

Red: Grade I protected (Do not touch).

Amber: Reversible interventions (Joinery, floating floors).

Green: Free rein (Partitions, furniture).

6. Next Steps

Commission the "Digital Twin" package based on the brief above.

Assemble the "Golden File" (Legal/Warranties/Zoning).

Draft the "Teaser Email" for the private whisper campaign.