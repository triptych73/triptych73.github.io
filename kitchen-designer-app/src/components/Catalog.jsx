import React from 'react';
import useStore from '../store/useStore';

const CATALOG_ITEMS = [
    { id: 'base-600', name: 'Base 600mm', width: 0.6, type: 'base', category: 'Cabinets' },
    { id: 'base-900', name: 'Base 900mm', width: 0.9, type: 'base', category: 'Cabinets' },
    { id: 'wall-600', name: 'Wall 600mm', width: 0.6, height: 0.72, depth: 0.3, type: 'wall', category: 'Cabinets', withPlinth: false },
    { id: 'tall-600', name: 'Tall 600mm', width: 0.6, height: 2.15, type: 'tall', category: 'Cabinets' },
    // Structure
    { id: 'struct-wall-2m', name: 'Wall 2m', width: 2.0, height: 2.4, depth: 0.15, type: 'structure', category: 'Structure', isWall: true },
    { id: 'struct-wall-1m', name: 'Wall 1m', width: 1.0, height: 2.4, depth: 0.15, type: 'structure', category: 'Structure', isWall: true },
];

const Catalog = () => {
    const addItem = useStore((state) => state.addItem);

    const handleAdd = (itemTemplate) => {
        addItem({
            id: crypto.randomUUID(),
            ...itemTemplate,
            position: [Math.random() * 2 - 1, 0, Math.random() * 2 - 1], // Random start pos
            rotation: [0, 0, 0]
        });
    };

    return (
        <div className="flex-1 overflow-y-auto p-4">
            {CATALOG_ITEMS.map((item) => (
                <button
                    key={item.id}
                    onClick={() => handleAdd(item)}
                    className="w-full text-left bg-void border border-border p-3 mb-2 rounded hover:border-bronze transition-colors group"
                >
                    <div className="text-stone font-bold text-xs uppercase tracking-wider group-hover:text-bronze">
                        {item.name}
                    </div>
                    <div className="text-gray-500 text-[10px] uppercase mt-1">
                        {item.category}
                    </div>
                </button>
            ))}
        </div>
    );
};

export default Catalog;
