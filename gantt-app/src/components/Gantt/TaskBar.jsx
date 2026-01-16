import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const TaskBar = ({ task, style, isSummary, onMouseDown, onDoubleClick }) => {
    const isMilestone = task.type === 'milestone';

    return (
        <div
            className={clsx(
                "absolute select-none group touch-none flex items-center z-20",
                isSummary ? "pointer-events-none" : ""
            )}
            style={style}
            onMouseDown={onMouseDown}
            onDoubleClick={(e) => {
                if (isSummary) return;
                e.stopPropagation();
                onDoubleClick && onDoubleClick(e);
            }}
        >
            {isMilestone ? (
                <div className="w-6 h-6 rotate-45 bg-bronze shadow-lg border border-white/20 hover:scale-110 transition-transform cursor-pointer" />
            ) : (
                <div className="w-full h-full relative">
                    {/* Main Bar */}
                    <div
                        className={clsx(
                            "w-full h-full rounded border overflow-hidden transition-shadow",
                            !isSummary && "cursor-grab active:cursor-grabbing shadow-ingot hover:brightness-110 border-white/10",
                            isSummary ? "bg-bronze/40 border-bronze/50 rounded-sm" : ""
                        )}
                        style={!isSummary ? {
                            background: `linear-gradient(90deg, #9A8C74 ${task.progress}%, #2A2E35 ${task.progress}%)`
                        } : {}}
                    >
                        {/* Progress Label */}
                        {!isSummary && task.duration > 2 && (
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold text-white mix-blend-difference pointer-events-none">
                                {task.progress}%
                            </span>
                        )}

                        {/* Summary Bracket Effect (Optional visual for summaries) */}
                        {isSummary && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-bronze/80" />
                        )}
                    </div>

                    {/* Resize Handle (Right) - Hide for Summary */}
                    {!isSummary && (
                        <div
                            data-resize="right"
                            className="absolute right-0 top-0 bottom-0 w-4 cursor-e-resize z-20 opacity-0 group-hover:opacity-100 hover:bg-white/10 transition-opacity"
                        />
                    )}

                    {/* Label (Outside) */}
                    <div className={clsx(
                        "absolute left-full ml-3 top-1/2 -translate-y-1/2 text-xs text-stone whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30",
                        isSummary ? "font-bold text-bronze" : "font-bold"
                    )}>
                        {task.name}
                    </div>
                </div>
            )}
        </div>
    );
};
