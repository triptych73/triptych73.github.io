"use client";

import { useDroppable } from "@dnd-kit/core";
import { useStore } from "@/store/useStore";
import { DraggableItem } from "./DraggableItem";
import { cn } from "@/lib/utils";

export function Canvas() {
    const { currentFloor, floors } = useStore();
    const { setNodeRef } = useDroppable({
        id: 'canvas',
    });

    const floor = floors[currentFloor];

    return (
        <div className="flex-1 bg-surface-light/30 relative overflow-hidden bg-grid-pattern p-10">
            <div
                ref={setNodeRef}
                className={cn(
                    "w-full h-full bg-portland/5 border border-dashed border-portland/10 rounded-xl relative shadow-inner",
                    "transition-colors"
                )}
            >
                {/* Floor Label Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                    <h1 className="text-8xl font-serif text-portland/5">{floor.name.split(':')[0]}</h1>
                </div>

                {floor.items.map(item => (
                    <DraggableItem key={item.id} item={item} floorId={floor.id} />
                ))}
            </div>
        </div>
    );
}
