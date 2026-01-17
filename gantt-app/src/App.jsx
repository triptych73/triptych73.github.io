import React, { useState, useRef, useEffect } from 'react';
import { GanttHeader } from './components/Gantt/GanttHeader';
import { Sidebar } from './components/Gantt/Sidebar';
import { Timeline } from './components/Gantt/Timeline';
import { TaskEditModal } from './components/Gantt/TaskEditModal';
import { initialTasks } from './lib/data';
import { signIn, subscribeToData, saveData } from './lib/firebase';
import { getEarliestStart, cascadeMoves, hasCycle } from './lib/dependencies';
import { processTasks } from './lib/helpers'; // Import helper

function App() {
  const [tasks, setTasks] = useState([]); // Start empty, load from FB
  const [editingTask, setEditingTask] = useState(null);
  const [viewMode, setViewMode] = useState('week');
  const [projectStartDate, setProjectStartDate] = useState(new Date('2024-01-01'));

  // Advanced View States
  const [showSummaryOnly, setShowSummaryOnly] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  // Mobile View State
  const [mobileView, setMobileView] = useState('list'); // 'list' or 'chart'
  const [isMobile, setIsMobile] = useState(false);

  // Phase Tab State
  const [activePhaseId, setActivePhaseId] = useState(null);

  // Derived: Filter Tasks by Phase
  // We want to show the specific Phase and its descendants
  const visibleTasks = React.useMemo(() => {
    // 1. Identify Phases
    const phases = tasks.filter(t => t.category === 'phase');

    // Auto-select first phase if none selected
    if (!activePhaseId && phases.length > 0) {
      // We can't setState in render, but we can return the default.
      // Better: logic in useEffect options, but quick hack: use first for logic if null.
      // Actually, we'll set it in an Effect.
    }

    const currentPhaseId = activePhaseId || (phases[0]?.id);

    if (!currentPhaseId) return tasks; // Fallback if no phases?

    const activePhase = tasks.find(t => t.id === currentPhaseId);
    if (!activePhase) return tasks;

    // Filter by WBS prefix
    // Phase WBS is "1", "2". Descendants are "1.1", "1.2". 
    // So startsWith(phase.wbs) covers it.
    let filtered = tasks.filter(t => t.wbs && t.wbs.startsWith(activePhase.wbs));

    if (showSummaryOnly) {
      filtered = filtered.filter(t => t.isSummary);
    }
    return filtered;

  }, [tasks, activePhaseId, showSummaryOnly]);

  useEffect(() => {
    const phases = tasks.filter(t => t.category === 'phase');
    if (!activePhaseId && phases.length > 0) {
      setActivePhaseId(phases[0].id);
    }
  }, [tasks]);

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
        // Process tasks on load to ensure valid WBS/Summary usage
        const processed = processTasks(data.tasks);
        setTasks(processed);
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
    isScrolling.current = true; // Lock

    // We strictly sync scrollTop
    const scrollTop = e.target.scrollTop;

    if (source === 'sidebar' && timelineRef.current) {
      timelineRef.current.scrollTop = scrollTop;
    }
    else if (source === 'timeline' && sidebarRef.current) {
      sidebarRef.current.scrollTop = scrollTop;
    }

    // Small timeout to prevent feedback loop
    setTimeout(() => { isScrolling.current = false; }, 10);
  };

  // Undo/Redo State
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  // Wrapper to set tasks with history
  const updateTasks = (newTasks, addToHistory = true) => {
    // Process hierarchy first!
    const processed = processTasks(newTasks);

    if (addToHistory) {
      setHistory(prev => [...prev, tasks]);
      setFuture([]);
    }
    setTasks(processed);
    persistData(processed);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const previous = history[history.length - 1];
    const newHistory = history.slice(0, -1);

    setFuture(prev => [tasks, ...prev]);
    setHistory(newHistory);
    // Process effectively idempotent but safe
    setTasks(processTasks(previous));
    persistData(previous);
  };

  const handleRedo = () => {
    if (future.length === 0) return;
    const next = future[0];
    const newFuture = future.slice(1);

    setHistory(prev => [...prev, tasks]);
    setFuture(newFuture);
    setTasks(processTasks(next));
    persistData(next);
  };

  const handleAddTask = (mode = 'phase') => {
    // Mode: 'phase' (Root+Child), 'task' (Sibling), 'subtask' (Child)

    let parentId = null;
    let insertIndex = tasks.length;
    let selectedTask = null;

    if (selectedTaskId) {
      selectedTask = tasks.find(t => t.id === selectedTaskId);
    }

    // Determine Parent & Position based on Mode & Selection
    if (mode === 'subtask') {
      if (selectedTask) {
        parentId = selectedTask.id;
        insertIndex = tasks.length; // Appending is safe, processTasks sorts hierarchy? 
        // Actually, for better UX we might want it next to the parent, but list is regenerated anyway.
      } else {
        alert("Select a task to add a subtask to.");
        return;
      }
    } else if (mode === 'task') {
      if (selectedTask) {
        parentId = selectedTask.parentId;
        insertIndex = tasks.indexOf(selectedTask) + 1;
      } else {
        // Treat as direct child of Active Phase
        parentId = activePhaseId;
        // Insert at end of Phase block?
        // We don't track indices easily. Append to tasks is easiest, 
        // as long as parentId is correct, processTasks puts it in the right place.
        insertIndex = tasks.length;
      }
    } else {
      // 'phase' - Always Root
      parentId = null;
      insertIndex = tasks.length;
    }

    const newTasks = [...tasks];

    if (mode === 'phase') {
      // Adding New Phase (Root + Child)
      const phaseId = `t${Date.now()}`;
      const childId = `t${Date.now() + 1}`;

      const newPhase = {
        id: phaseId,
        name: 'New Phase',
        startDate: new Date().toISOString(),
        duration: 1,
        progress: 0,
        type: 'task',
        category: 'phase',
        dependencies: [],
        parentId: null
      };

      // Auto-switch to new phase?
      // setActivePhaseId(phaseId); // Can't do immediately before render cycle?
      // We'll let user select it.

      const newChild = {
        id: childId,
        name: 'Phase Task 1',
        startDate: new Date().toISOString(),
        duration: 5,
        progress: 0,
        type: 'task',
        dependencies: [],
        parentId: phaseId
      };

      if (insertIndex === tasks.length) {
        newTasks.push(newPhase, newChild);
      } else {
        newTasks.splice(insertIndex, 0, newPhase, newChild);
      }
    } else {
      // Single Task (Sibling or Subtask)
      const newTask = {
        id: `t${Date.now()}`,
        name: 'New Task',
        startDate: new Date().toISOString(),
        duration: 5,
        progress: 0,
        type: 'task',
        // Category will be auto-assigned by processTasks
        dependencies: [],
        parentId: parentId
      };

      if (insertIndex === tasks.length) {
        newTasks.push(newTask);
      } else {
        newTasks.splice(insertIndex, 0, newTask);
      }
    }

    updateTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    const getDescendants = (rootId) => {
      return tasks.filter(t => t.id !== rootId && t.wbs && t.wbs.startsWith(tasks.find(x => x.id === rootId)?.wbs + '.'));
    };

    const descendants = getDescendants(taskId);
    const count = descendants.length;

    if (confirm(`Delete "${task.name}"? ${count > 0 ? `(Includes ${count} subtasks)` : ''}`)) {
      const idsToDelete = new Set([taskId, ...descendants.map(t => t.id)]);
      const newTasks = tasks.filter(t => !idsToDelete.has(t.id));
      updateTasks(newTasks);
    }
  };

  const handleTaskReorder = (dragIndex, dropIndex) => {
    if (dragIndex === dropIndex) return;

    // View-Dependent Reorder Logic
    // If in Summary Only mode, we are moving BLOCKS of tasks.
    // If in Full Mode, we are moving single rows (which might break hierarchy if we aren't careful, 
    // but users asked for reordering to auto-update numbers).

    // Visual Indices (passed from UI) -> Real Indices in 'tasks' array
    // We need to map the visible items back to real items.

    let activeList = tasks;
    if (showSummaryOnly) {
      activeList = tasks.filter(t => t.isSummary);
    }

    const dragTask = activeList[dragIndex];

    // We want to insert AFTER the target drop index if moving down, etc.
    // Sidebar logic usually gives us the visual index swap. 
    // But dropping 'on' index 5 when dragging 2 means 2 goes to 5.

    // However, in Summary Mode, if we move Summary A to position of Summary B,
    // we effectively want to move All of A's descendants to allow A to take B's spot.

    const newTasks = [...tasks];

    if (showSummaryOnly) {
      // Block Move Logic
      // 1. Identify Drag Block (Parent + Descendants)
      // 2. Identify Drop Target Block
      // 3. Move Drag Block before/after Drop Block

      // Helper to find descendants in linear list
      const getDescendants = (rootId) => {
        const indices = [];
        // Simple approach: processTasks builds tree, but we have flat list.
        // Descendants are usually contiguous after processTasks? Yes.
        // But let's be robust: find all with parentId recursively?
        // Or just trust the WBS prefix if we are confident? 
        // "1.1" is child of "1". "1.1.2" is child of "1".
        // Let's use the flat list WBS for speed if available.

        const root = tasks.find(t => t.id === rootId);
        if (!root) return [];

        return tasks.filter(t => t.id !== rootId && t.wbs.startsWith(root.wbs + '.'));
      };

      const dragBlock = [dragTask, ...getDescendants(dragTask.id)];

      // Remove Drag Block
      const dragIds = new Set(dragBlock.map(t => t.id));
      const limitTasks = newTasks.filter(t => !dragIds.has(t.id));

      // Find insertion point
      // The DropIndex tells us which SUMMARY task we dropped on/near.
      const dropTargetSummary = activeList[dropIndex];

      // We need to find where 'dropTargetSummary' is in the 'limitTasks' list
      // and insert our block relative to it.
      const realDropIndex = limitTasks.findIndex(t => t.id === dropTargetSummary.id);

      let finalIndex = realDropIndex;
      if (dragIndex < dropIndex) {
        // Moving down, put after target block? 
        // Sidebar returns just row indices. 
        // If dragging row 0 to row 1, we want row 0 to be after row 1.
        // So we insert AFTER dropTargetSummary + its descendants.
        const targetDescendants = getDescendants(dropTargetSummary.id);
        finalIndex = limitTasks.indexOf(targetDescendants[targetDescendants.length - 1] || dropTargetSummary) + 1;
      }

      // Insert
      limitTasks.splice(finalIndex, 0, ...dragBlock);
      updateTasks(limitTasks);

    } else {
      // Standard Reorder (Single Item)
      // Note: Moving a parent in Full View breaks hierarchy unless we move children too?
      // User asked: "When summary tasks are reordered... numbers reordered... children numbers reordered"
      // Implies Block Move is desired even in Full View if dragging a Parent?
      // Let's stick to standard single row move for specific tweaks, 
      // unless it is a Summary, then we might strictly enforce Block Move?
      // For now, let's implement standard List Move, but relying on processTasks 
      // to fix WBS. If you move a Parent away from children, they become orphans 
      // (promote to root) or get adopted by new neighbor? 
      // Current 'processTasks' relies on 'parentId'. 
      // Reordering the list DOES NOT change 'parentId' automatically.
      // We effectively just change the 'sort order'. 
      // processTasks iterates flat list. If parentId links exist, logic holds.
      // WBS is generated by Tree Traversal. Tree structure depends on parentId.
      // So list order ONLY affects sibling order (e.g., 1.1 vs 1.2).

      // CORRECT LOGIC:
      // Just move the row. 
      // 'processTasks' builds tree from parentIds. 
      // Then it traverses tree. Sibling order is determined by... insertion order into children array?
      // Yes: `taskMap.get(parentId).children.push(node)`. 
      // So list order MATTERS for sibling order.

      // So, simple row move works for reordering siblings!

      if (dragIndex < 0 || dragIndex >= newTasks.length) return;
      const [removed] = newTasks.splice(dragIndex, 1);

      let finalIndex = dropIndex;
      if (finalIndex > dragIndex) finalIndex -= 1;
      finalIndex = Math.max(0, Math.min(finalIndex, newTasks.length));

      newTasks.splice(finalIndex, 0, removed);
      updateTasks(newTasks);
    }
  };

  const [dragState, setDragState] = useState(null);

  const handleDragStart = (e, task) => {
    e.stopPropagation(); // prevent row selection
    setDragState({
      task,
      startX: e.clientX,
      originalStartDate: new Date(task.startDate),
      originalDuration: task.duration,
      type: e.shiftKey ? 'resize' : 'move' // Shift to resize
    });
  };

  const handleMouseMove = (e) => {
    if (!dragState) return;

    const daysDiff = Math.round((e.clientX - dragState.startX) / (viewMode === 'day' ? 60 : viewMode === 'week' ? 40 : 20));

    if (dragState.type === 'move') {
      let newDate = addDays(dragState.originalStartDate, daysDiff);

      // Constraint: Can't move before dependencies
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
        // Cascade changes to dependents
        const cascadedTasks = cascadeMoves(modifiedTask, tasks);
        // Process to update summaries
        updateTasks(cascadedTasks);
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
        showSummaryOnly={showSummaryOnly}
        setShowSummaryOnly={setShowSummaryOnly}
        onImportData={() => {
          if (confirm('Verify: This will OVERWRITE all current tasks with the Excel data. Continue?')) {
            // Auto-calculate start date based on earliest task
            const minDate = initialTasks.reduce((min, t) => {
              const d = new Date(t.startDate);
              return d < min ? d : min;
            }, new Date(8640000000000000));

            // Buffer of 7 days
            const newStartDate = new Date(minDate);
            newStartDate.setDate(newStartDate.getDate() - 7);

            setProjectStartDate(newStartDate);
            // Process Initial Tasks through Engine
            console.log("Importing Tasks (Raw):", initialTasks);
            const processed = processTasks(initialTasks);
            console.log("Importing Tasks (Processed):", processed);
            setTasks(processed);
            saveData(processed, newStartDate);

            alert('Data reset to v1.2.1 (Excel Import) & Timeline adjusted.');
          }
        }}
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

      {/* Phase Tabs */}
      <div className="flex bg-void/30 border-b border-border pl-4 gap-1 pt-2">
        {tasks.filter(t => t.category === 'phase').map(phase => (
          <button
            key={phase.id}
            onClick={() => {
              setActivePhaseId(phase.id);
              setSelectedTaskId(null); // Clear selection on switch
            }}
            className={`px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-t-lg transition-colors border-t border-l border-r border-transparent ${activePhaseId === phase.id
              ? 'bg-midnight text-bronze border-border border-b-midnight -mb-[1px] relative z-10'
              : 'text-stone/50 hover:text-stone hover:bg-white/5'
              }`}
          >
            {phase.name}
          </button>
        ))}
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        <div
          className={`w-full lg:w-80 flex-shrink-0 h-full overflow-y-auto no-scrollbar border-r border-border transition-all ${isMobile && mobileView !== 'list' ? 'hidden' : 'block'}`}
        >
          <Sidebar
            tasks={visibleTasks} // Use Filtered List
            selectedTaskId={selectedTaskId}
            onSelectTask={setSelectedTaskId}
            onEditTask={setEditingTask}
            onReorderTasks={handleTaskReorder}
            scrollRef={sidebarRef}
            onScroll={handleScroll('sidebar')}
          />
        </div>

        {/* Timeline Area */}
        <Timeline
          tasks={visibleTasks} // Use Filtered List
          viewMode={viewMode}
          projectStartDate={projectStartDate}
          onTaskDragStart={handleDragStart}
          onEditTask={setEditingTask}
          scrollRef={timelineRef}
          onScroll={handleScroll('timeline')}
        />
      </div>

      {editingTask && (
        <TaskEditModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={(updatedTask, isDelete) => {
            if (isDelete) {
              handleDeleteTask(editingTask.id);
              setEditingTask(null);
              return;
            }

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
