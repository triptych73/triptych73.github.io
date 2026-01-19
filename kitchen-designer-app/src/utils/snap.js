/**
 * Snap Utility for Kitchen Designer
 * Provides edge-to-edge snapping for cabinets and walls.
 * REFINED: Enforces orthogonal overlap to prevent phantom/perpendicular snaps.
 */

const SNAP_THRESHOLD = 0.2; // 200mm snap distance (slightly generous to catch intent)

/**
 * Calculate the bounding box edges of an item in world space.
 * @param {Object} item - Item with position, width, depth, rotation
 * @returns {Object} { minX, maxX, minZ, maxZ }
 */
export function getItemBounds(item) {
    const pos = item.position || [0, 0, 0];
    const width = item.width || 0.6;
    const depth = item.depth || 0.6;

    // For simplicity, assume Y-axis rotation only (most common case in this app)
    const rotY = (item.rotation?.[1] || 0);

    // If rotation is ~90 or ~270 degrees, swap width and depth logic for bounds
    // Note: This is an AABB approximation. 
    const isRotated = Math.abs(Math.sin(rotY)) > 0.5;
    const effectiveWidth = isRotated ? depth : width;
    const effectiveDepth = isRotated ? width : depth;

    return {
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
 * Only snaps if the items are "aligned" (overlap) on the orthogonal axis.
 * @param {Object} movingItem - The item being moved (with proposed new position)
 * @param {Array} allItems - All items in the scene
 * @param {string} movingItemId - ID of the moving item (to exclude from targets)
 * @returns {Array} Snapped [x, y, z] position
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

        // We use the current moving Item's dimensions, but at the CANDIDATE position.
        // Initially, this is the mouse position. 
        // If we snap X, we update candidateX, so subsequent Z checks use the snapped X.
        const currentBounds = getHypotheticalBounds(candidateX, candidateZ);

        // --- X-AXIS SNAP ---
        // Requirement: Z-ranges must overlap significantly (to ensure we are "next to" the target)
        // Overlap logic: (MinA < MaxB) and (MaxA > MinB)
        const zOverlap = (currentBounds.minZ < targetBounds.maxZ - 0.05) && (currentBounds.maxZ > targetBounds.minZ + 0.05);

        if (zOverlap && !snappedX) {
            // Snap Right Edge to Target Left
            if (Math.abs(currentBounds.maxX - targetBounds.minX) < SNAP_THRESHOLD) {
                candidateX = targetBounds.minX - (currentBounds.maxX - currentBounds.minX) / 2;
                snappedX = true;
            }
            // Snap Left Edge to Target Right
            else if (Math.abs(currentBounds.minX - targetBounds.maxX) < SNAP_THRESHOLD) {
                candidateX = targetBounds.maxX + (currentBounds.maxX - currentBounds.minX) / 2;
                snappedX = true;
            }
        }

        // Update bounds with potentially new X for Z check
        const boundsAfterX = getHypotheticalBounds(candidateX, candidateZ);

        // --- Z-AXIS SNAP ---
        // Requirement: X-ranges must overlap significantly
        const xOverlap = (boundsAfterX.minX < targetBounds.maxX - 0.05) && (boundsAfterX.maxX > targetBounds.minX + 0.05);

        if (xOverlap && !snappedZ) {
            // Snap Front Edge to Target Back
            if (Math.abs(boundsAfterX.maxZ - targetBounds.minZ) < SNAP_THRESHOLD) {
                candidateZ = targetBounds.minZ - (boundsAfterX.maxZ - boundsAfterX.minZ) / 2;
                snappedZ = true;
            }
            // Snap Back Edge to Target Front
            else if (Math.abs(boundsAfterX.minZ - targetBounds.maxZ) < SNAP_THRESHOLD) {
                candidateZ = targetBounds.maxZ + (boundsAfterX.maxZ - boundsAfterX.minZ) / 2;
                snappedZ = true;
            }
        }
    }

    // NaN Guard
    if (isNaN(candidateX)) candidateX = movingItem.position[0];
    if (isNaN(candidateZ)) candidateZ = movingItem.position[2];

    return [candidateX, newPos[1], candidateZ];
}
