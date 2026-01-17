import React, { useRef, useEffect } from 'react';
import { addDays } from '../../lib/helpers';
import { TaskBar } from './TaskBar';

export const Timeline = ({
    tasks,
    viewMode,
    projectStartDate,
    onScroll,
    onTaskDragStart,
    onEditTask,
    scrollRef
}) => {

    const headerRef = useRef(null);

    // Configuration based on ViewMode
    const colWidth = viewMode === 'day' ? 60 : viewMode === 'week' ? 40 : viewMode === 'month' ? 15 : 5; // Year = 5px (~150px/month)
    const rowHeight = 56;
    const headerHeight = 60;

    // Render Window
    const daysToRender = viewMode === 'year' ? 365 * 5 : 365 * 2; // Render 5 years for Year View
    const totalWidth = daysToRender * colWidth;
    const totalHeight = Math.max(tasks.length * rowHeight + 100, 600);

    // Generate Date Headers
    const topLayer = []; // Years (in year mode) or Months
    const bottomLayer = []; // Months (in year mode) or Days

    let currentDate = new Date(addDays(projectStartDate, -7));

    // Grouping Trackers
    let currentTopLabel = null;
    let topStartLeft = 0;

    let currentBottomLabel = null; // Used only for Year view grouping
    let bottomStartLeft = 0;

    for (let i = 0; i < daysToRender; i++) {
        const date = new Date(currentDate);
        const left = i * colWidth;

        // --- TOP LAYER ---
        let topLabelText = '';
        if (viewMode === 'year') {
            topLabelText = date.getFullYear().toString();
        } else {
            topLabelText = date.toLocaleString('default', { month: 'long', year: 'numeric' });
        }

        if (topLabelText !== currentTopLabel) {
            if (currentTopLabel) {
                topLayer.push({
                    label: currentTopLabel,
                    left: topStartLeft,
                    width: left - topStartLeft
                });
            }
            currentTopLabel = topLabelText;
            topStartLeft = left;
        }

        // --- BOTTOM LAYER ---
        if (viewMode === 'year') {
            // Group by Month
            const bottomLabelText = date.toLocaleString('default', { month: 'short' });
            if (bottomLabelText !== currentBottomLabel) {
                if (currentBottomLabel) {
                    bottomLayer.push({
                        label: currentBottomLabel,
                        left: bottomStartLeft,
                        width: left - bottomStartLeft,
                        isYearView: true
                    });
                }
                currentBottomLabel = bottomLabelText;
                bottomStartLeft = left;
            }
        } else {
            // Per Day
            bottomLayer.push({
                label: date.getDate(),
                subLabel: date.toLocaleString('default', { weekday: 'narrow' }),
                left: left,
                width: colWidth,
                isWeekend: date.getDay() === 0 || date.getDay() === 6,
                isYearView: false
            });
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Push remaining groups
    topLayer.push({
        label: currentTopLabel,
        left: topStartLeft,
        width: (daysToRender * colWidth) - topStartLeft
    });

    if (viewMode === 'year' && currentBottomLabel) {
        bottomLayer.push({
            label: currentBottomLabel,
            left: bottomStartLeft,
            width: (daysToRender * colWidth) - bottomStartLeft,
            isYearView: true
        });
    }

    // Handle Local Scroll (Horizontal Sync Only) + Parent Vertical Sync
    const handleScroll = (e) => {
        // Horizontal Sync for Header
        if (headerRef.current) {
            headerRef.current.scrollLeft = e.target.scrollLeft;
        }

        // Parent Vertical Sync
        if (onScroll) {
            onScroll(e);
        }
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
                {/* Top Layer */}
                <div className="h-[30px] border-b border-border/30 flex relative min-w-max">
                    {topLayer.map((m, i) => (
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

                {/* Bottom Layer */}
                <div className="h-[30px] w-[max-content] relative">
                    {bottomLayer.map((d, i) => (
                        <div
                            key={i}
                            className={`absolute top-0 h-full border-r border-border/30 flex flex-col justify-center items-center text-[10px] select-none ${!d.isYearView && d.isWeekend ? 'bg-white/5' : ''} ${d.isYearView ? 'bg-void/50' : ''}`}
                            style={{ left: d.left, width: d.width }}
                        >
                            {d.isYearView ? (
                                <span className="text-stone font-bold tracking-wider">{d.label}</span>
                            ) : (
                                <>
                                    <span className="text-gray-500">{d.subLabel}</span>
                                    <span className="text-stone font-bold">{d.label}</span>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Grid */}
            <div
                className="flex-1 overflow-auto relative bg-grid-pattern bg-[length:40px_40px]"
                onScroll={handleScroll}
                ref={scrollRef}
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
                            isSummary={task.isSummary} // Pass summary flag
                            onMouseDown={(e) => {
                                if (task.isSummary) return; // Explicit disable
                                onTaskDragStart(e, task);
                            }}
                            onDoubleClick={() => onEditTask(task)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
