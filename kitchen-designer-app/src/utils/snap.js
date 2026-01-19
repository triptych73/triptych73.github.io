/**
 * Snap Utility for Kitchen Designer
 * Provides edge-to-edge snapping for cabinets and walls.
 */

const SNAP_THRESHOLD = 0.1; // 100mm snap distance

/**
 * Calculate the bounding box edges of an item in world space.
 * @param {Object} item - Item with position, width, depth, rotation
 * @returns {Object} { minX, maxX, minZ, maxZ }
 */
export function getItemBounds(item) {
    const pos = item.position || [0, 0, 0];
    const width = item.width || 0.6;
    const depth = item.depth || 0.6;

    // For simplicity, assume Y-axis rotation only (most common case)
    const rotY = (item.rotation?.[1] || 0);

    // If rotation is ~90 or ~270 degrees, swap width and depth
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
 * Attempt to snap a moving item to other items.
 * @param {Object} movingItem - The item being moved (with proposed new position)
 * @param {Array} allItems - All items in the scene
 * @param {string} movingItemId - ID of the moving item (to exclude from targets)
 * @returns {Array} Snapped [x, y, z] position
 */
export function snapToNearby(movingItem, allItems, movingItemId) {
    const newPos = [...movingItem.position];
    const movingBounds = getItemBounds(movingItem);

    let snappedX = false;
    let snappedZ = false;

    for (const target of allItems) {
        if (target.id === movingItemId) continue;

        const targetBounds = getItemBounds(target);

        // --- X-axis snapping (left/right edges) ---
        if (!snappedX) {
            // Moving item's right edge -> Target's left edge
            const rightToLeft = Math.abs(movingBounds.maxX - targetBounds.minX);
            if (rightToLeft < SNAP_THRESHOLD) {
                newPos[0] = targetBounds.minX - (movingItem.width || 0.6) / 2;
                snappedX = true;
            }

            // Moving item's left edge -> Target's right edge
            const leftToRight = Math.abs(movingBounds.minX - targetBounds.maxX);
            if (leftToRight < SNAP_THRESHOLD) {
                newPos[0] = targetBounds.maxX + (movingItem.width || 0.6) / 2;
                snappedX = true;
            }
        }

        // --- Z-axis snapping (front/back edges) ---
        if (!snappedZ) {
            // Moving item's front (maxZ) -> Target's back (minZ)
            const frontToBack = Math.abs(movingBounds.maxZ - targetBounds.minZ);
            if (frontToBack < SNAP_THRESHOLD) {
                newPos[2] = targetBounds.minZ - (movingItem.depth || 0.6) / 2;
                snappedZ = true;
            }

            // Moving item's back (minZ) -> Target's front (maxZ)
            const backToFront = Math.abs(movingBounds.minZ - targetBounds.maxZ);
            if (backToFront < SNAP_THRESHOLD) {
                newPos[2] = targetBounds.maxZ + (movingItem.depth || 0.6) / 2;
                snappedZ = true;
            }
        }

        if (snappedX && snappedZ) break; // Early exit if fully snapped
    }

    // NaN Guard
    if (isNaN(newPos[0])) newPos[0] = movingItem.position[0];
    if (isNaN(newPos[2])) newPos[2] = movingItem.position[2];

    return newPos;
}
