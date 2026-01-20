"use client";

import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { useEffect, useState } from "react";

export function Sidebar() {
    const { floors, currentFloorId, setCurrentFloor } = useStore();

    return (
        <aside className="w-64 h-full bg-[#0F1115] border-r border-[#2C3038] flex flex-col z-20 shrink-0">
            <div className="p-6 border-b border-[#2C3038] bg-[#0F1115]">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#9A8C74]/10 border border-[#9A8C74]/20 text-[#9A8C74]">
                        <LayoutDashboard size={20} />
                    </div>
                    <div>
                        <h1 className="font-serif text-xl text-[#F5F5F0] leading-snug">
                            St Mary <span className="font-bold">Somerset</span>
                        </h1>
                        <p className="text-[10px] text-[#9A8C74] uppercase tracking-widest font-semibold mt-1">
                            Tower Residence
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-2">
                <div className="px-6 py-4">
                    <h2 className="text-[10px] font-bold text-[#F5F5F0]/30 uppercase tracking-widest font-sans">Level Selection</h2>
                </div>

                <div className="space-y-0.5 px-2">
                    {/* Render exact order from store since user defined a specific list */}
                    {floors.map((floor) => (
                        <button
                            key={floor.id}
                            onClick={() => setCurrentFloor(floor.id)}
                            className={cn(
                                "w-full px-4 py-3 text-left transition-all duration-200 flex items-center gap-3 rounded-md group",
                                currentFloorId === floor.id
                                    ? "bg-[#252932] text-[#F5F5F0] ring-1 ring-[#9A8C74]/20"
                                    : "text-[#F5F5F0]/50 hover:bg-[#252932]/50 hover:text-[#F5F5F0]"
                            )}
                        >
                            <div className={cn(
                                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                currentFloorId === floor.id
                                    ? "bg-[#9A8C74] shadow-[0_0_8px_rgba(154,140,116,0.6)] scale-110"
                                    : "bg-[#2C3038] group-hover:bg-[#F5F5F0]/30"
                            )} />
                            <span className="font-sans text-sm font-medium">{floor.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-4 border-t border-[#2C3038] bg-[#0F1115]">
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
