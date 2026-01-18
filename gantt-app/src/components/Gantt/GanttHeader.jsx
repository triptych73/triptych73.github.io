import React from 'react';
import { Plus, Settings, Undo2, Redo2 } from 'lucide-react';
import clsx from 'clsx';

export const GanttHeader = ({ viewMode, setViewMode, onAddTask, ...props }) => {
    return (
        <header className="h-16 border-b border-border bg-void flex items-center justify-between px-6 z-40 shadow-lg shrink-0">

            {/* Logo Area */}
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border border-bronze/50 flex items-center justify-center bg-bronze/10">
                    <span className="font-header text-bronze font-bold text-lg">S</span>
                </div>
                <div>
                    <h1 className="font-header text-xl tracking-widest text-stone">ST MARY SOMERSET</h1>
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-mono tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>ONLINE</span>
                        <span className="text-gray-600 pl-2">v1.7.1 Debug Move</span>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6">

                {/* Data Migration Trigger */}
                <button
                    onClick={props.onImportData}
                    className="text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded transition-colors"
                    title="Overwrite current data with 2021 Programme v2"
                >
                    IMPORT DATA
                </button>

                {/* Undo/Redo */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={props.onUndo}
                        disabled={!props.canUndo}
                        className={clsx("p-2 rounded hover:bg-white/10 text-gray-400 transition-colors", !props.canUndo && "opacity-30 cursor-not-allowed")}
                    >
                        <Undo2 size={18} />
                    </button>
                    <button
                        onClick={props.onRedo}
                        disabled={!props.canRedo}
                        className={clsx("p-2 rounded hover:bg-white/10 text-gray-400 transition-colors", !props.canRedo && "opacity-30 cursor-not-allowed")}
                    >
                        <Redo2 size={18} />
                    </button>
                </div>

                <div className="hidden md:flex bg-panel border border-border rounded-lg p-1 gap-1 font-mono text-xs">
                    {['day', 'week', 'month', 'year'].map((mode) => (
                        <button
                            key={mode}
                            onClick={() => setViewMode(mode)}
                            className={clsx(
                                "px-3 py-1 rounded transition-colors uppercase",
                                viewMode === mode
                                    ? "bg-bronze/20 text-bronze border border-bronze/30 shadow-glow"
                                    : "hover:bg-border text-gray-400"
                            )}
                        >
                            {mode}
                        </button>
                    ))}
                </div>

                {/* Summary View Toggle */}
                <button
                    onClick={() => props.setShowSummaryOnly(!props.showSummaryOnly)}
                    className={clsx(
                        "text-xs font-mono px-3 py-1 rounded border transition-colors uppercase",
                        props.showSummaryOnly
                            ? "bg-bronze text-midnight border-bronze font-bold"
                            : "bg-transparent text-gray-400 border-border hover:border-bronze/50"
                    )}
                >
                    SUMMARIES
                </button>

                {/* Add Menu Dropdown */}
                <div className="relative group">
                    <button
                        className="bg-bronze hover:bg-bronzeDark text-midnight font-bold px-4 py-2 rounded font-header text-sm tracking-wide transition-colors flex items-center gap-2"
                    >
                        <Plus size={16} />
                        ADD
                    </button>
                    {/* Hover Dropdown */}
                    <div className="absolute top-full right-0 mt-1 w-48 bg-panel border border-border shadow-xl rounded overflow-hidden hidden group-hover:block z-50">
                        <button
                            onClick={() => onAddTask('phase')}
                            className="w-full text-left px-4 py-3 hover:bg-white/5 text-gray-300 hover:text-bronze text-xs font-mono border-b border-white/5 transition-colors"
                        >
                            + NEW PHASE (Root)
                        </button>
                        <button
                            onClick={() => onAddTask('task')}
                            className="w-full text-left px-4 py-3 hover:bg-white/5 text-gray-300 hover:text-bronze text-xs font-mono border-b border-white/5 transition-colors"
                        >
                            + NEW TASK (Sibling)
                        </button>
                        <button
                            onClick={() => onAddTask('subtask')}
                            className="w-full text-left px-4 py-3 hover:bg-white/5 text-gray-300 hover:text-bronze text-xs font-mono transition-colors"
                        >
                            + NEW SUBTASK (Child)
                        </button>
                    </div>
                </div>

                <button className="text-gray-400 hover:text-white transition-colors p-2">
                    <Settings size={20} />
                </button>
            </div>
        </header>
    );
};
