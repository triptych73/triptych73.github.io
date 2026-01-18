"use client";

import { useStore } from "@/store/useStore";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { Image as ImageIcon, Box } from "lucide-react";

function Asset({ type, src, label }: { type: string; src: string; label: string }) {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: `asset-${src}`, // Unique ID for source asset
        data: {
            isNew: true,
            type,
            src,
            label
        }
    });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={cn(
                "aspect-square bg-surface border border-surface-light rounded-lg flex flex-col items-center justify-center gap-2 cursor-grab hover:border-bronze transition-colors group",
                isDragging && "opacity-50"
            )}
        >
            {/* Placeholder for real images if not found */}
            <div className="w-10 h-10 bg-midnight/50 rounded flex items-center justify-center text-bronze/50 group-hover:text-bronze transition-colors">
                {type === 'furniture' ? <Box size={20} /> : <ImageIcon size={20} />}
            </div>
            <span className="text-xs text-portland/60 font-sans group-hover:text-portland">{label}</span>
        </div>
    );
}

export function AssetLibrary() {
    const { assets } = useStore();

    return (
        <div className="w-72 bg-midnight border-l border-surface-light flex flex-col h-full shrink-0">
            <div className="p-4 border-b border-surface-light">
                <h2 className="font-serif text-portland text-sm">Asset Library</h2>
            </div>

            <div className="p-4 grid grid-cols-2 gap-3 overflow-y-auto">
                {assets.map((asset) => (
                    <Asset key={asset.src} {...asset} />
                ))}
            </div>

            <div className="p-4 mt-auto border-t border-surface-light">
                <button className="w-full py-2 border border-dashed border-surface-light text-portland/40 hover:text-bronze hover:border-bronze rounded text-xs uppercase tracking-widest transition-colors">
                    Upload Image
                </button>
            </div>
        </div>
    );
}
