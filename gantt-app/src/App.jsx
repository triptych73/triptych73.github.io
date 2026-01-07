import React, { useState, useRef, useEffect } from 'react';
import { GanttHeader } from './components/Gantt/GanttHeader';
import { Sidebar } from './components/Gantt/Sidebar';
import { Timeline } from './components/Gantt/Timeline';
import { TaskEditModal } from './components/Gantt/TaskEditModal';
import { initialTasks } from './lib/data';
import { signIn, subscribeToData, saveData } from './lib/firebase';
import { getEarliestStart, cascadeMoves, hasCycle } from './lib/dependencies';

function App() {
  const [tasks, setTasks] = useState([]); // Start empty, load from FB
  const [editingTask, setEditingTask] = useState(null);
  const [viewMode, setViewMode] = useState('week');
  const [projectStartDate, setProjectStartDate] = useState(new Date('2024-01-01'));
  // Mobile View State
  const [mobileView, setMobileView] = useState('list'); // 'list' or 'chart'
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // IPad Landscape is ~1024
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Firebase Init
  useEffect(() => {
    signIn();
    const unsubscribe = subscribeToData((data) => {
      if (data) {
        setProjectStartDate(new Date(data.projectStartDate));
        setTasks(data.tasks);
      }
    });
    return () => unsubscribe && unsubscribe();
  }, []);

  // Save Trigger
  const persistData = (newTasks) => {
    saveData(newTasks, projectStartDate);
  };

  const sidebarRef = useRef(null);
  const timelineRef = useRef(null);
  const isScrolling = useRef(false);

  // Scroll Sync
  const handleScroll = (source) => (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    const { scrollTop } = e.target;
    if (source === 'sidebar' && timelineRef.current) timelineRef.current.scrollTop = scrollTop;
    else if (source === 'timeline' && sidebarRef.current) sidebarRef.current.scrollTop = scrollTop;
    setTimeout(() => { isScrolling.current = false; }, 50);
  };

  // Undo/Redo State
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  // Wrapper to set tasks with history
  const updateTasks = (newTasks, addToHistory = true) => {
    if (addToHistory) {
      setHistory(prev => [...prev, tasks]);
      setFuture([]);
    }
    setTasks(newTasks);
    persistData(newTasks);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const previous = history[history.length - 1];
    const newHistory = history.slice(0, -1);

    setFuture(prev => [tasks, ...prev]);
    setHistory(newHistory);
    setTasks(previous);
    persistData(previous);
  };

  const handleRedo = () => {
    if (future.length === 0) return;
    const next = future[0];
    const newFuture = future.slice(1);

    setHistory(prev => [...prev, tasks]);
    setFuture(newFuture);
    setTasks(next);
    persistData(next);
  };

  const handleAddTask = () => {
    const newTask = {
      id: `t${Date.now()}`,
      name: 'New Phase',
      startDate: new Date().toISOString(),
      duration: 5,
      progress: 0,
      type: 'task',
      dependencies: []
    };
    const newTaskList = [...tasks, newTask];
    updateTasks(newTaskList);
  };

  const handleTaskReorder = (dragIndex, dropIndex) => {
    if (dragIndex === dropIndex) return;

    const newTasks = [...tasks];

    // Safety check
    if (dragIndex < 0 || dragIndex >= newTasks.length) {
      console.error("Invalid drag index:", dragIndex);
      return;
    }

    const [removed] = newTasks.splice(dragIndex, 1);

    // Double check removal
    if (!removed) {
      console.error("Failed to remove task at index:", dragIndex);
      return;
    }

    let finalIndex = dropIndex;
    if (finalIndex > dragIndex) {
      finalIndex -= 1;
    }

    // Clamp
    finalIndex = Math.max(0, Math.min(finalIndex, newTasks.length));

    newTasks.splice(finalIndex, 0, removed);
    setTasks(newTasks);
    persistData(newTasks);
  };

  // Drag & Resize State
  const [dragState, setDragState] = useState(null); // { task, startX, originalDate, originalDuration, type: 'move' | 'resize' }

  const handleDragStart = (e, task) => {
    // Check if resizing (based on data attribute set in TaskBar)
    const isResize = e.target.getAttribute('data-resize') === 'right';
    const startX = e.clientX;

    setDragState({
      task,
      startX,
      originalDate: new Date(task.startDate),
      originalDuration: task.duration,
      type: isResize ? 'resize' : 'move',
      snapshot: [...tasks] // Capture state before drag
    });

    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!dragState) return;

    const diffX = e.clientX - dragState.startX;
    // 1 day = 40px (assuming week view)
    // TODO: Dynamic colWidth based on viewMode
    const colWidth = viewMode === 'day' ? 60 : viewMode === 'week' ? 40 : 20;
    const daysDiff = Math.round(diffX / colWidth);

    if (dragState.type === 'move') {
      let newDate = new Date(dragState.originalDate);
      newDate.setDate(newDate.getDate() + daysDiff);

      // 1. Clamping: Check predecessors
      const earliestStart = getEarliestStart(dragState.task, tasks);
      if (earliestStart && newDate < earliestStart) {
        newDate = earliestStart;
      }

      setTasks(prev => prev.map(t =>
        t.id === dragState.task.id
          ? { ...t, startDate: newDate.toISOString() }
          : t
      ));
    } else if (dragState.type === 'resize') {
      const newDuration = Math.max(1, dragState.originalDuration + daysDiff);

      setTasks(prev => prev.map(t =>
        t.id === dragState.task.id
          ? { ...t, duration: newDuration }
          : t
      ));
    }
  };

  const handleMouseUp = () => {
    if (dragState) {
      // 2. Cascading: Update successors based on final position
      // We must grab the 'current' state of the task we just moved
      const modifiedTask = tasks.find(t => t.id === dragState.task.id);

      if (modifiedTask) {
        const cascadedTasks = cascadeMoves(modifiedTask, tasks);

        // Check if anything actually changed from the snapshot
        // Simple length check or JSON compare (optimization)
        // For safety, we always push if we reached this stage (drag start implies intent)

        setHistory(prev => [...prev, dragState.snapshot]);
        setFuture([]);

        setTasks(cascadedTasks);
        persistData(cascadedTasks);
      }
    }
    setDragState(null);
  };

  return (
    <div
      className="h-screen w-screen bg-midnight text-stone flex flex-col overflow-hidden font-ui select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <GanttHeader
        viewMode={viewMode}
        setViewMode={setViewMode}
        onAddTask={handleAddTask}
        onUndo={handleUndo}
        onRedo={handleRedo}
        canUndo={history.length > 0}
        canRedo={future.length > 0}
        status={status}
      />

      {/* Mobile Toggles */}
      {isMobile && (
        <div className="flex border-b border-border bg-void/50">
          <button
            onClick={() => setMobileView('list')}
            className={`flex-1 py-2 text-xs font-header tracking-wider uppercase ${mobileView === 'list' ? 'bg-bronze text-midnight' : 'text-stone'}`}
          >
            Task List
          </button>
          <button
            onClick={() => setMobileView('chart')}
            className={`flex-1 py-2 text-xs font-header tracking-wider uppercase ${mobileView === 'chart' ? 'bg-bronze text-midnight' : 'text-stone'}`}
          >
            Timeline
          </button>
        </div>
      )}

      <div className="flex-1 flex overflow-hidden relative">
        <div
          className={`w-full lg:w-80 flex-shrink-0 h-full overflow-y-auto overflow-x-hidden border-r border-border transition-all ${isMobile && mobileView !== 'list' ? 'hidden' : 'block'}`}
          ref={sidebarRef}
          onScroll={handleScroll('sidebar')}
        >
          <Sidebar
            tasks={tasks}
            onEditTask={setEditingTask}
            onReorderTasks={handleTaskReorder}
          />
        </div>

        <div
          className={`flex-1 h-full overflow-hidden transition-all ${isMobile && mobileView !== 'chart' ? 'hidden' : 'block'}`}
          ref={timelineRef}
        >
          <Timeline
            tasks={tasks}
            viewMode={viewMode}
            projectStartDate={projectStartDate}
            onScroll={handleScroll('timeline')}
            onTaskDragStart={handleDragStart}
            onEditTask={setEditingTask}
          />
        </div>
      </div>

      {editingTask && (
        <TaskEditModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={(updatedTask) => {
            // Cycle Check
            let hasError = false;
            if (updatedTask.dependencies) {
              updatedTask.dependencies.forEach(depId => {
                // Check if this new dependency creates a loop
                // We act as if the link exists
                if (hasCycle([...tasks], updatedTask.id, depId)) {
                  alert(`Circular dependency detected! Cannot depend on ${depId}`);
                  hasError = true;
                }
              });
            }
            if (hasError) return;

            // Constraint Check (Clamping)
            const earliestStart = getEarliestStart(updatedTask, tasks);
            if (earliestStart && new Date(updatedTask.startDate) < earliestStart) {
              alert(`Start date adjusted to obey dependencies.`);
              updatedTask.startDate = earliestStart.toISOString();
            }

            const newTaskList = tasks.map(t => t.id === updatedTask.id ? updatedTask : t);

            // Re-cascade (in case dates changed or deps changed)
            const cascaded = cascadeMoves(updatedTask, newTaskList);

            setTasks(cascaded);
            persistData(cascaded);
            setEditingTask(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
