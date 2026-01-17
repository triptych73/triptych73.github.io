// Basic helpers
export const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export const getDiffDays = (d1, d2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((new Date(d1) - new Date(d2)) / oneDay);
};

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
};

// --- Hierarchy & WBS Logic ---

/**
 * Re-processes a flat list of tasks to:
 * 1. Assign WBS numbers (1, 1.1, 1.2) based on hierarchy.
 * 2. Identify Summary tasks (tasks that have children).
 * 3. Recalculate Summary task dates/durations based on children.
 * 
 * Assumes tasks have a 'parentId' property. If not, it tries to infer from ID structure (legacy).
 */
export const processTasks = (flatTasks) => {
    // 1. Build Map for easy access
    const taskMap = new Map();
    // Use stable ID if available, otherwise fallback.
    flatTasks.forEach(t => taskMap.set(t.id, { ...t, children: [], _isProcessed: false }));

    // 2. Build Tree Structure (infer parentId if missing)
    const rootTasks = [];

    // First pass: wiring up parents
    flatTasks.forEach(t => {
        const node = taskMap.get(t.id);

        let parentId = node.parentId;

        // Legacy inference: If no parentId, try to deduce from ID 1.1 -> 1
        // ONLY valid if we haven't already migrated to UUIDs. 
        // If ID looks like "1.1", we try to find "1".
        if (!parentId && t.id.includes('.') && !t.id.startsWith('t')) {
            const parts = t.id.split('.');
            parts.pop(); // Remove last part
            const inferredParentId = parts.join('.');
            if (taskMap.has(inferredParentId)) {
                parentId = inferredParentId;
                node.parentId = parentId; // Normalize: Set the parentId for future stable usage
            }
        }

        if (parentId && taskMap.has(parentId)) {
            taskMap.get(parentId).children.push(node);
        } else {
            rootTasks.push(node);
        }
    });

    // 3. Process Tree (DFS) for WBS & Dates

    const processNode = (node, numberingPrefix) => {
        const isSummary = node.children && node.children.length > 0;
        node.isSummary = isSummary;
        node.wbs = numberingPrefix; // Assign calculated WBS (e.g. "1.2")

        // Recurse first
        node.children.forEach((child, index) => {
            const childNumber = `${numberingPrefix}.${index + 1}`;
            processNode(child, childNumber);
        });

        if (isSummary) {
            // Aggregate from children
            let minStart = null;
            let maxEnd = null;

            node.children.forEach(child => {
                const childStart = new Date(child.startDate);
                const childEnd = addDays(childStart, child.duration);

                if (!minStart || childStart < minStart) minStart = childStart;
                if (!maxEnd || childEnd > maxEnd) maxEnd = childEnd;
            });

            if (minStart && maxEnd) {
                node.startDate = minStart.toISOString();
                node.duration = getDiffDays(maxEnd, minStart);
                // Ensure min duration 1
                if (node.duration < 1) node.duration = 1;
            }
        }
    };

    // Process roots with "1", "2", "3"
    rootTasks.forEach((node, index) => {
        processNode(node, `${index + 1}`);
    });

    // 4. Flatten back to list in DFS order (for rendering)
    const processedList = [];
    const flatten = (nodes, level = 0) => {
        nodes.forEach(node => {
            node.level = level;

            // Assign Category based on Depth
            if (level === 0) node.category = 'phase';
            else if (level === 1) node.category = 'task';
            else node.category = 'subtask';

            node.childIds = node.children.map(c => c.id);

            // Clean up internal props we don't need to save persistently/render
            // BUT we want to keep 'parentId', 'wbs', and 'childIds' for the app.
            const { children, _isProcessed, ...cleanNode } = node;
            processedList.push(cleanNode);
            flatten(node.children, level + 1);
        });
    };
    flatten(rootTasks);

    return processedList;
};
