import React, { useState } from 'react';
import { X } from 'lucide-react';

export const TaskEditModal = ({ task, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...task });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="w-[400px] bg-panel border border-bronze/50 shadow-2xl rounded-lg overflow-hidden">

                {/* Header */}
                <div className="h-12 bg-void/50 border-b border-border flex items-center justify-between px-4">
                    <h2 className="font-header text-bronze tracking-wide">Edit Phase</h2>
                    <button onClick={onClose} className="text-stone hover:text-white"><X size={18} /></button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4 font-mono text-sm">

                    <div className="space-y-1">
                        <label className="text-gray-500 uppercase text-[10px] tracking-wider">Phase Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-midnight border border-border px-3 py-2 text-stone focus:border-bronze outline-none rounded"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-gray-500 uppercase text-[10px] tracking-wider">Start Date</label>
                            <input
                                type="date"
                                min="2000-01-01"
                                max="2100-12-31"
                                value={formData.startDate ? formData.startDate.split('T')[0] : ''}
                                onChange={(e) => setFormData({ ...formData, startDate: new Date(e.target.value).toISOString() })}
                                className="w-full bg-midnight border border-border px-3 py-2 text-stone focus:border-bronze outline-none rounded text-xs"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-gray-500 uppercase text-[10px] tracking-wider">Duration (Days)</label>
                            <input
                                type="number"
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                                className="w-full bg-midnight border border-border px-3 py-2 text-stone focus:border-bronze outline-none rounded"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-gray-500 uppercase text-[10px] tracking-wider">Progress (%)</label>
                            <input
                                type="number"
                                min="0" max="100"
                                value={formData.progress}
                                onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })}
                                className="w-full bg-midnight border border-border px-3 py-2 text-stone focus:border-bronze outline-none rounded"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-gray-500 uppercase text-[10px] tracking-wider">Depends On (IDs, comma sep)</label>
                        <input
                            type="text"
                            placeholder="e.g. t1, t2"
                            value={formData.dependencies ? formData.dependencies.join(', ') : ''}
                            onChange={(e) => {
                                const val = e.target.value;
                                const deps = val.split(',').map(s => s.trim()).filter(Boolean);
                                setFormData({ ...formData, dependencies: deps });
                            }}
                            className="w-full bg-midnight border border-border px-3 py-2 text-stone focus:border-bronze outline-none rounded font-mono text-xs"
                        />
                    </div>

                </div>

                {/* Footer */}
                <div className="p-4 border-t border-border bg-void/30 flex justify-between gap-2">
                    <button
                        onClick={() => {
                            onClose();
                            onSave(null, true); // Signal delete? Or cleaner to use onDelete prop
                        }}
                        className="px-4 py-2 hover:bg-red-500/10 text-red-400 border border-red-500/20 rounded transition-colors text-xs font-bold"
                    >
                        DELETE
                    </button>

                    <div className="flex gap-2">
                        <button onClick={onClose} className="px-4 py-2 hover:bg-white/5 rounded text-stone transition-colors">Cancel</button>
                        <button
                            onClick={() => {
                                // Validation
                                const date = new Date(formData.startDate);
                                const year = date.getFullYear();
                                if (isNaN(year) || year < 2000 || year > 2100) {
                                    alert("Please enter a valid year between 2000 and 2100.");
                                    return;
                                }
                                if (formData.duration < 1) {
                                    alert("Duration must be at least 1 day.");
                                    return;
                                }
                                onSave(formData);
                            }}
                            className="px-4 py-2 bg-bronze hover:bg-bronzeDark text-midnight font-bold rounded font-header tracking-wide transition-colors"
                        >
                            Confirm Updates
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};
