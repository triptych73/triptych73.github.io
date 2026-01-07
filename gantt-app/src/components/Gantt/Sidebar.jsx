import React, { useState } from 'react';
import { GripVertical } from 'lucide-react';
import clsx from 'clsx';

export const Sidebar = ({ tasks, onEditTask, onReorderTasks }) => {

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

            // Adjust for removal if moving down
            // But usually the parent handler just needs (dragIndex, dropIndex)
            // Let's pass the calculated intended index

            // Should valid check?
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

            <div className="flex-1 overflow-y-auto overflow-x-hidden relative" onDragLeave={() => setDropTarget(null)}>
                {tasks.map((task, index) => (
                    <div
                        key={task.id}
                        className="h-14 flex items-center px-2 cursor-pointer border-b border-border hover:bg-white/5 transition-colors relative"
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
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
                            className="flex-1 flex items-center h-full pointer-events-none"
                        >
                            <div className="w-6 text-center text-xs text-gray-500 font-mono select-none">
                                {index + 1}
                            </div>
                            <div className="flex-1 pl-2 truncate text-sm text-gray-300 font-ui select-none">
                                {task.name}
                            </div>
                            <div className="w-12 text-right font-mono text-xs text-bronze select-none">
                                {task.duration}d
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
