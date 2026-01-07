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
        setInputs(prev => ({ ...prev, [field]: num }));
    };

    const handleChange = (field: keyof StaircaseInputs, value: any) => {
        setInputs(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="w-full" onPointerDown={(e) => e.stopPropagation()}>
            <div className={`bg-panel/95 backdrop-blur text-stone rounded-lg shadow-2xl border border-border pointer-events-auto transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-90'}`}>

                <div
                    className="p-3 border-b border-border flex justify-between items-center cursor-pointer select-none bg-void/50 hover:bg-void transition-colors rounded-t-lg"
                    onClick={toggleOpen}
                >
                    <h2 className="text-sm font-header font-bold text-bronze tracking-widest uppercase">Design Inputs</h2>
                    <span className={`transition-transform duration-300 text-bronze ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                </div>

                {isOpen && (
                    <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto font-ui text-sm">
                        {/* Method Toggle */}
                        <div className="mb-4 bg-void p-1 rounded border border-border flex text-xs font-bold text-center tracking-wide">
                            <div
                                className={`flex-1 py-1.5 rounded cursor-pointer transition-colors ${inputs.calculationMethod === 'simplified' ? 'bg-bronze/20 text-bronze border border-bronze/30 shadow-[0_0_10px_rgba(154,140,116,0.2)]' : 'text-gray-500 hover:text-stone'}`}
                                onClick={() => setInputs(prev => ({ ...prev, calculationMethod: 'simplified' }))}
                            >
                                SIMPLIFIED
                            </div>
                            <div
                                className={`flex-1 py-1.5 rounded cursor-pointer transition-colors ${inputs.calculationMethod === 'matrix' ? 'bg-bronze/20 text-bronze border border-bronze/30 shadow-[0_0_10px_rgba(154,140,116,0.2)]' : 'text-gray-500 hover:text-stone'}`}
                                onClick={() => setInputs(prev => ({ ...prev, calculationMethod: 'matrix' }))}
                            >
                                MATRIX (FEM)
                            </div>
                        </div>

                        {/* Material & Load */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1 block">Grade</label>
                                <select
                                    className="w-full bg-void rounded px-2 py-1.5 text-sm border border-border focus:border-bronze focus:ring-1 focus:ring-bronze outline-none text-stone font-mono"
                                    value={inputs.steelGrade}
                                    onChange={(e) => handleChange('steelGrade', e.target.value)}
                                >
                                    <option value="S275">S275</option>
                                    <option value="S355">S355</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1 block">Load</label>
                                <select
                                    className="w-full bg-void rounded px-2 py-1.5 text-sm border border-border focus:border-bronze focus:ring-1 focus:ring-bronze outline-none text-stone font-mono"
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
                            <label className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1 flex justify-between">
                                <span>Steps</span>
                                <span className="text-bronze font-mono">{inputs.stepCount}</span>
                            </label>
                            <input
                                type="range" min="3" max="25"
                                className="w-full accent-bronze cursor-pointer"
                                value={inputs.stepCount}
                                onChange={(e) => handleChange('stepCount', parseInt(e.target.value))}
                            />
                        </div>

                        {/* Geometry */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1 block">Rise (mm)</label>
                                <input
                                    type="number"
                                    className="w-full bg-void rounded px-2 py-1.5 text-sm border border-border focus:border-bronze focus:ring-1 focus:ring-bronze outline-none text-stone font-mono"
                                    value={inputs.rise || ''}
                                    onChange={(e) => handleNum('rise', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1 block">Going (mm)</label>
                                <input
                                    type="number"
                                    className="w-full bg-void rounded px-2 py-1.5 text-sm border border-border focus:border-bronze focus:ring-1 focus:ring-bronze outline-none text-stone font-mono"
                                    value={inputs.going || ''}
                                    onChange={(e) => handleNum('going', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1 block">Width (mm)</label>
                                <input
                                    type="number"
                                    className="w-full bg-void rounded px-2 py-1.5 text-sm border border-border focus:border-bronze focus:ring-1 focus:ring-bronze outline-none text-stone font-mono"
                                    value={inputs.width || ''}
                                    onChange={(e) => handleNum('width', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1 block">Thick (mm)</label>
                                <input
                                    type="number"
                                    className="w-full bg-void rounded px-2 py-1.5 text-sm border border-border focus:border-bronze focus:ring-1 focus:ring-bronze outline-none text-stone font-mono"
                                    value={inputs.thickness || ''}
                                    onChange={(e) => handleNum('thickness', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Stringers */}
                        <div className="pt-4 border-t border-border">
                            <label className="flex items-center text-sm font-bold text-stone mb-3 cursor-pointer select-none group">
                                <input
                                    type="checkbox"
                                    className="mr-2 accent-bronze w-4 h-4 cursor-pointer"
                                    checked={inputs.cheekVisible}
                                    onChange={(e) => handleChange('cheekVisible', e.target.checked)}
                                />
                                <span className="group-hover:text-bronze transition-colors">Add Stringers</span>
                            </label>

                            {inputs.cheekVisible && (
                                <div className="grid grid-cols-2 gap-3 pl-3 border-l-2 border-bronze/30 animate-in fade-in slide-in-from-left-2">
                                    <div>
                                        <select
                                            className="w-full bg-void rounded px-2 py-1.5 text-xs border border-border focus:border-bronze focus:ring-1 focus:ring-bronze outline-none text-stone font-mono"
                                            value={inputs.cheekSide}
                                            onChange={(e) => handleChange('cheekSide', e.target.value)}
                                        >
                                            <option value="one">One Side</option>
                                            <option value="two">Two Sides</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type="number" placeholder="Height"
                                            className="w-full bg-void rounded px-2 py-1.5 text-xs border border-border focus:border-bronze focus:ring-1 focus:ring-bronze outline-none text-stone font-mono"
                                            value={inputs.cheekHeight || ''}
                                            onChange={(e) => handleNum('cheekHeight', e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
