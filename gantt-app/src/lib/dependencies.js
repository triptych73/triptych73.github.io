import { addDays } from './helpers';

// 1. Cycle Detection (DFS)
export const hasCycle = (tasks, sourceId, targetId) => {
    // If we make 'sourceId' depend on 'targetId', does 'targetId' already imply 'sourceId'?
    // We traverse up from targetId. If we hit sourceId, it's a cycle.

    // Quick check: Self dependency
    if (sourceId === targetId) return true;

    const visited = new Set();
    const stack = [targetId];

    while (stack.length > 0) {
        const currentId = stack.pop();
        if (visited.has(currentId)) continue;
        visited.add(currentId);

        const currentTask = tasks.find(t => t.id === currentId);
        if (!currentTask) continue; // Should not happen if integrity is good

        // If we found our source, then target depends on source. 
        // Making source depend on target would close the loop.
        if (currentTask.dependencies && currentTask.dependencies.includes(sourceId)) {
            return true;
        }

        // Add dependencies of current to stack
        if (currentTask.dependencies) {
            currentTask.dependencies.forEach(depId => stack.push(depId));
        }
    }

    return false;
};

// 2. Clamp Start Date (Impact of Predecessors on current Task)
export const getEarliestStart = (task, allTasks) => {
    if (!task.dependencies || task.dependencies.length === 0) return null;

    let maxEndDate = null;

    task.dependencies.forEach(depId => {
        const parent = allTasks.find(t => t.id === depId);
        if (parent) {
            const parentEnd = new Date(parent.startDate);
            parentEnd.setDate(parentEnd.getDate() + parent.duration);

            if (!maxEndDate || parentEnd > maxEndDate) {
                maxEndDate = parentEnd;
            }
        }
    });

    return maxEndDate;
};

// 3. Cascade Updates (Impact of current Task on Successors)
export const cascadeMoves = (movedTask, allTasks) => {
    const updatedTasks = [...allTasks];
    // Map for O(1) access
    const taskMap = new Map(updatedTasks.map(t => [t.id, t]));

    // Update the moved task in the map
    taskMap.set(movedTask.id, movedTask);

    const queue = [movedTask];
    const processed = new Set();

    while (queue.length > 0) {
        const current = queue.shift();
        if (processed.has(current.id)) continue;
        processed.add(current.id);

        const currentEnd = new Date(current.startDate);
        currentEnd.setDate(currentEnd.getDate() + current.duration);

        // Find direct successors (tasks that depend on current)
        updatedTasks.forEach(t => {
            if (t.dependencies && t.dependencies.includes(current.id)) {

                // Check if successor needs to move
                const successorStart = new Date(t.startDate);
                if (successorStart < currentEnd) {
                    // Push it!
                    const newStart = new Date(currentEnd);
                    const updatedSuccessor = {
                        ...t,
                        startDate: newStart.toISOString()
                    };

                    // Update in list/map
                    taskMap.set(t.id, updatedSuccessor);
                    const idx = updatedTasks.findIndex(x => x.id === t.id);
                    updatedTasks[idx] = updatedSuccessor;

                    // Add to queue to propagate further
                    queue.push(updatedSuccessor);
                }
            }
        });
    }

    return updatedTasks;
};
