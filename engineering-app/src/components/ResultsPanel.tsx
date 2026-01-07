import React from 'react';
import { CONSTANTS, type StaircaseResults } from '../core/physics';

// --- Sub Comps ---

const DeflectionBreakdown: React.FC<{ beam: number; sag: number; total: number; limit: number }> = ({ beam, sag, total, limit }) => {
    const beamPct = Math.min(100, (beam / (total || 1)) * 100);
    const sagPct = Math.min(100, (sag / (total || 1)) * 100);

    return (
        <div className="mt-3 bg-gray-950/50 p-3 rounded border border-gray-700">
            <div className="flex justify-between items-end mb-1">
                <span className="text-xs text-gray-400 font-semibold uppercase">Total Deflection</span>
                <span className={`text-lg font-mono font-bold ${total > limit ? 'text-red-500' : 'text-green-400'}`}>
                    {total.toFixed(1)} <span className="text-xs text-gray-500">mm</span>
                </span>
            </div>

            <div className="w-full h-2 bg-gray-700 rounded-full flex overflow-hidden mb-2">
                <div style={{ width: `${beamPct}%` }} className="bg-blue-500 h-full" title="Beam Bending"></div>
                <div style={{ width: `${sagPct}%` }} className="bg-orange-500 h-full" title="Accordion Sag"></div>
            </div>

            <div className="flex justify-between text-[10px] space-x-2">
                <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                    <span className="text-gray-400">Beam Bend: <span className="text-gray-200 font-mono">{beam.toFixed(1)}mm</span></span>
                </div>
                <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-1"></div>
                    <span className="text-gray-400">Unfolding: <span className="text-gray-200 font-mono">{sag.toFixed(1)}mm</span></span>
                </div>
            </div>
            <div className="text-[10px] text-right text-gray-500 mt-1">Limit: {limit.toFixed(1)}mm</div>
        </div>
    );
};

const StatusBadge: React.FC<{ pass: boolean; value: string | number; unit?: string; label: string; subLabel?: string; warning?: boolean }> =
    ({ pass, value, unit, label, subLabel, warning }) => {
        let borderColor = pass ? 'border-green-600' : 'border-red-600';
        let bgColor = pass ? 'bg-green-900/30' : 'bg-red-900/30';
        let badgeColor = pass ? 'bg-green-600' : 'bg-red-600';
        let badgeText = pass ? 'PASS' : 'FAIL';

        if (warning) {
            borderColor = 'border-yellow-600';
            bgColor = 'bg-yellow-900/30';
            badgeColor = 'bg-yellow-600';
            badgeText = 'WARNING';
        }

        return (
            <div className={`p-2 rounded border ${borderColor} ${bgColor}`}>
                <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 uppercase font-semibold">{label}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded text-white ${badgeColor}`}>
                        {badgeText}
                    </span>
                </div>
                <div className="text-xl font-mono font-bold text-gray-100">
                    {value} <span className="text-sm text-gray-500">{unit}</span>
                </div>
                {subLabel && <div className="text-[10px] text-gray-400 mt-1">{subLabel}</div>}
            </div>
        );
    };

interface ResultsPanelProps {
    results: StaircaseResults;
    isOpen: boolean;
    toggleOpen: () => void;
    steelGrade: string;
}

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ results, isOpen, toggleOpen, steelGrade }) => {
    return (
        <div className="absolute top-0 right-0 p-4 z-10 w-full md:w-96 pointer-events-none">
            <div className="bg-gray-900/90 backdrop-blur text-white rounded-xl shadow-2xl border border-gray-700 pointer-events-auto">
                <div
                    className={`p-4 border-b border-gray-700 flex justify-between items-center cursor-pointer select-none ${results.overallStatus === 'SAFE' ? 'bg-green-900/20' : 'bg-red-900/20'}`}
                    onClick={toggleOpen}
                >
                    <h2 className="text-lg font-bold flex items-center">
                        <span className={`mr-2 px-2 py-0.5 rounded text-sm ${results.overallStatus === 'SAFE' ? 'bg-green-600' : 'bg-red-600'}`}>
                            {results.overallStatus}
                        </span>
                        Matrix
                    </h2>
                    <span className={`transition transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                </div>

                {isOpen && (
                    <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">

                        {/* Global Physics Section */}
                        <div className="space-y-2">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Global Beam Theory</h3>

                            <DeflectionBreakdown
                                beam={results.deflectionBeam}
                                sag={results.deflectionSag}
                                total={results.deflectionTotal}
                                limit={results.globalLimit}
                            />

                            <div className="mt-2">
                                <StatusBadge
                                    pass={results.passStress}
                                    value={results.stress.toFixed(0)}
                                    unit="MPa"
                                    label="Beam Stress"
                                    subLabel={`Yield: ${steelGrade === 'S275' ? CONSTANTS.YIELD_S275 : CONSTANTS.YIELD_S355} MPa`}
                                />
                            </div>

                            <div className="text-[10px] text-gray-500 font-mono flex justify-between pt-1 px-1">
                                <span>Span: {results.span}mm</span>
                                <span>Load: {(results.totalLoad / 1000).toFixed(1)}kN</span>
                                <span>I_rigid: {(results.inertia / 1e4).toFixed(0)}e4</span>
                            </div>
                        </div>

                        {/* Reality Checks */}
                        <div className="space-y-2">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Reality Checks (Local)</h3>

                            {/* Tread Stiffness */}
                            <div className={`p-3 rounded border ${results.passLocal ? 'border-gray-700 bg-gray-800' : 'border-red-500 bg-red-900/20'}`}>
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <div className="text-sm font-bold text-gray-200">Tread Bounciness</div>
                                        <div className="text-[10px] text-blue-300 font-mono">{results.supportCondition}</div>
                                    </div>
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${results.passLocal ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>{results.passLocal ? 'PASS' : 'FAIL'}</span>
                                </div>
                                <div className="mt-1 flex items-baseline">
                                    <span className="text-xl font-mono font-bold">{results.localDeflection.toFixed(2)}</span>
                                    <span className="text-xs text-gray-400 ml-1">mm (1kN Load)</span>
                                </div>
                            </div>

                            {/* Slenderness */}
                            <div className={`p-3 rounded border ${results.passSlenderness ? 'border-gray-700 bg-gray-800' : 'border-red-500 bg-red-900/20'}`}>
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-sm font-bold text-gray-200">Plate Buckling</span>
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${results.passSlenderness ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>{results.passSlenderness ? 'PASS' : 'FAIL'}</span>
                                </div>
                                <div className="mt-1 flex items-baseline">
                                    <span className="text-xl font-mono font-bold">{results.slendernessRatio.toFixed(1)}</span>
                                    <span className="text-xs text-gray-400 ml-1">Ratio (b/t)</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-gray-700">
                            <div><div className="text-xs text-gray-500">Weight</div><div className="text-sm font-bold text-gray-300">{results.steelMassKg.toFixed(0)} kg</div></div>
                            <div>
                                <div className="text-xs text-gray-500">Freq</div>
                                <div className={`text-sm font-bold ${results.frequency > 10 ? 'text-green-400' : 'text-yellow-400'}`}>
                                    {results.frequency.toFixed(1)} Hz
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
