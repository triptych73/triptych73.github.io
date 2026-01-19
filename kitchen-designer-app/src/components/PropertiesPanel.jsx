import React from 'react';
import useStore from '../store/useStore';

const PropertiesPanel = () => {
    const selection = useStore((state) => state.selection);
    const items = useStore((state) => state.items);
    const updateItem = useStore((state) => state.updateItem);

    if (selection.length === 0) {
        return (
            <div className="flex-1 p-4 text-center">
                <p className="text-xs text-gray-500 font-mono mt-10">Select an item to edit</p>
            </div>
        );
    }

    const selectedId = selection[0];
    const selectedItem = items.find(i => i.id === selectedId);

    if (!selectedItem) return null;

    const handleChange = (field, value) => {
        updateItem(selectedId, { [field]: value });
    };

    return (
        <div className="flex-1 p-4 overflow-y-auto">
            <h3 className="text-bronze font-serif text-sm border-b border-border pb-2 mb-4">
                {selectedItem.name}
            </h3>

            {/* Position */}
            <div className="mb-4">
                <label className="text-xs text-gray-500 block mb-1">Position (X, Y, Z)</label>
                <div className="grid grid-cols-3 gap-2">
                    {['x', 'y', 'z'].map((axis, i) => (
                        <input
                            key={axis}
                            type="number"
                            step="0.01"
                            value={selectedItem.position[i].toFixed(2)}
                            onChange={(e) => {
                                const newPos = [...selectedItem.position];
                                newPos[i] = parseFloat(e.target.value);
                                handleChange('position', newPos);
                            }}
                            className="bg-void border border-border text-stone text-xs p-1 w-full"
                        />
                    ))}
                </div>
            </div>

            {/* Rotation */}
            <div className="mb-4">
                <label className="text-xs text-gray-500 block mb-1">Rotation</label>
                <div className="grid grid-cols-3 gap-2">
                    <button
                        onClick={() => {
                            const newRot = [...selectedItem.rotation];
                            newRot[1] += Math.PI / 2;
                            handleChange('rotation', newRot);
                        }}
                        className="col-span-3 bg-border text-xs py-1 hover:bg-bronze transition-colors"
                    >
                        Rotate 90°
                    </button>
                </div>
            </div>

            {/* === DIMENSIONS === */}
            <div className="mb-2 mt-4 border-t border-border pt-4">
                <label className="text-xs text-bronze block mb-2 uppercase tracking-widest">Dimensions</label>
            </div>

            {/* Width */}
            <div className="mb-3">
                <label className="text-xs text-gray-500 block mb-1">Width (m)</label>
                <input
                    type="number"
                    step="0.05"
                    min="0.1"
                    value={selectedItem.width || 0.6}
                    onChange={(e) => handleChange('width', parseFloat(e.target.value))}
                    className="bg-void border border-border text-stone text-xs p-1 w-full"
                />
            </div>

            {/* Height */}
            <div className="mb-3">
                <label className="text-xs text-gray-500 block mb-1">Height (m)</label>
                <input
                    type="number"
                    step="0.05"
                    min="0.1"
                    value={selectedItem.height || 0.87}
                    onChange={(e) => handleChange('height', parseFloat(e.target.value))}
                    className="bg-void border border-border text-stone text-xs p-1 w-full"
                />
            </div>

            {/* Depth */}
            <div className="mb-3">
                <label className="text-xs text-gray-500 block mb-1">Depth (m)</label>
                <input
                    type="number"
                    step="0.05"
                    min="0.05"
                    value={selectedItem.depth || 0.6}
                    onChange={(e) => handleChange('depth', parseFloat(e.target.value))}
                    className="bg-void border border-border text-stone text-xs p-1 w-full"
                />
            </div>

            {/* Delete Button */}
            <div className="mt-8 border-t border-border pt-4">
                <button
                    onClick={() => useStore.getState().removeItem(selectedId)}
                    className="w-full bg-alert/20 text-alert border border-alert/50 py-2 text-xs uppercase hover:bg-alert hover:text-white transition-colors"
                >
                    Delete Item
                </button>
            </div>
        </div>
    );
};

export default PropertiesPanel;
