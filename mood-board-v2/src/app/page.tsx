"use client";

import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { Sidebar } from "@/components/Sidebar";
import { AssetLibrary } from "@/components/AssetLibrary";
import { Canvas } from "@/components/Canvas";
import { useState, useEffect } from "react";
import { useStore } from "@/store/useStore";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

export default function Home() {
    const [activeDragItem, setActiveDragItem] = useState<any>(null);
    const { currentFloorId, addItem, updateItem, loadFloors } = useStore();

    // Load saved data on mount
    useEffect(() => {
        loadFloors();
    }, []);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        setActiveDragItem(active.data.current);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over, delta } = event;
        setActiveDragItem(null);

        if (!over) return;

        // Is it a new item from the library?
        if (active.data.current?.isNew) {
            // Add new item to store
            addItem(currentFloorId, {
                id: `item-${Date.now()}`, // Unique ID
                label: active.data.current.label,
                type: active.data.current.type,
                src: active.data.current.src,
                // Position relative to drop (needs calibration in real app, simplistic for now)
                // Center on the Infinite Canvas (approx 2500 offset) + random jitter
                x: 2600 + (Math.random() * 50),
                y: 2600 + (Math.random() * 50),
                width: 150,
                height: 150,
                rotation: 0,
                zIndex: 1,
            });
        }
        // Or is it an existing canvas item?
        else if (active.data.current?.isCanvasItem) {
            const currentItem = active.data.current;
            updateItem(currentFloorId, currentItem.id, {
                x: currentItem.x + delta.x,
                y: currentItem.y + delta.y,
            });
        }
    };

    return (
        <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToWindowEdges]}
        >
            <main className="flex h-screen w-screen overflow-hidden bg-[#0F1115] text-[#F5F5F0]">
                <Sidebar />
                <div className="flex-1 flex flex-col relative">
                    <Canvas />
                </div>
                <AssetLibrary />

                <DragOverlay zIndex={50}>
                    {activeDragItem ? (
                        <div className="opacity-80 pointer-events-none">
                            {/* Simple visual preview */}
                            <img
                                src={activeDragItem.src}
                                alt="Dragging"
                                className="object-contain"
                                style={{
                                    width: activeDragItem.width || 100,
                                    height: activeDragItem.height || 100
                                }}
                            />
                        </div>
                    ) : null}
                </DragOverlay>
            </main>
        </DndContext>
    );
}
