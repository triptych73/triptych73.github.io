import { create } from 'zustand';
import { snapToNearby } from '../utils/snap';

const useStore = create((set, get) => ({
    items: [],
    selection: [],
    snapEnabled: true, // Toggle for snapping

    addItem: (item) => set((state) => ({ items: [...state.items, item] })),

    removeItem: (id) => set((state) => ({
        items: state.items.filter((i) => i.id !== id),
        selection: state.selection.filter((sid) => sid !== id)
    })),

    /**
     * Update an item. If position is being updated and snap is enabled,
     * apply snapping logic.
     */
    updateItem: (id, updates) => {
        const state = get();
        let finalUpdates = { ...updates };

        // If position is being updated, apply snapping
        if (updates.position && state.snapEnabled) {
            const currentItem = state.items.find(i => i.id === id);
            if (currentItem) {
                const proposedItem = { ...currentItem, ...updates };
                const snappedPosition = snapToNearby(proposedItem, state.items, id);

                // Final safety check against NaN/Infinity
                if (Number.isFinite(snappedPosition[0]) && Number.isFinite(snappedPosition[2])) {
                    finalUpdates.position = snappedPosition;
                } else {
                    console.warn("Snap returned invalid coords, aborting position update", snappedPosition);
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
