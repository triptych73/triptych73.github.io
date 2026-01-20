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
        <aside className="w-80 h-full bg-[#0F1115] border-l border-[#2C3038] flex flex-col z-20 shrink-0 shadow-[-4px_0_24px_rgba(0,0,0,0.4)]">

            {/* Header */}
            <div className="p-6 border-b border-[#2C3038] bg-[#0F1115]">
                <h2 className="font-serif text-[#F5F5F0] text-lg mb-4 tracking-wide">Library</h2>

                {/* Search */}
                <div className="relative group mb-4">
                    <Search className="absolute left-3 top-2.5 text-[#F5F5F0]/30 w-4 h-4 group-focus-within:text-[#9A8C74] transition-colors" />
                    <input
                        type="text"
                        placeholder="Search assets..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-[#1A1D23] border border-[#2C3038] rounded-md py-2 pl-9 pr-4 text-sm text-[#F5F5F0] placeholder-[#F5F5F0]/20 focus:outline-none focus:border-[#9A8C74]/50 transition-all font-sans"
                    />
                </div>

                {/* Categories (Quick Filter) */}
                <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                    {ASSET_CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={cn(
                                "text-[10px] uppercase font-bold px-2 py-1 rounded whitespace-nowrap transition-colors border",
                                selectedCategory === cat.id
                                    ? "bg-[#9A8C74] text-[#0F1115] border-[#9A8C74]"
                                    : "bg-transparent text-[#F5F5F0]/40 border-transparent hover:border-[#2C3038] hover:text-[#F5F5F0]"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Upload Action */}
            <div className="p-4 border-b border-[#2C3038] bg-[#1A1D23]/30 space-y-3">

                <div className="flex items-center gap-2 text-xs text-[#F5F5F0]/50">
                    <FolderOpen size={12} />
                    <span>Uploading to: <span className="text-[#9A8C74] font-medium uppercase">{ASSET_CATEGORIES.find(c => c.id === selectedCategory)?.label}</span></span>
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
                    className="w-full flex items-center justify-center gap-2 py-3 rounded border border-dashed border-[#2C3038] text-[#F5F5F0]/50 hover:text-[#9A8C74] hover:border-[#9A8C74]/50 hover:bg-[#9A8C74]/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-xs uppercase tracking-wider font-bold"
                >
                    {uploading ? <Loader2 className="animate-spin" size={16} /> : <Upload size={16} />}
                    <span>{uploading ? "Uploading..." : "Upload New Asset"}</span>
                </button>
            </div>

            {/* Grid */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <div className="grid grid-cols-2 gap-3">
                    {allAssets.filter(a => a.type === selectedCategory).map((asset) => (
                        <DraggableLibraryItem key={asset.id} asset={asset} />
                    ))}

                </div>
            </div>

            {/* Debug Log */}
            <div className="p-2 border-t border-[#2C3038] bg-black/40 h-32 overflow-y-auto font-mono text-[10px] w-full">
                <div className="text-[#F5F5F0]/30 mb-1 border-b border-white/5 uppercase tracking-wider text-[9px]">Live Debug Log</div>
                {debugLog.map((log, i) => (
                    <div key={i} className="text-[#F5F5F0]/70 border-b border-white/5 last:border-0 pb-0.5 mb-0.5 break-all">
                        {log}
                    </div>
                ))}
                {debugLog.length === 0 && <div className="text-[#F5F5F0]/20 italic">Waiting for connection...</div>}
            </div>

        </aside>
    );
}
