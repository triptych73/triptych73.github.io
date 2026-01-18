"use client";

import { useState, useEffect } from "react";
import { DndContext, DragOverlay, useSensor, useSensors, PointerSensor, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { Sidebar } from "@/components/Sidebar";
import { AssetLibrary } from "@/components/AssetLibrary";
import { Canvas } from "@/components/Canvas";
import { useStore } from "@/store/useStore";
import { loadFloorsFromFireStore, saveFloorsToFireStore } from "@/lib/firebase";
import { useDebounce } from "@/lib/useDebounce"; // We'll implement this quick helper or just use timeout

// Imported useDebounce from @/lib/useDebounce

export default function Home() {
  const { floors, currentFloor, addItemToFloor, updateItem, loadFloors } = useStore();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<any>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  // Persistence Logic
  useEffect(() => {
    loadFloorsFromFireStore().then((data) => {
      if (data) loadFloors(data);
    });
  }, []); // Mount only

  const debouncedFloors = useDebounce(floors, 2000);
  useEffect(() => {
    if (Object.keys(debouncedFloors).length > 0) {
      saveFloorsToFireStore(debouncedFloors);
    }
  }, [debouncedFloors]);


  // Dnd Logic
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    setActiveItem(event.active.data.current);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Reset active
    setActiveId(null);
    setActiveItem(null);

    // If dropped nowhere valid
    if (!over) return;

    // Use current rects to calculate position relative to Canvas
    // We assume the drop target 'canvas' is the container.
    // However, dnd-kit rects are viewport relative. 
    // We need the canvas element's rect.

    // Ideally we use refs, but here we can just querySelector since we know the ID
    const canvasEl = document.getElementById('canvas-container'); // We'll add this ID to Canvas wrapper
    if (!canvasEl) return;

    const canvasRect = canvasEl.getBoundingClientRect();
    const itemRect = active.rect.current.translated; // Final position

    if (!itemRect) return;

    // Calculate x,y relative to canvas
    let x = itemRect.left - canvasRect.left;
    let y = itemRect.top - canvasRect.top;

    // Snap to grid? Optional.
    // Ensure inside bounds? Optional.

    if (active.data.current?.isNew) {
      // Adding new item
      // Only if dropped on 'canvas' (over.id === 'canvas' or inside)
      // dnd-kit `over` might be an existing item if we drop on top of it.
      // We can check if `over` is valid.

      // Since we are dragging from library to canvas, we create a new item
      addItemToFloor(currentFloor, {
        type: active.data.current.type,
        src: active.data.current.src,
        x,
        y,
        width: 100, // Default size
        height: 100,
        rotation: 0,
        label: active.data.current.label
      });
    } else if (active.data.current?.isExisting) {
      // Moving existing item
      updateItem(currentFloor, active.id as string, { x, y });
    }
  };

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <main className="flex h-screen w-screen bg-midnight overflow-hidden">
        <Sidebar />

        {/* Canvas Area */}
        <div id="canvas-container" className="flex-1 h-full relative">
          <Canvas />
        </div>

        <AssetLibrary />

        {/* Drag Overlay for visual feedback during drag */}
        <DragOverlay>
          {activeItem ? (
            <div className={activeItem.isNew ? "w-24 h-24 opacity-80" : "opacity-80"}
              style={activeItem.isExisting ? {
                width: activeItem.width,
                height: activeItem.height
              } : {}}>
              {activeItem.src ? (
                <img src={activeItem.src} className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full border border-dashed border-bronze bg-surface/50" />
              )}
            </div>
          ) : null}
        </DragOverlay>
      </main>
    </DndContext>
  );
}
