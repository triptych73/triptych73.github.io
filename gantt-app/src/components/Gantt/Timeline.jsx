import React, { useRef, useEffect } from 'react';
import { addDays } from '../../lib/helpers';
import { TaskBar } from './TaskBar';

export const Timeline = ({
    tasks,
    viewMode,
    projectStartDate,
    onScroll,
    onTaskDragStart,
    onEditTask
}) => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);

    // Configuration based on ViewMode
    const colWidth = viewMode === 'day' ? 60 : viewMode === 'week' ? 40 : 20;
    const rowHeight = 56;
    const headerHeight = 60; // Increased for double-decker header

    // Render Window
    const daysToRender = 365 * 2; // Render 2 years worth
    const totalWidth = daysToRender * colWidth;
    const totalHeight = Math.max(tasks.length * rowHeight + 100, 600);

    // Generate Date Headers
    const days = [];
    const months = [];

    let currentDate = new Date(addDays(projectStartDate, -7)); // Buffer
    let currentMonth = null;
    let monthStartLeft = 0;

    for (let i = 0; i < daysToRender; i++) {
        const date = new Date(currentDate);
        const dayLeft = i * colWidth;

        // Day Cell
        days.push({
            label: date.getDate(),
            subLabel: date.toLocaleString('default', { weekday: 'narrow' }),
            left: dayLeft,
            isWeekend: date.getDay() === 0 || date.getDay() === 6
        });

        // Month Grouping
        const monthLabel = date.toLocaleString('default', { month: 'long', year: 'numeric' });

        // Push if month changed OR it's the very first iteration
        if (monthLabel !== currentMonth) {
            if (currentMonth) {
                // Close previous month
                months.push({
                    label: currentMonth,
                    left: monthStartLeft,
                    width: dayLeft - monthStartLeft
                });
            }
            currentMonth = monthLabel;
            monthStartLeft = dayLeft;
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }
    // Push last month
    months.push({
        label: currentMonth,
        left: monthStartLeft,
        width: (daysToRender * colWidth) - monthStartLeft
    });

    // Handle Local Scroll (Horizontal Sync) + Parent Scroll (Vertical Sync)
    const handleScroll = (e) => {
        // Horizontal Sync for Header
        if (headerRef.current) {
            headerRef.current.scrollLeft = e.target.scrollLeft;
        }
        // Vertical Sync for Sidebar (passed via prop)
        onScroll(e);
    };

    // Calculate Task Positions
    const getTaskStyle = (task, index) => {
        const startDiff = Math.round((new Date(task.startDate) - new Date(addDays(projectStartDate, -7))) / (1000 * 60 * 60 * 24));
        const left = startDiff * colWidth;
        const width = task.duration * colWidth;
        const top = index * rowHeight + 12; // Padding
        const height = rowHeight - 24;

        return {
            left: `${left}px`,
            top: `${top}px`,
            width: `${Math.max(width, 2)}px`, // Min width
            height: `${height}px`
        };
    };

    // Calculate Dependency Paths
    const renderDependencies = () => {
        const paths = [];
        tasks.forEach((task, index) => {
            if (!task.dependencies || task.dependencies.length === 0) return;

            const destX = Math.round((new Date(task.startDate) - new Date(addDays(projectStartDate, -7))) / (1000 * 60 * 60 * 24)) * colWidth;
            const destY = (index * rowHeight) + (rowHeight / 2) + 12;

            task.dependencies.forEach(depId => {
                const parentTask = tasks.find(t => t.id === depId);
                const parentIndex = tasks.findIndex(t => t.id === depId);

                if (!parentTask || parentIndex === -1) return;

                const startDiff = Math.round((new Date(parentTask.startDate) - new Date(addDays(projectStartDate, -7))) / (1000 * 60 * 60 * 24));
                const srcX = (startDiff + parentTask.duration) * colWidth;
                const srcY = (parentIndex * rowHeight) + (rowHeight / 2) + 12;

                // Improved Path logic for backward/forward dependencies
                const controlX = Math.abs(destX - srcX) * 0.5;
                const d = `M ${srcX} ${srcY} C ${srcX + controlX} ${srcY}, ${destX - controlX} ${destY}, ${destX} ${destY}`;

                paths.push(
                    <path
                        key={`${depId}-${task.id}`}
                        d={d}
                        stroke="#5C5242"
                        strokeWidth="1.5"
                        fill="none"
                        className="opacity-60"
                        markerEnd="url(#arrowhead)"
                    />
                );
            });
        });
        return paths;
    };

    return (
        <div className="flex-1 flex flex-col relative bg-midnight overflow-hidden h-full">

            {/* Double-Decker Date Header */}
            <div
                className="h-[60px] bg-void/90 border-b border-border flex-shrink-0 relative overflow-hidden z-20 shadow-sm"
                ref={headerRef}
            >
                {/* Months Layer */}
                <div className="h-[30px] border-b border-border/30 flex relative min-w-max">
                    {months.map((m, i) => (
                        <div
                            key={i}
                            className="h-full border-r border-border/30 flex items-center bg-void/90 overflow-hidden"
                            style={{ width: m.width }}
                        >
                            <span className="sticky left-0 px-4 text-xs font-header text-bronze tracking-widest uppercase whitespace-nowrap">
                                {m.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Days Layer */}
                <div className="h-[30px] w-[max-content] relative">
                    {days.map((d, i) => (
                        <div
                            key={i}
                            className={`absolute top-0 h-full border-r border-border/30 flex flex-col justify-center items-center text-[10px] select-none ${d.isWeekend ? 'bg-white/5' : ''}`}
                            style={{ left: d.left, width: colWidth }}
                        >
                            <span className="text-gray-500">{d.subLabel}</span>
                            <span className="text-stone font-bold">{d.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Grid */}
            <div
                ref={containerRef}
                className="flex-1 overflow-auto relative bg-grid-pattern bg-[length:40px_40px]"
                onScroll={handleScroll}
            >
                <div style={{ width: totalWidth, height: totalHeight }} className="relative">

                    {/* Dependency Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#5C5242" />
                            </marker>
                        </defs>
                        {renderDependencies()}
                    </svg>

                    {/* Tasks */}
                    {tasks.map((task, index) => (
                        <TaskBar
                            key={task.id}
                            task={task}
                            style={getTaskStyle(task, index)}
                            onMouseDown={(e) => onTaskDragStart(e, task)}
                            onDoubleClick={() => onEditTask(task)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
