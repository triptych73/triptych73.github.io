import { create } from 'zustand'
import { pixelStreaming } from './services/PixelStreamingService';

export type Theme = 'Monastery' | 'Club' | 'HQ';
export type ViewMode = 'Cinematic' | 'XRay' | 'Drone';

interface AppState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    floor: number;
    setFloor: (floor: number) => void;
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    sunTime: number;
    setSunTime: (time: number) => void;
    showZoning: boolean;
    setShowZoning: (show: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
    theme: 'Monastery',
    setTheme: (theme) => {
        set({ theme });
        pixelStreaming.emitUIInteraction({ type: 'SetTheme', id: theme });
    },
    floor: 0,
    setFloor: (floor) => {
        set({ floor });
        pixelStreaming.emitUIInteraction({ type: 'Teleport', target: `Floor_${floor}` });
    },
    viewMode: 'Cinematic',
    setViewMode: (viewMode) => {
        set({ viewMode });
        pixelStreaming.emitUIInteraction({ type: 'SetViewMode', mode: viewMode });
    },
    sunTime: 0.75, // Afternoon sun
    setSunTime: (sunTime) => {
        set({ sunTime });
        // Throttle this in real app?
        pixelStreaming.emitUIInteraction({ type: 'SetSunPosition', value: sunTime });
    },
    showZoning: false,
    setShowZoning: (showZoning) => set({ showZoning }),
}))
