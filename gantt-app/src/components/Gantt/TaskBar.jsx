import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const TaskBar = ({ task, style, onMouseDown, onDoubleClick }) => {
    const isMilestone = task.type === 'milestone';

    return (
        <div
            className="absolute select-none group touch-none flex items-center z-20"
            style={style}
            onMouseDown={onMouseDown}
            onDoubleClick={(e) => {
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
                            "w-full h-full rounded border border-white/10 overflow-hidden cursor-grab active:cursor-grabbing shadow-ingot transition-shadow",
                            "hover:brightness-110"
                        )}
                        style={{
                            background: `linear-gradient(90deg, #9A8C74 ${task.progress}%, #2A2E35 ${task.progress}%)`
                        }}
                    >
                        {/* Progress Label */}
                        {task.duration > 2 && (
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold text-white mix-blend-difference pointer-events-none">
                                {task.progress}%
                            </span>
                        )}
                    </div>

                    {/* Resize Handle (Right) */}
                    <div
                        data-resize="right"
                        className="absolute right-0 top-0 bottom-0 w-4 cursor-e-resize z-20 opacity-0 group-hover:opacity-100 hover:bg-white/10 transition-opacity"
                    />

                    {/* Label (Outside) */}
                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">
                        {task.name}
                    </div>
                </div>
            )}
        </div>
    );
};
