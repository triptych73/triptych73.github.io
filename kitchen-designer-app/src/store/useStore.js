import { create } from 'zustand';
import { snapToNearby, getItemBounds, checkIntersection } from '../utils/snap';

const useStore = create((set, get) => ({
    items: [
        {
            id: 'init-1',
            type: 'base',
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            width: 0.6,
            height: 0.87,
            depth: 0.6
        }
    ],
    selection: [],
    snapEnabled: true,

    addItem: (item) => set((state) => ({ items: [...state.items, item] })),

    removeItem: (id) => set((state) => ({
        items: state.items.filter((i) => i.id !== id),
        selection: state.selection.filter((sid) => sid !== id)
    })),

    updateItem: (id, updates) => {
        const state = get();
        let finalUpdates = { ...updates };

        // Position & Snap Logic
        if (updates.position) {
            const currentItem = state.items.find(i => i.id === id);
            if (currentItem) {
                // 1. Calculate Proposed Position (Raw Input)
                let proposedItem = { ...currentItem, ...updates };

                // 2. Apply Snap (if enabled)
                if (state.snapEnabled) {
                    const snappedPos = snapToNearby(proposedItem, state.items, id);
                    if (Number.isFinite(snappedPos[0]) && Number.isFinite(snappedPos[2])) {
                        proposedItem.position = snappedPos;
                        finalUpdates.position = snappedPos;
                    }
                }

                // 3. Collision Detection
                // Check if the FINAL proposed position overlaps with any other item
                const proposedBounds = getItemBounds(proposedItem);
                const isColliding = state.items.some(other => {
                    if (other.id === id) return false;
                    const otherBounds = getItemBounds(other);
                    // Padding of -0.01 allows items to *touch* exactly without triggering collision
                    // But we must catch actual penetration.
                    return checkIntersection(proposedBounds, otherBounds, 0.01);
                });

                if (isColliding) {
                    // If colliding, what do we do?
                    // Option A: Reject the update (stay at previous pos).
                    // This feels like hitting a wall.
                    // Option B: Allow it but color it red? (Requires UI state).
                    // User asked to prevent "subsuming" (overlapping).
                    // Rejecting the update is the most robust "solid object" feel.
                    // HOWEVER, rejecting drag updates can feel laggy if the user fights the wall.
                    // The best simple fix: Don't update position.

                    // We just return, ignoring the update.
                    // The item will stick to the last valid position until mouse moves to a valid spot.
                    return;
                }
            }
        }

        set((state) => ({
            items: state.items.map((i) => (i.id === id ? { ...i, ...finalUpdates } : i)),
        }));
    },

    setSelection: (ids) => set({ selection: ids }),
    clearSelection: () => set({ selection: [] }),
    toggleSnap: () => set((state) => ({ snapEnabled: !state.snapEnabled })),
}));

export default useStore;
