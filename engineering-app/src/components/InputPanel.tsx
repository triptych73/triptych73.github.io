import React from 'react';
import type { StaircaseInputs } from '../core/physics';

interface InputPanelProps {
    inputs: StaircaseInputs;
    setInputs: React.Dispatch<React.SetStateAction<StaircaseInputs>>;
    isOpen: boolean;
    toggleOpen: () => void;
}

export const InputPanel: React.FC<InputPanelProps> = ({ inputs, setInputs, isOpen, toggleOpen }) => {

    // Helper to handle number inputs safely
    const handleNum = (field: keyof StaircaseInputs, value: string) => {
        const num = value === '' ? 0 : parseFloat(value);
        // We cast to any to update dynamic key, but in reality we should be safer. 
        // For this port, it's acceptable.
        setInputs(prev => ({ ...prev, [field]: num }));
    };

    const handleChange = (field: keyof StaircaseInputs, value: any) => {
        setInputs(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="absolute top-0 left-0 p-4 z-10 w-full md:w-96 pointer-events-none">
            <div className="bg-gray-900/90 backdrop-blur text-white rounded-xl shadow-2xl border border-gray-700 pointer-events-auto transition-all">

                <div
                    className="p-4 border-b border-gray-700 flex justify-between items-center cursor-pointer select-none"
                    onClick={toggleOpen}
                >
                    <h2 className="text-lg font-bold text-blue-400">Design Inputs</h2>
                    <span className={`transition transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                </div>

                {isOpen && (
                    <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                        {/* Material & Load */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs text-gray-400">Grade</label>
                                <select
                                    className="w-full bg-gray-800 rounded p-1 text-sm border border-gray-600 focus:border-blue-500 outline-none"
                                    value={inputs.steelGrade}
                                    onChange={(e) => handleChange('steelGrade', e.target.value)}
                                >
                                    <option value="S275">S275</option>
                                    <option value="S355">S355</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs text-gray-400">Load</label>
                                <select
                                    className="w-full bg-gray-800 rounded p-1 text-sm border border-gray-600 focus:border-blue-500 outline-none"
                                    value={inputs.liveLoadType}
                                    onChange={(e) => handleChange('liveLoadType', e.target.value)}
                                >
                                    <option value="domestic">Domestic</option>
                                    <option value="office">Office</option>
                                </select>
                            </div>
                        </div>

                        {/* Steps */}
                        <div>
                            <label className="text-xs text-gray-400 flex justify-between">
                                <span>Steps</span>
                                <span>{inputs.stepCount}</span>
                            </label>
                            <input
                                type="range" min="3" max="25"
                                className="w-full accent-blue-500"
                                value={inputs.stepCount}
                                onChange={(e) => handleChange('stepCount', parseInt(e.target.value))}
                            />
                        </div>

                        {/* Geometry */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs text-gray-400">Rise (mm)</label>
                                <input
                                    type="number" className="w-full bg-gray-800 rounded p-1 text-sm border border-gray-600"
                                    value={inputs.rise || ''}
                                    onChange={(e) => handleNum('rise', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400">Going (mm)</label>
                                <input
                                    type="number" className="w-full bg-gray-800 rounded p-1 text-sm border border-gray-600"
                                    value={inputs.going || ''}
                                    onChange={(e) => handleNum('going', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs text-gray-400">Width (mm)</label>
                                <input
                                    type="number" className="w-full bg-gray-800 rounded p-1 text-sm border border-gray-600"
                                    value={inputs.width || ''}
                                    onChange={(e) => handleNum('width', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400">Thick (mm)</label>
                                <input
                                    type="number" className="w-full bg-gray-800 rounded p-1 text-sm border border-gray-600"
                                    value={inputs.thickness || ''}
                                    onChange={(e) => handleNum('thickness', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Stringers */}
                        <div className="pt-4 border-t border-gray-700">
                            <label className="flex items-center text-sm font-bold text-gray-300 mb-2 cursor-pointer">
                                <input
                                    type="checkbox" className="mr-2 accent-blue-500"
                                    checked={inputs.cheekVisible}
                                    onChange={(e) => handleChange('cheekVisible', e.target.checked)}
                                />
                                Add Stringers
                            </label>

                            {inputs.cheekVisible && (
                                <div className="grid grid-cols-2 gap-3 pl-2 border-l-2 border-gray-700 animate-in fade-in slide-in-from-left-2">
                                    <select
                                        className="bg-gray-800 rounded p-1 text-sm border border-gray-600"
                                        value={inputs.cheekSide}
                                        onChange={(e) => handleChange('cheekSide', e.target.value)}
                                    >
                                        <option value="one">One Side</option>
                                        <option value="two">Two Sides</option>
                                    </select>
                                    <input
                                        type="number" placeholder="Height"
                                        className="bg-gray-800 rounded p-1 text-sm border border-gray-600"
                                        value={inputs.cheekHeight || ''}
                                        onChange={(e) => handleNum('cheekHeight', e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
