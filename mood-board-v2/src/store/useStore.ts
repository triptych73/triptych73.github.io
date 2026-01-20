import { create } from 'zustand';
import { debounce } from "@/lib/utils";

export interface Item {
    id: string;
    type: 'furniture' | 'decor';
    src: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    zIndex: number;
    label?: string;
}

export interface FloorData {
    id: string;
    name: string;
    items: Item[];
}

interface StoreState {
    currentFloorId: string;
    floors: FloorData[];
    setCurrentFloor: (id: string) => void;
    addItem: (floorId: string, item: Item) => void;
    updateItem: (floorId: string, itemId: string, updates: Partial<Item>) => void;
    loadFloors: () => Promise<void>;

    // Library
    libraryItems: any[]; // Using any for simplicity now, should check AssetLibrary types
    addLibraryItem: (item: any) => void;
    updateLibraryItem: (id: string, updates: any) => void;
    deleteLibraryItem: (id: string) => void;
    moveLibraryItemCategory: (id: string, newCategory: string) => void;

    // Item Actions
    deleteItem: (floorId: string, itemId: string) => void;
    bringToFront: (floorId: string, itemId: string) => void;
    sendToBack: (floorId: string, itemId: string) => void;
}

// Mock Data for Initial State
// Mock Data for Initial State
const INITIAL_FLOORS: FloorData[] = [
    { id: 'terrace', name: 'Terrace', items: [] },
    { id: 'level-9', name: 'Level 9 Master Bedroom', items: [] },
    { id: 'level-8', name: 'Level 8 Dining', items: [] },
    { id: 'level-7', name: 'Level 7 Kitchen', items: [] },
    { id: 'level-6', name: 'Level 6 Sitting Room', items: [] },
    { id: 'level-5', name: 'Level 5 Bedroom 2', items: [] },
    { id: 'level-4', name: 'Level 4 Bedroom 1', items: [] },
    { id: 'level-2', name: 'Level 2 Entrance', items: [] },
    { id: 'level-1', name: 'Level 1 Kitchenette/Library', items: [] },
    { id: 'garden', name: 'Garden', items: [] },
];

export const useStore = create<StoreState>((set) => ({
    currentFloorId: 'level-6', // Start at Sitting Room
    floors: INITIAL_FLOORS,

    setCurrentFloor: (id) => set({ currentFloorId: id }),

    addItem: (floorId, item) => set((state) => ({
        floors: state.floors.map(f =>
            f.id === floorId
                ? { ...f, items: [...f.items, item] }
                : f
        )
    })),

    updateItem: (floorId, itemId, updates) => set((state) => ({
        floors: state.floors.map(f =>
            f.id === floorId
                ? {
                    ...f,
                    items: f.items.map(i => i.id === itemId ? { ...i, ...updates } : i)
                }
                : f
        )
    })),

    // Persistence Actions
    loadFloors: async () => {
        const { loadFloorsFromFireStore } = await import("@/lib/firebase");
        const savedData = await loadFloorsFromFireStore();

        if (savedData) {
            // Check for floors
            if (savedData.floors && savedData.floors.length > 0) {
                // Schema Check: If saved data doesn't have 'terrace', it's old data. Reset it.
                const hasTerrace = savedData.floors.some((f: any) => f.id === 'terrace');

                if (hasTerrace) {
                    // Fix Order: Sort based on INITIAL_FLOORS order
                    const orderMap = new Map(INITIAL_FLOORS.map((f, i) => [f.id, i]));
                    const sortedFloors = [...savedData.floors].sort((a, b) => {
                        const indexA = orderMap.get(a.id) ?? 999;
                        const indexB = orderMap.get(b.id) ?? 999;
                        return indexA - indexB;
                    });

                    set(state => ({ ...state, floors: sortedFloors }));
                    console.log("Floors loaded and sorted from Firestore");
                } else {
                    console.warn("Old data detected. Resetting to new floor plan (Terrace -> Garden).");
                }
            }

            // Check for library items
            if (savedData.libraryItems && savedData.libraryItems.length > 0) {
                set(state => ({ ...state, libraryItems: savedData.libraryItems }));
                console.log("Library loaded from Firestore");
            }
        }
    },

    // Item Management
    deleteItem: (floorId, itemId) => set((state) => ({
        floors: state.floors.map(f =>
            f.id === floorId
                ? { ...f, items: f.items.filter(i => i.id !== itemId) }
                : f
        )
    })),

    bringToFront: (floorId, itemId) => set((state) => {
        const floor = state.floors.find(f => f.id === floorId);
        if (!floor) return state;
        const maxZ = Math.max(...floor.items.map(i => i.zIndex), 0);
        return {
            floors: state.floors.map(f =>
                f.id === floorId
                    ? {
                        ...f,
                        items: f.items.map(i => i.id === itemId ? { ...i, zIndex: maxZ + 1 } : i)
                    }
                    : f
            )
        };
    }),

    sendToBack: (floorId, itemId) => set((state) => {
        const floor = state.floors.find(f => f.id === floorId);
        if (!floor) return state;
        const minZ = Math.min(...floor.items.map(i => i.zIndex), 0);
        return {
            floors: state.floors.map(f =>
                f.id === floorId
                    ? {
                        ...f,
                        items: f.items.map(i => i.id === itemId ? { ...i, zIndex: minZ - 1 } : i)
                    }
                    : f
            )
        };
    }),

    // Library
    libraryItems: [],
    addLibraryItem: (item) => set((state) => ({
        libraryItems: [item, ...state.libraryItems]
    })),
    updateLibraryItem: (id, updates) => set((state) => ({
        libraryItems: state.libraryItems.map(item =>
            item.id === id ? { ...item, ...updates } : item
        )
    })),
    deleteLibraryItem: (id) => set((state) => ({
        libraryItems: state.libraryItems.filter(item => item.id !== id)
    })),
    moveLibraryItemCategory: (id, newCategory) => set((state) => ({
        libraryItems: state.libraryItems.map(item =>
            item.id === id ? { ...item, type: newCategory } : item
        )
    })),
}));

// Auto-Save Subscription
// Auto-Save Subscription
// import { debounce } from "@/lib/utils"; (Moved to top)

let saveTimeout: NodeJS.Timeout;

useStore.subscribe((state) => {
    // Debounce save (2 seconds)
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(async () => {
        const { saveFloorsToFireStore } = await import("@/lib/firebase");
        console.log("Auto-saving data...");
        saveFloorsToFireStore({
            floors: state.floors,
            libraryItems: state.libraryItems
        });
    }, 2000);
});
