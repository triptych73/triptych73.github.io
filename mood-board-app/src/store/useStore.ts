import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

export type FileType = 'furniture' | 'decor' | 'upload';

export interface FloorItem {
    id: string;
    type: FileType;
    src: string; // URL or path
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex: number;
    rotation: number;
    label?: string;
}

export interface FloorData {
    id: number;
    name: string;
    items: FloorItem[];
}

interface AppState {
    currentFloor: number;
    floors: Record<number, FloorData>;
    assets: { type: FileType; src: string; label: string }[];

    // Actions
    setCurrentFloor: (floorId: number) => void;
    addItemToFloor: (floorId: number, item: Omit<FloorItem, 'id' | 'zIndex'>) => void;
    updateItem: (floorId: number, itemId: string, updates: Partial<FloorItem>) => void;
    removeItem: (floorId: number, itemId: string) => void;
    bringToFront: (floorId: number, itemId: string) => void;
    sendToBack: (floorId: number, itemId: string) => void;
    setFloorName: (floorId: number, name: string) => void;
    loadFloors: (floors: Record<number, FloorData>) => void;
}

const DEFAULT_FLOORS: Record<number, FloorData> = Array.from({ length: 8 }).reduce<Record<number, FloorData>>((acc, _, i) => {
    const names = ["Ground: Lobby", "Level 1: Guest", "Level 2: Kitchen", "Level 3: Living", "Levl 4: Bed 1", "Level 5: Bed 2", "Level 6: Master", "Level 8: Sky Room"];
    acc[i] = {
        id: i,
        name: names[i] || `Level ${i}`,
        items: []
    };
    return acc;
}, {});

export const useStore = create<AppState>()((set) => ({
    currentFloor: 0,
    floors: DEFAULT_FLOORS,
    assets: [
        { type: 'furniture', src: '/assets/sofa.png', label: 'Sofa' },
        { type: 'furniture', src: '/assets/table.png', label: 'Table' },
        { type: 'decor', src: '/assets/rug.png', label: 'Rug' },
        { type: 'decor', src: '/assets/lamp.png', label: 'Lamp' },
    ],

    setCurrentFloor: (floorId) => set({ currentFloor: floorId }),

    setFloorName: (floorId, name) => set((state) => ({
        floors: {
            ...state.floors,
            [floorId]: { ...state.floors[floorId], name }
        }
    })),

    addItemToFloor: (floorId, item) => set((state) => {
        const floor = state.floors[floorId];
        const maxZ = floor.items.length > 0 ? Math.max(...floor.items.map(i => i.zIndex)) : 0;
        const newItem: FloorItem = {
            ...item,
            id: nanoid(),
            zIndex: maxZ + 1,
        };
        return {
            floors: {
                ...state.floors,
                [floorId]: {
                    ...floor,
                    items: [...floor.items, newItem]
                }
            }
        };
    }),

    updateItem: (floorId, itemId, updates) => set((state) => ({
        floors: {
            ...state.floors,
            [floorId]: {
                ...state.floors[floorId],
                items: state.floors[floorId].items.map(i => i.id === itemId ? { ...i, ...updates } : i)
            }
        }
    })),

    removeItem: (floorId, itemId) => set((state) => ({
        floors: {
            ...state.floors,
            [floorId]: {
                ...state.floors[floorId],
                items: state.floors[floorId].items.filter(i => i.id !== itemId)
            }
        }
    })),

    bringToFront: (floorId, itemId) => set((state) => {
        const floor = state.floors[floorId];
        const maxZ = Math.max(...floor.items.map(i => i.zIndex), 0);
        return {
            floors: {
                ...state.floors,
                [floorId]: {
                    ...floor,
                    items: floor.items.map(i => i.id === itemId ? { ...i, zIndex: maxZ + 1 } : i)
                }
            }
        };
    }),

    sendToBack: (floorId, itemId) => set((state) => {
        const floor = state.floors[floorId];
        const minZ = Math.min(...floor.items.map(i => i.zIndex), 0);
        return {
            floors: {
                ...state.floors,
                [floorId]: {
                    ...floor,
                    items: floor.items.map(i => i.id === itemId ? { ...i, zIndex: minZ - 1 } : i)
                }
            }
        };
    }),

    loadFloors: (floors) => set({ floors }),
}));
