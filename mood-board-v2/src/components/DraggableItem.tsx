"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useStore, type Item } from "@/store/useStore";
import { ContextMenu } from "./ContextMenu";

interface DraggableItemProps {
  item: Item;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function DraggableItem({ item, isSelected, onSelect }: DraggableItemProps) {
  const { updateItem, currentFloorId, deleteItem, bringToFront, sendToBack } = useStore();
  const [contextMenu, setContextMenu] = useState<{ x: number, y: number } | null>(null);

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: item.id,
    data: { ...item, isCanvasItem: true },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    left: `${item.x}px`,
    top: `${item.y}px`,
    width: `${item.width}px`,
    height: `${item.height}px`,
    zIndex: item.zIndex,
    position: 'absolute' as const,
  };

  const handleResize = (e: React.PointerEvent) => {
    e.stopPropagation(); // Stop drag from starting
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = item.width;
    const startHeight = item.height;

    const onPointerMove = (moveEvent: PointerEvent) => {
      const newWidth = Math.max(50, startWidth + (moveEvent.clientX - startX));
      const newHeight = Math.max(50, startHeight + (moveEvent.clientY - startY));

      updateItem(currentFloorId, item.id, { width: newWidth, height: newHeight });
    };

    const onPointerUp = () => {
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerup', onPointerUp);
    };

    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className={cn(
          "group cursor-grab active:cursor-grabbing",
          isSelected ? "ring-2 ring-bronze ring-offset-2 ring-offset-midnight" : "hover:ring-1 hover:ring-white/20",
          isDragging && "opacity-50"
        )}
        {...listeners}
        onPointerDown={(e) => {
          e.stopPropagation(); // Prevent Canvas from receiving this and deselecting
          onSelect(item.id);
          listeners?.onPointerDown?.(e);
        }}
        onContextMenu={handleContextMenu}
        {...attributes}
      >
        <div className="w-full h-full relative">
          <img
            src={item.src}
            alt={item.id}
            className="w-full h-full object-contain pointer-events-none select-none"
          />

          {/* Selection Controls */}
          {isSelected && (
            <>
              {/* Rotate Handle (Visual only for now) */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-bronze rounded-full cursor-ew-resize" />

              {/* Resize Handle */}
              <div
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-bronze rounded-full cursor-nwse-resize z-50 shadow-lg border border-white/20"
                onPointerDown={handleResize}
              />
            </>
          )}
        </div>
      </div>

      {contextMenu && (
        <ContextMenu
          position={contextMenu}
          onClose={() => setContextMenu(null)}
          actions={[
            {
              label: "Bring to Front",
              onClick: () => bringToFront(currentFloorId, item.id),
            },
            {
              label: "Send to Back",
              onClick: () => sendToBack(currentFloorId, item.id),
            },
            {
              label: "Delete",
              danger: true,
              onClick: () => deleteItem(currentFloorId, item.id),
            }
          ]}
        />
      )}
    </>
  );
}
