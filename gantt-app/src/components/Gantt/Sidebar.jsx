import React, { useState } from 'react';
import { GripVertical } from 'lucide-react';
import clsx from 'clsx';

export const Sidebar = ({ tasks, selectedTaskId, onSelectTask, onEditTask, onReorderTasks, scrollRef, onScroll }) => {

    // State to track drop target: { index: number, position: 'top' | 'bottom' }
    const [dropTarget, setDropTarget] = useState(null);

    const handleDragStart = (e, index) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', index.toString());
        e.dataTransfer.setDragImage(e.currentTarget, 0, 0); // Optional: Custom image
        setTimeout(() => {
            if (e.target) e.target.classList.add('opacity-30');
        }, 0);
    };

    const handleDragEnd = (e) => {
        if (e.target) e.target.classList.remove('opacity-30');
        setDropTarget(null);
    };

    const handleDragOver = (e, index) => {
        e.preventDefault(); // Allow dropping
        e.stopPropagation();

        const rect = e.currentTarget.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        const position = e.clientY < midY ? 'top' : 'bottom';

        if (!dropTarget || dropTarget.index !== index || dropTarget.position !== position) {
            setDropTarget({ index, position });
        }
    };

    const handleDrop = (e, targetIndex) => {
        e.preventDefault();
        e.stopPropagation();

        const dragIndexStr = e.dataTransfer.getData('text/plain');
        const dragIndex = parseInt(dragIndexStr, 10);

        if (dropTarget && !isNaN(dragIndex)) {
            let finalIndex = targetIndex;
            if (dropTarget.position === 'bottom') {
                finalIndex = targetIndex + 1;
            }

            if (dragIndex !== finalIndex && dragIndex !== finalIndex - 1) {
                onReorderTasks(dragIndex, finalIndex);
            }
        }
        setDropTarget(null);
    };

    return (
        <div className="w-80 flex-shrink-0 bg-panel border-r border-border flex flex-col z-30 shadow-2xl relative h-full">
            {/* Header */}
            <div className="h-[60px] border-b border-border bg-void/50 flex items-center px-4 text-xs font-mono text-bronze uppercase tracking-widest flex-shrink-0">
                <div className="w-8 text-center">#</div>
                <div className="flex-1 pl-2">Task Name</div>
                <div className="w-16 text-right">Dur.</div>
            </div>

            <div
                className="flex-1 overflow-y-auto overflow-x-hidden relative"
                onDragLeave={() => setDropTarget(null)}
                ref={scrollRef}
                onScroll={onScroll}
            >
                {tasks.map((task, index) => {
                    const isSummary = task.childIds && task.childIds.length > 0;
                    const isSelected = selectedTaskId === task.id;

                    // Indent Styles based on Level
                    const indentClass = task.level === 0 ? "pl-2 font-bold uppercase tracking-wider text-bronze" :
                        task.level === 1 ? "pl-6 font-semibold text-stone" :
                            "pl-10 text-stone/80 text-xs";

                    return (
                        <div
                            key={task.id}
                            className={clsx(
                                "h-14 flex items-center px-2 cursor-pointer border-b border-border transition-colors relative",
                                isSummary ? "bg-white/5" : "hover:bg-white/5",
                                isSelected ? "bg-bronze/20 border-l-2 border-l-bronze" : "border-l-2 border-l-transparent",
                                dropTarget && dropTarget.index === index ? "bg-bronze/10" : ""
                            )}
                            draggable={true} // Allow dragging everything now (Summary View handles block moves)
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDrop={(e) => handleDrop(e, index)}
                            onClick={() => onSelectTask(task.id)}
                            onDoubleClick={(e) => {
                                e.stopPropagation();
                                onEditTask(task);
                            }}
                        >
                            {/* Insertion Line Indicator */}
                            {dropTarget && dropTarget.index === index && dropTarget.position === 'top' && (
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-bronze z-50 shadow-[0_0_10px_rgba(217,119,6,0.8)] pointer-events-none" />
                            )}
                            {dropTarget && dropTarget.index === index && dropTarget.position === 'bottom' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-bronze z-50 shadow-[0_0_10px_rgba(217,119,6,0.8)] pointer-events-none" />
                            )}

                            <div className="w-8 h-full flex items-center justify-center text-bronze/50 cursor-grab active:cursor-grabbing hover:text-bronze pointer-events-none">
                                <GripVertical size={14} />
                            </div>

                            <div
                                className="flex-1 flex items-center h-full pointer-events-none overflow-hidden"
                            >
                                <div className="w-12 text-center text-xs text-gray-500 font-mono select-none flex-shrink-0">
                                    {task.wbs}
                                </div>
                                <div
                                    className={clsx(
                                        "flex-1 truncate select-none",
                                        indentClass
                                    )}
                                >
                                    {task.name}
                                </div>
                                <div className="w-12 text-right font-mono text-xs text-bronze select-none flex-shrink-0">
                                    {task.duration}d
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
