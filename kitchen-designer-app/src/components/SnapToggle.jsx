import React from 'react';
import useStore from '../store/useStore';

const SnapToggle = () => {
    const snapEnabled = useStore((state) => state.snapEnabled);
    const toggleSnap = useStore((state) => state.toggleSnap);

    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-panel/90 backdrop-blur border border-border px-4 py-2 rounded-full shadow-xl flex items-center gap-4">
            <p className="text-xs font-mono text-bronze">
                <span className="text-gray-500">Grid:</span> 1m (10cm sub)
            </p>
            <span className="text-border">|</span>
            <button
                onClick={toggleSnap}
                className={`text-xs font-mono px-2 py-1 rounded transition-colors ${snapEnabled
                    ? 'bg-emerald/20 text-emerald border border-emerald/50'
                    : 'bg-gray-700/50 text-gray-500 border border-gray-600'
                    }`}
            >
                Snap: {snapEnabled ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};

export default SnapToggle;
