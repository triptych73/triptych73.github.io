
// -- JSON Protocol Definition for St Mary Somerset Digital Twin --

// 1. Theme Selection
// Payload: { "type": "SetTheme", "id": "Monastery" | "Club" | "HQ" }

// 2. View Mode (X-Ray Overlay)
// Payload: { "type": "SetViewMode", "mode": "Cinematic" | "XRay" | "Drone" }

// 3. Time of Day (Sun Position)
// Payload: { "type": "SetSunPosition", "value": 0.0 to 1.0 }

// 4. Navigation (Teleport)
// Payload: { "type": "Teleport", "target": "L1_Mezzanine" }
