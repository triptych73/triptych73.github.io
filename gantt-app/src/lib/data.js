export const initialTasks = [
    {
        id: 't1',
        name: 'Project Kickoff',
        startDate: new Date('2024-01-01').toISOString(),
        duration: 1,
        progress: 100,
        type: 'milestone',
        dependencies: []
    },
    {
        id: 't2',
        name: 'Site Survey & Scaffolding',
        startDate: new Date('2024-01-03').toISOString(),
        duration: 10,
        progress: 60,
        type: 'task',
        dependencies: ['t1']
    },
    {
        id: 't3',
        name: 'Crypt Waterproofing',
        startDate: new Date('2024-01-15').toISOString(),
        duration: 10,
        progress: 0,
        type: 'task',
        dependencies: ['t2']
    },
    {
        id: 't4',
        name: 'North Elevation',
        startDate: new Date('2024-01-15').toISOString(),
        duration: 20,
        progress: 10,
        type: 'task',
        dependencies: ['t2']
    },
    {
        id: 't5',
        name: 'Bronze Cladding',
        startDate: new Date('2024-02-05').toISOString(),
        duration: 10,
        progress: 0,
        type: 'task',
        dependencies: ['t3', 't4']
    },
    {
        id: 't6',
        name: 'Practical Completion',
        startDate: new Date('2024-02-20').toISOString(),
        duration: 1,
        progress: 0,
        type: 'milestone',
        dependencies: ['t5']
    },
];
