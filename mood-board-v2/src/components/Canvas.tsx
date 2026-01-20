"use client";

import { useDroppable } from "@dnd-kit/core";
import { useStore } from "@/store/useStore";
import { DraggableItem } from "./DraggableItem";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

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

    const containerRef = useRef<HTMLDivElement>(null);
    const OFFSET = 2500; // Match the CSS offset

    // Zoom Handler
    const handleWheel = (e: React.WheelEvent) => {
        // Prevent default browser behavior (scroll/zoom)
        e.preventDefault();

        const zoomSensitivity = 0.001;
        const delta = -e.deltaY * zoomSensitivity;
        const newZoom = Math.min(Math.max(0.1, zoom + delta), 5); // Allow zoom between 0.1x and 5x

        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            // Mouse relative to the container (viewport)
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // Calculate new pan to keep mouse position stable
            // Formula: newPan = Mouse - (Mouse - OldPan + Offset) * (NewZoom / OldZoom) + Offset
            // Derived from: MouseWorld = (MouseScreen - (Pan + Offset)) / Zoom

            // X-Axis
            const contentXBefore = (mouseX - pan.x + OFFSET) / zoom;
            const newPanX = mouseX + OFFSET - (contentXBefore * newZoom);

            // Y-Axis
            const contentYBefore = (mouseY - pan.y + OFFSET) / zoom;
            const newPanY = mouseY + OFFSET - (contentYBefore * newZoom);

            setPan({ x: newPanX, y: newPanY });
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
        let contentX, contentY;

        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const mouseX = clientX - rect.left;
            const mouseY = clientY - rect.top;

            // Transform screen coordinates to local content coordinates
            // Local = (Screen - (Pan - Offset)) / Zoom
            // Note: CSS uses left: -2500, top: -2500. 
            // So Viewport (0,0) corresponds to (-2500 + Pan) in transform term.
            // Coordinate in big div = (Mouse - Pan) / Zoom + 2500

            contentX = (mouseX - pan.x) / zoom + OFFSET;
            contentY = (mouseY - pan.y) / zoom + OFFSET;
        } else {
            // Fallback if ref missing
            contentX = 2500;
            contentY = 2500;
        }

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
                // Small delay to ensure order/timestamps if needed
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
            ref={containerRef}
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
