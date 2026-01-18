"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useStore, type FloorItem } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { Trash2, BringToFront, SendToBack } from "lucide-react";

interface Props {
    item: FloorItem;
    floorId: number;
}

export function DraggableItem({ item, floorId }: Props) {
    const { updateItem, removeItem, bringToFront, sendToBack } = useStore();
    const [showControls, setShowControls] = useState(false);

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: item.id,
        data: { ...item, isExisting: true }
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        left: item.x,
        top: item.y,
        width: item.width,
        height: item.height,
        zIndex: item.zIndex,
        position: 'absolute' as const,
    };

    // Resize Logic
    const handleResize = (e: React.MouseEvent, corner: string) => {
        e.stopPropagation();
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = item.width;
        const startHeight = item.height;

        const onMove = (moveEvent: MouseEvent) => {
            const dx = moveEvent.clientX - startX;
            const dy = moveEvent.clientY - startY;

            let newWidth = startWidth;
            let newHeight = startHeight;

            if (corner.includes('r')) newWidth = startWidth + dx;
            if (corner.includes('b')) newHeight = startHeight + dy;

            // Simple min size
            if (newWidth < 50) newWidth = 50;
            if (newHeight < 50) newHeight = 50;

            updateItem(floorId, item.id, { width: newWidth, height: newHeight });
        };

        const onUp = () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
    };

    return (
        <>
            <div
                ref={setNodeRef}
                style={style}
                {...listeners}
                {...attributes}
                onContextMenu={(e) => {
                    e.preventDefault();
                    setShowControls(!showControls);
                }}
                className={cn(
                    "group absolute touch-none select-none",
                    !item.src && "bg-surface border border-dashed border-bronze/50",
                    showControls ? "ring-2 ring-bronze" : "hover:ring-1 hover:ring-bronze/30"
                )}
            >
                {/* Content */}
                {item.src && (
                    <img src={item.src} alt="item" className="w-full h-full object-contain pointer-events-none" />
                )}

                {/* Controls (Right Click to toggle) */}
                {showControls && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-midnight/90 backdrop-blur border border-surface-light rounded flex gap-1 p-1 z-[9999]">
                        <button onClick={() => bringToFront(floorId, item.id)} className="p-1.5 hover:bg-surface rounded text-portland/80" title="Bring to Front">
                            <BringToFront size={14} />
                        </button>
                        <button onClick={() => sendToBack(floorId, item.id)} className="p-1.5 hover:bg-surface rounded text-portland/80" title="Send to Back">
                            <SendToBack size={14} />
                        </button>
                        <div className="w-px bg-surface-light mx-1" />
                        <button onClick={() => removeItem(floorId, item.id)} className="p-1.5 hover:bg-alert/20 text-alert rounded" title="Remove">
                            <Trash2 size={14} />
                        </button>
                    </div>
                )}

                {/* Resize Handle (Simple BR corner) */}
                <div
                    className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize bg-transparent z-50 opacity-0 group-hover:opacity-100"
                    onMouseDown={(e) => handleResize(e, 'br')}
                >
                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-bronze rounded-sm" />
                </div>
            </div>

            {/* Overlay to close controls when clicking elsewhere */}
            {showControls && (
                <div className="fixed inset-0 z-[1] bg-transparent" onClick={() => setShowControls(false)} />
            )}
        </>
    );
}
