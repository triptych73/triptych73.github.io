"use client";

import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Sidebar() {
    const { floors, currentFloorId, setCurrentFloor } = useStore();

    return (
        <aside className="w-64 h-full bg-surface/30 border-r border-white/5 flex flex-col z-20 shrink-0 backdrop-blur-sm">
            <div className="p-6 border-b border-white/5 bg-surface/10">
                <div className="p-6 border-b border-white/5 bg-surface/10">
                    <h1 className="font-serif text-xl text-portland tracking-wide text-center">
                        St Mary Somerset
                    </h1>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
                <div className="px-6 pb-2">
                    <h2 className="text-[10px] font-bold text-bronze/70 uppercase tracking-widest font-mono mb-4 flex items-center gap-2">
                        <span className="w-1 h-1 bg-bronze rounded-full"></span>
                        Level Selection
                    </h2>
                </div>

                <div className="space-y-1 px-3">
                    {/* Render exact order from store since user defined a specific list */}
                    {floors.map((floor) => (
                        <button
                            key={floor.id}
                            onClick={() => setCurrentFloor(floor.id)}
                            className={cn(
                                "w-full px-4 py-3 text-left transition-all duration-200 flex items-center gap-3 rounded border border-transparent group relative overflow-hidden",
                                currentFloorId === floor.id
                                    ? "bg-surface/60 text-bronze border-bronze/20 shadow-lg shadow-black/20"
                                    : "text-portland/50 hover:bg-white/5 hover:text-portland hover:border-white/5"
                            )}
                        >
                            <div className={cn(
                                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                currentFloorId === floor.id
                                    ? "bg-bronze shadow-[0_0_8px_rgba(154,140,116,0.6)] scale-125"
                                    : "bg-portland/20 group-hover:bg-portland/60"
                            )} />
                            <span className={cn(
                                "font-sans text-xs tracking-wide transition-all",
                                currentFloorId === floor.id ? "font-medium translate-x-1" : ""
                            )}>{floor.name}</span>

                            {/* Active Indicator Line */}
                            {currentFloorId === floor.id && (
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-bronze"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-4 border-t border-white/5 bg-surface/20 backdrop-blur-md">
                <AuthStatus />
            </div>
        </aside>
    );
}

function AuthStatus() {
    const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');
    const [uid, setUid] = useState<string>('');
    const [errorMsg, setErrorMsg] = useState<string>('');

    useEffect(() => {
        // Dynamic import to avoid SSR issues with Auth if necessary, 
        // but strict typing usually handles imports fine. 
        // We'll trust the direct import for now or use the global one.
        const checkAuth = async () => {
            const { auth } = await import("@/lib/firebase");
            return auth.onAuthStateChanged((user: any) => {
                if (user) {
                    setStatus('connected');
                    setUid(user.uid.slice(0, 6));
                } else {
                    setStatus('error');
                    setErrorMsg('No User');
                    // Auto-retry auth if disconnected
                    const { ensureAuth } = require("@/lib/firebase");
                    ensureAuth().catch((err: any) => {
                        console.error("Auto-auth failed", err);
                        setErrorMsg(err.message);
                    });
                }
            }, (error: any) => {
                setStatus('error');
                setErrorMsg(error.message);
            });
        };

        checkAuth();
    }, []);

    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-[10px] text-[#F5F5F0]/20 font-mono">
                <span>v2.0.1</span>
                <div className="flex items-center gap-2">
                    <span className={cn("uppercase",
                        status === 'connected' ? "text-emerald-500" :
                            status === 'loading' ? "text-yellow-500" : "text-red-500"
                    )}>
                        {status === 'connected' ? `Online (${uid})` : status}
                    </span>
                    <span className={cn(
                        "w-2 h-2 rounded-full border opacity-50",
                        status === 'connected' ? "bg-emerald-500 border-emerald-500" :
                            status === 'loading' ? "bg-yellow-500 border-yellow-500 animate-pulse" : "bg-red-500 border-red-500"
                    )} />
                </div>
            </div>
            {errorMsg && <div className="text-[9px] text-red-500 break-words">{errorMsg}</div>}
        </div>
    );
}
