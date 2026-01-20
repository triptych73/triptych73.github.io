"use client";

import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { Search, Plus, Upload, Loader2, Image as ImageIcon, FolderOpen, Pencil } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { uploadAsset, ensureAuth } from "@/lib/firebase";
import { useDraggable } from "@dnd-kit/core";
import { ContextMenu } from "./ContextMenu";

const ASSET_CATEGORIES = [
    { id: 'furniture', label: 'Furniture' },
    { id: 'decor', label: 'Decor' },
    { id: 'lighting', label: 'Lighting' },
    { id: 'materials', label: 'Materials' },
    { id: 'plans', label: 'Floor Plans' },
];

// Inner component for individual draggable library items
function DraggableLibraryItem({ asset }: { asset: any }) {
    const { updateLibraryItem, deleteLibraryItem, moveLibraryItemCategory } = useStore();
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: `lib-${asset.id}`,
        data: { ...asset, isNew: true }
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editedLabel, setEditedLabel] = useState(asset.label);
    const [contextMenu, setContextMenu] = useState<{ x: number, y: number } | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when editing starts
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const handleSave = () => {
        if (editedLabel.trim() && editedLabel !== asset.label) {
            updateLibraryItem(asset.id, { label: editedLabel.trim() });
        } else {
            setEditedLabel(asset.label); // Revert if empty or unchanged
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSave();
        if (e.key === 'Escape') {
            setEditedLabel(asset.label);
            setIsEditing(false);
        }
    };

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setContextMenu({ x: e.clientX, y: e.clientY });
    };

    // available categories to move to
    const moveActions = ASSET_CATEGORIES
        .filter(c => c.id !== asset.type)
        .map(c => ({
            label: `Move to ${c.label}`,
            onClick: () => moveLibraryItemCategory(asset.id, c.id)
        }));

    return (
        <>
            <div
                ref={setNodeRef}
                {...listeners}
                {...attributes}
                suppressHydrationWarning
                className={cn(
                    "group relative aspect-square bg-[#1A1D23] rounded border border-[#2C3038] hover:border-[#9A8C74]/50 transition-all cursor-grab active:cursor-grabbing overflow-hidden flex flex-col items-center justify-center p-2 hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]",
                    isDragging && "opacity-50 ring-2 ring-[#9A8C74]",
                    isEditing && "ring-1 ring-[#9A8C74] cursor-text"
                )}
                onContextMenu={handleContextMenu}
            >
                <div className="w-full h-24 mb-2 flex items-center justify-center overflow-hidden pointer-events-none">
                    <img src={asset.src} alt={asset.label} className="max-w-full max-h-full object-contain" />
                </div>

                {isEditing ? (
                    <input
                        ref={inputRef}
                        value={editedLabel}
                        onChange={(e) => setEditedLabel(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={handleKeyDown}
                        onPointerDown={(e) => e.stopPropagation()} // Allow clicking input without dragging
                        onClick={(e) => e.stopPropagation()}
                        className="w-full bg-[#0F1115] text-[10px] text-[#F5F5F0] border border-[#9A8C74] rounded px-1 text-center focus:outline-none z-50 relative"
                    />
                ) : (
                    <span className="text-[10px] text-[#F5F5F0]/60 font-medium text-center truncate w-full px-2 group-hover:text-[#F5F5F0] transition-colors">
                        {asset.label}
                    </span>
                )}
            </div>

            {contextMenu && (
                <ContextMenu
                    position={contextMenu}
                    onClose={() => setContextMenu(null)}
                    actions={[
                        {
                            label: "Rename",
                            onClick: () => setIsEditing(true),
                            icon: <Pencil size={12} />
                        },
                        ...moveActions,
                        {
                            label: "Delete Asset",
                            danger: true,
                            onClick: () => deleteLibraryItem(asset.id),
                        }
                    ]}
                />
            )}
        </>
    );
}

// Define Default Assets
const DEFAULT_ASSETS = [
    { id: 'sofa-1', label: 'Linen Sofa', type: 'furniture', src: '/assets/sofa.png' },
    { id: 'chair-1', label: 'Accent Chair', type: 'furniture', src: '/assets/chair.png' },
    { id: 'lamp-1', label: 'Floor Lamp', type: 'decor', src: '/assets/lamp.png' },
];

export function AssetLibrary() {
    const { addItem, currentFloorId, libraryItems, addLibraryItem } = useStore();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('furniture');
    const [debugLog, setDebugLog] = useState<string[]>([]);
    const [search, setSearch] = useState('');

    const addLog = (msg: string) => setDebugLog(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);

    // Compute all assets to display
    const allAssets = [...DEFAULT_ASSETS, ...(libraryItems || [])];

    // Ensure auth on mount
    useEffect(() => {
        addLog("Mounting AssetLibrary...");
        ensureAuth()
            .then(() => addLog("Auth confirmed on mount"))
            .catch(err => addLog(`Auth check failed: ${err.message}`));
    }, []);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        addLog(`Starting upload for: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`);

        try {
            await ensureAuth(); // Double check auth before upload
            addLog("Auth verified.");

            const url = await uploadAsset(file);
            addLog("Upload complete! URL received.");

            const newAsset = {
                id: `upload-${Date.now()}`,
                label: file.name.split('.')[0],
                type: selectedCategory,
                src: url
            };

            addLibraryItem(newAsset);
            addLog("Asset added to local state.");

        } catch (error: any) {
            console.error("Upload failed", error);
            addLog(`ERROR: ${error.message}`);

            // FALLBACK: Use local object URL so user can still work
            addLog("⚠️ Switching to Local Preview Mode (CORS Bypass)");
            const localUrl = URL.createObjectURL(file);
            const newAsset = {
                id: `local-${Date.now()}`,
                label: `${file.name.split('.')[0]} (Local)`,
                type: selectedCategory,
                src: localUrl
            };
            addLibraryItem(newAsset);
            addLog("Local preview asset added.");

        } finally {
            setUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    return (
        <aside className="w-80 h-full bg-surface/30 border-l border-white/5 flex flex-col z-20 shrink-0 backdrop-blur-sm shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">

            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-surface/10">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-portland text-lg tracking-wide flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-bronze rounded-full"></span>
                        Library
                    </h2>
                    <span className="text-[10px] font-mono text-portland/30 bg-white/5 px-2 py-1 rounded">
                        {allAssets.length} ITEMS
                    </span>
                </div>

                {/* Search */}
                <div className="relative group mb-5">
                    <Search className="absolute left-3 top-2.5 text-portland/30 w-4 h-4 group-focus-within:text-bronze transition-colors" />
                    <input
                        type="text"
                        placeholder="Search assets..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-black/20 border border-white/5 rounded px-3 py-2 pl-9 text-xs text-portland placeholder-portland/20 focus:outline-none focus:border-bronze/50 focus:bg-black/40 transition-all font-mono"
                    />
                </div>

                {/* Categories (Quick Filter) */}
                <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
                    {ASSET_CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={cn(
                                "text-[9px] uppercase font-bold px-3 py-1.5 rounded-sm whitespace-nowrap transition-all border font-mono tracking-wider",
                                selectedCategory === cat.id
                                    ? "bg-bronze text-midnight border-bronze shadow-[0_0_10px_rgba(154,140,116,0.3)]"
                                    : "bg-transparent text-portland/40 border-white/5 hover:border-white/10 hover:text-portland/80 hover:bg-white/5"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Upload Action */}
            <div className="p-4 border-b border-white/5 bg-surface/5 space-y-3">
                <div className="flex items-center justify-between text-[10px] text-portland/40 font-mono tracking-wide">
                    <div className="flex items-center gap-2">
                        <FolderOpen size={12} />
                        <span>TARGET: <span className="text-bronze font-bold">{ASSET_CATEGORIES.find(c => c.id === selectedCategory)?.label}</span></span>
                    </div>
                </div>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                />
                <button
                    onClick={handleUploadClick}
                    disabled={uploading}
                    className="group w-full flex items-center justify-center gap-3 py-3 rounded border border-dashed border-white/10 text-portland/40 hover:text-bronze hover:border-bronze/50 hover:bg-bronze/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-[10px] uppercase tracking-[0.15em] font-bold"
                >
                    <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-bronze/20 transition-colors">
                        {uploading ? <Loader2 className="animate-spin" size={12} /> : <Upload size={12} />}
                    </div>
                    <span>{uploading ? "Processing..." : "Upload New Asset"}</span>
                </button>
            </div>

            {/* Grid */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-black/20">
                <div className="grid grid-cols-2 gap-3">
                    {allAssets.filter(a => a.type === selectedCategory).map((asset) => (
                        <DraggableLibraryItem key={asset.id} asset={asset} />
                    ))}
                </div>
            </div>

            {/* Debug Log */}
            <div className="p-3 border-t border-white/5 bg-black/60 h-32 overflow-y-auto font-mono text-[9px] w-full">
                <div className="text-bronze/50 mb-2 border-b border-white/5 uppercase tracking-widest pb-1 flex justify-between">
                    <span>System Log</span>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                </div>
                {debugLog.map((log, i) => (
                    <div key={i} className="text-portland/60 border-b border-white/5 last:border-0 pb-1 mb-1 break-all font-light">
                        <span className="text-white/20 mr-2">{log.split(']')[0]}]</span>
                        {log.split(']')[1]}
                    </div>
                ))}
                {debugLog.length === 0 && <div className="text-portland/20 italic">System ready...</div>}
            </div>

        </aside>
    );
}
