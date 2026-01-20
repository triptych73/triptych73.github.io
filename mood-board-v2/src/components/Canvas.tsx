"use client";

import { useDroppable } from "@dnd-kit/core";
import { useStore } from "@/store/useStore";
import { DraggableItem } from "./DraggableItem";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Canvas() {
    const { isOver, setNodeRef } = useDroppable({
        id: 'canvas-droppable',
    });

    const { floors, currentFloorId, addItem, addLibraryItem } = useStore();
    const currentFloor = floors.find(f => f.id === currentFloorId);
    const items = currentFloor?.items || [];

    const [selectedId, setSelectedId] = useState<string | null>(null);

    // Infinite Canvas State
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [isPanning, setIsPanning] = useState(false);

    // Zoom Handler
    const handleWheel = (e: React.WheelEvent) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const zoomSensitivity = 0.001;
            const newZoom = Math.min(Math.max(0.1, zoom - e.deltaY * zoomSensitivity), 5);
            setZoom(newZoom);
        } else {
            // Optional: Pan with wheel if not holding ctrl? 
            // Standard is Wheel=Scroll/PanY, Shift+Wheel=PanX. 
            // But let's stick to Zoom for now if requested "separate to main page"
            // Actually, usually users want Wheel = Zoom in CAD tools.
            // If they just said "not zoomable", let's make Wheel = Zoom.
            const zoomSensitivity = 0.0005;
            const newZoom = Math.min(Math.max(0.1, zoom - e.deltaY * zoomSensitivity), 5);
            setZoom(newZoom);
        }
    };

    // Pan Handlers
    const handlePointerDown = (e: React.PointerEvent) => {
        // Middle mouse or Space+Click (simulated by checking if we are not clicking an item)
        if (e.button === 1 || e.buttons === 4) {
            e.preventDefault();
            setIsPanning(true);
        } else {
            setSelectedId(null);
        }
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (isPanning) {
            setPan(p => ({ x: p.x + e.movementX, y: p.y + e.movementY }));
        }
    };

    const handlePointerUp = () => {
        setIsPanning(false);
    };

    // --- File Handling (Drop & Paste) ---
    const handleFileProcess = async (file: File, clientX: number, clientY: number) => {
        if (!file.type.startsWith('image/')) return;

        const timestamp = Date.now();
        const baseLabel = file.name.split('.')[0];
        let url: string;
        let assetId: string;

        try {
            await import("@/lib/firebase").then(m => m.ensureAuth());
            url = await import("@/lib/firebase").then(m => m.uploadAsset(file));
            assetId = `upload-${timestamp}`;
        } catch (error) {
            console.error("Upload failed, falling back to local:", error);
            url = URL.createObjectURL(file);
            assetId = `local-${timestamp}`;
        }

        // 1. Add to Library
        const newAsset = {
            id: assetId,
            label: assetId.startsWith('local') ? `${baseLabel} (Local)` : baseLabel,
            type: 'furniture', // Default category
            src: url
        };
        addLibraryItem(newAsset);

        // 2. Add to Canvas
        // Calculate position relative to canvas content
        // Inverse transform: (Screen - Pan) / Zoom
        // Note: clientX/Y are screen relative, we need relative to the container but for full screen app client~=page

        // We need container bounds to be precise, but assuming full screen for now
        // Let's rely on the center if it's a paste, or mouse pos if drop.

        // Simple Viewport correction (approximate if container not 0,0)
        const contentX = (clientX - pan.x) / zoom;
        const contentY = (clientY - pan.y) / zoom;

        // Adjust for item center (assuming ~200px size)
        const centeredX = contentX - 100;
        const centeredY = contentY - 100;

        addItem(currentFloorId, {
            id: `item-${timestamp}`,
            type: 'furniture',
            src: url,
            x: centeredX,
            y: centeredY,
            width: 200,
            height: 200,
            rotation: 0,
            zIndex: (items.length || 0) + 1,
            label: baseLabel
        });
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = async (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            for (const file of files) {
                await handleFileProcess(file, e.clientX, e.clientY);
            }
        }
    };

    // Global Paste Listener
    useEffect(() => {
        const handlePaste = async (e: ClipboardEvent) => {
            const items = Array.from(e.clipboardData?.items || []);
            const fileItem = items.find(item => item.type.startsWith('image'));

            if (fileItem) {
                const file = fileItem.getAsFile();
                if (file) {
                    // Place in center of screen
                    const centerX = window.innerWidth / 2;
                    const centerY = window.innerHeight / 2;
                    await handleFileProcess(file, centerX, centerY);
                }
            }
        };

        window.addEventListener('paste', handlePaste);
        return () => window.removeEventListener('paste', handlePaste);
    }, [currentFloorId, pan, zoom]); // Re-bind if dependencies change to ensure correct coords


    return (
        <div
            className="flex-1 h-full relative overflow-hidden bg-midnight select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onWheel={handleWheel}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {/* Helper text if empty */}
            {items.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="text-center space-y-4 max-w-lg p-12 rounded-2xl border border-white/5 opacity-50">
                        <div className="font-serif text-3xl text-bronze/50">Design Canvas</div>
                        <p className="text-white/20 font-light font-sans">
                            Middle-Click to Pan. Wheel to Zoom.<br />
                            Drag items from library, or <b>Drop files here</b>.<br />
                            <b>Ctrl+V</b> to paste images.
                        </p>
                    </div>
                </div>
            )}

            {/* The Panned Content Layer */}
            <div
                ref={setNodeRef}
                className={cn(
                    "absolute inset-0 origin-top-left transition-transform duration-75 min-w-[5000px] min-h-[5000px]",
                    isOver ? "bg-bronze/5" : ""
                )}
                style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                    // Background grid should scale with content or stay static? 
                    // Usually static grid is better for reference, but rotating/scaling grid is more "real".
                    // Let's put grid on this layer so it scales.
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    width: '5000px',
                    height: '5000px',
                    left: '-2500px', // Center it roughly
                    top: '-2500px'
                }}
            >
                {/* Render Items */}
                {items.map(item => (
                    <DraggableItem
                        key={item.id}
                        item={item}
                        isSelected={selectedId === item.id}
                        onSelect={setSelectedId}
                    />
                ))}
            </div>
        </div>
    );
}
