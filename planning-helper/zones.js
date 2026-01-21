
// Stores voxel coordinates for each section
// Format: { "sectionId": [ {x,y,z}, ... ] }
const zoneData = {
    "1": [
        // Example data for "Overall arrangement" - could be a large block
        { x: 4, y: 0, z: 4 }, { x: 5, y: 0, z: 4 }, { x: 4, y: 0, z: 5 }, { x: 5, y: 0, z: 5 }, // Level 1
        { x: 4, y: 8, z: 4 }, { x: 5, y: 8, z: 4 }, // Level 9
    ],
    "13": [
        // Example for Oculus Window L4
        { x: 2, y: 3, z: 0 }, { x: 2, y: 4, z: 0 }
    ]
};
