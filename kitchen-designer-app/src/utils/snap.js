/**
 * Snap Utility for Kitchen Designer
 * Provides edge-to-edge snapping AND axis alignment for cabinets/walls.
 * REFINED: Increased threshold + Alignment Logic.
 */

const SNAP_THRESHOLD = 0.15; // 150mm requested by user

/**
 * Calculate the bounding box edges of an item in world space.
 * @param {Object} item - Item with position, width, depth, rotation
 * @returns {Object} { minX, maxX, minZ, maxZ }
 */
export function getItemBounds(item) {
    const pos = item.position || [0, 0, 0];
    const width = item.width || 0.6;
    const depth = item.depth || 0.6;

    // For simplicity, assume Y-axis rotation only
    const rotY = (item.rotation?.[1] || 0);
    const isRotated = Math.abs(Math.sin(rotY)) > 0.5;
    const effectiveWidth = isRotated ? depth : width;
    const effectiveDepth = isRotated ? width : depth;

    return {
        centerX: pos[0],
        centerZ: pos[2],
        minX: pos[0] - effectiveWidth / 2,
        maxX: pos[0] + effectiveWidth / 2,
        minZ: pos[2] - effectiveDepth / 2,
        maxZ: pos[2] + effectiveDepth / 2,
    };
}

/**
 * Check if two AABBs overlap.
 */
export function checkIntersection(boundsA, boundsB, padding = 0) {
    return (
        boundsA.minX < boundsB.maxX - padding &&
        boundsA.maxX > boundsB.minX + padding &&
        boundsA.minZ < boundsB.maxZ - padding &&
        boundsA.maxZ > boundsB.minZ + padding
    );
}

/**
 * Attempt to snap a moving item to other items.
 * Includes Edge Snapping AND Face Alignment.
 */
export function snapToNearby(movingItem, allItems, movingItemId) {
    const newPos = [...movingItem.position];
    let candidateX = newPos[0];
    let candidateZ = newPos[2];

    let snappedX = false;
    let snappedZ = false;

    // Helper to get bounds at a hypothetical position
    const getHypotheticalBounds = (x, z) => getItemBounds({ ...movingItem, position: [x, movingItem.position[1], z] });

    for (const target of allItems) {
        if (target.id === movingItemId) continue;

        const targetBounds = getItemBounds(target);

        // --- 1. Edge Snapping (Side-to-Side / Back-to-Front) ---
        // We use the mouse-driven candidates for checking
        const currentBounds = getHypotheticalBounds(candidateX, candidateZ);

        // Check Z-Overlap for X-Snapping (Side-by-Side)
        const zOverlap = (currentBounds.minZ < targetBounds.maxZ - 0.05) && (currentBounds.maxZ > targetBounds.minZ + 0.05);
        if (zOverlap && !snappedX) {
            // Snap Sides (Existing Logic)
            if (Math.abs(currentBounds.maxX - targetBounds.minX) < SNAP_THRESHOLD) {
                candidateX = targetBounds.minX - (currentBounds.maxX - currentBounds.minX) / 2;
                snappedX = true;
                // [NEW] Auto-Align Depth if sufficiently close
                // If we snap to the side, we likely want to align the Front or Back faces too.
                if (Math.abs(currentBounds.minZ - targetBounds.minZ) < SNAP_THRESHOLD) {
                    candidateZ = targetBounds.centerZ; // Align Centers (assuming same depth)
                    // If depths differ, we might want to align fronts/backs specifically, but center is a good baseline for same-sized units
                    snappedZ = true;
                }
            }
            else if (Math.abs(currentBounds.minX - targetBounds.maxX) < SNAP_THRESHOLD) {
                candidateX = targetBounds.maxX + (currentBounds.maxX - currentBounds.minX) / 2;
                snappedX = true;
                // [NEW] Auto-Align Depth
                if (Math.abs(currentBounds.minZ - targetBounds.minZ) < SNAP_THRESHOLD) {
                    candidateZ = targetBounds.centerZ;
                    snappedZ = true;
                }
            }
        }

        const boundsAfterX = getHypotheticalBounds(candidateX, candidateZ);

        // Check X-Overlap for Z-Snapping (Front-to-Back)
        const xOverlap = (boundsAfterX.minX < targetBounds.maxX - 0.05) && (boundsAfterX.maxX > targetBounds.minX + 0.05);
        if (xOverlap && !snappedZ) {
            // Snap Faces (Front-to-Back)
            if (Math.abs(boundsAfterX.maxZ - targetBounds.minZ) < SNAP_THRESHOLD) {
                candidateZ = targetBounds.minZ - (boundsAfterX.maxZ - boundsAfterX.minZ) / 2;
                snappedZ = true;
                // [NEW] Auto-Align Width
                if (Math.abs(boundsAfterX.minX - targetBounds.minX) < SNAP_THRESHOLD) {
                    candidateX = targetBounds.centerX;
                    snappedX = true;
                }
            }
            else if (Math.abs(boundsAfterX.minZ - targetBounds.maxZ) < SNAP_THRESHOLD) {
                candidateZ = targetBounds.maxZ + (boundsAfterX.maxZ - boundsAfterX.minZ) / 2;
                snappedZ = true;
                // [NEW] Auto-Align Width
                if (Math.abs(boundsAfterX.minX - targetBounds.minX) < SNAP_THRESHOLD) {
                    candidateX = targetBounds.centerX;
                    snappedX = true;
                }
            }
        }
    }

    // NaN Guard
    if (isNaN(candidateX)) candidateX = movingItem.position[0];
    if (isNaN(candidateZ)) candidateZ = movingItem.position[2];

    return [candidateX, newPos[1], candidateZ];
}
