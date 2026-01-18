"use client";

import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";

export function Sidebar() {
    const { currentFloor, floors, setCurrentFloor } = useStore();

    return (
        <div className="w-64 bg-midnight border-r border-surface-light flex flex-col h-full shrink-0">
            <div className="p-6 border-b border-surface-light flex items-center gap-3">
                <div className="p-2 bg-bronze/10 rounded-lg text-bronze">
                    <Building2 size={24} />
                </div>
                <div>
                    <h1 className="font-serif text-portland text-lg leading-tight">St Mary</h1>
                    <p className="font-sans text-xs text-bronze uppercase tracking-widest">Somerset Tower</p>
                </div>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
                <div className="px-4 mb-2">
                    <h2 className="text-[10px] uppercase tracking-widest text-portland/40 font-bold mb-2">Floors</h2>
                </div>
                <ul>
                    {Object.values(floors).map((floor) => (
                        <li key={floor.id}>
                            <button
                                onClick={() => setCurrentFloor(floor.id)}
                                className={cn(
                                    "w-full text-left px-6 py-3 text-sm font-sans transition-all border-l-2",
                                    currentFloor === floor.id
                                        ? "bg-surface text-bronze border-bronze"
                                        : "text-portland/60 border-transparent hover:text-portland hover:bg-surface/50"
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{floor.name}</span>
                                    {floor.items.length > 0 && (
                                        <span className="text-[10px] bg-surface-light px-1.5 py-0.5 rounded text-portland/40">{floor.items.length}</span>
                                    )}
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 border-t border-surface-light text-[10px] text-portland/20 text-center">
                SMS-1694 • MOOD BOARD
            </div>
        </div>
    );
}
