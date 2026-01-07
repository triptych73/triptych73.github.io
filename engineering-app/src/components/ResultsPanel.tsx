import React from 'react';
import { CONSTANTS, type StaircaseResults } from '../core/physics';

// --- Sub Comps ---

const DeflectionBreakdown: React.FC<{ beam: number; sag: number; total: number; limit: number }> = ({ beam, sag, total, limit }) => {
    const beamPct = Math.min(100, (beam / (total || 1)) * 100);
    const sagPct = Math.min(100, (sag / (total || 1)) * 100);

    return (
        <div className="mt-3 bg-void/50 p-3 rounded border border-border">
            <div className="flex justify-between items-end mb-1">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Total Deflection</span>
                <span className={`text-lg font-mono font-bold ${total > limit ? 'text-alert' : 'text-emerald'}`}>
                    {total.toFixed(1)} <span className="text-xs text-gray-500">mm</span>
                </span>
            </div>

            <div className="w-full h-2 bg-border rounded-full flex overflow-hidden mb-2">
                <div style={{ width: `${beamPct}%` }} className="bg-blue-500 h-full" title="Beam Bending"></div>
                <div style={{ width: `${sagPct}%` }} className="bg-orange-500 h-full" title="Accordion Sag"></div>
            </div>

            <div className="flex justify-between text-[10px] space-x-2">
                <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                    <span className="text-gray-400">Beam Bend: <span className="text-stone font-mono">{beam.toFixed(1)}mm</span></span>
                </div>
                <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-1"></div>
                    <span className="text-gray-400">Unfolding: <span className="text-stone font-mono">{sag.toFixed(1)}mm</span></span>
                </div>
            </div>
            <div className="text-[10px] text-right text-bronze mt-1 font-mono">Limit: {limit.toFixed(1)}mm</div>
        </div>
    );
};

const StatusBadge: React.FC<{ pass: boolean; value: string | number; unit?: string; label: string; subLabel?: string; warning?: boolean }> =
    ({ pass, value, unit, label, subLabel, warning }) => {
        let borderColor = pass ? 'border-emerald' : 'border-alert';
        let bgColor = pass ? 'bg-emerald/10' : 'bg-alert/10';
        let badgeColor = pass ? 'bg-emerald' : 'bg-alert';
        let badgeText = pass ? 'PASS' : 'FAIL';

        if (warning) {
            borderColor = 'border-yellow-600';
            bgColor = 'bg-yellow-900/10';
            badgeColor = 'bg-yellow-600';
            badgeText = 'WARNING';
        }

        return (
            <div className={`p-2 rounded border ${borderColor} ${bgColor}`}>
                <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{label}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded text-midnight ${badgeColor} font-mono tracking-wide`}>
                        {badgeText}
                    </span>
                </div>
                <div className="text-xl font-mono font-bold text-stone">
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
    const handleDownload = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent toggling the panel
        if (!results.report) return;
        const blob = new Blob([results.report], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `staircase-calcs-${new Date().toISOString().slice(0, 10)}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="w-full">
            <div className={`bg-panel/95 backdrop-blur text-stone rounded-lg shadow-2xl border border-border pointer-events-auto transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-90'}`}>
                <div
                    className={`p-3 border-b border-border flex justify-between items-center cursor-pointer select-none rounded-t-lg transition-colors ${results.overallStatus === 'SAFE' ? 'bg-emerald/5 hover:bg-emerald/10' : 'bg-alert/5 hover:bg-alert/10'}`}
                    onClick={toggleOpen}
                >
                    <div className="flex items-center gap-3">
                        <h2 className="text-sm font-header font-bold text-bronze tracking-widest uppercase flex items-center">
                            <span className={`mr-2 px-1.5 py-0.5 rounded text-[10px] text-midnight font-mono ${results.overallStatus === 'SAFE' ? 'bg-emerald' : 'bg-alert'}`}>
                                {results.overallStatus}
                            </span>
                            MATRIX FEM
                        </h2>
                        <button
                            onClick={handleDownload}
                            className="bg-void hover:bg-border text-[10px] px-2 py-1 rounded border border-border transition-colors text-bronze uppercase tracking-wide font-bold"
                            title="Download Workings Report"
                        >
                            ⇩ REPORT
                        </button>
                    </div>
                    <span className={`transition-transform duration-300 text-bronze ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                </div>

                {isOpen && (
                    <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto font-ui text-sm">

                        {/* Global Physics Section */}
                        <div className="space-y-2">
                            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-border pb-1">Global Beam Theory</h3>

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
                            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-border pb-1 mt-4">Reality Checks (Local)</h3>

                            {/* Tread Stiffness */}
                            <div className={`p-3 rounded border ${results.passLocal ? 'border-border bg-void/30' : 'border-alert bg-alert/10'}`}>
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <div className="text-xs font-bold text-stone">Tread Bounciness</div>
                                        <div className="text-[10px] text-gray-400 font-mono">{results.supportCondition}</div>
                                    </div>
                                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded text-midnight font-mono ${results.passLocal ? 'bg-emerald' : 'bg-alert'}`}>{results.passLocal ? 'PASS' : 'FAIL'}</span>
                                </div>
                                <div className="mt-1 flex items-baseline">
                                    <span className="text-lg font-mono font-bold text-stone">{results.localDeflection.toFixed(2)}</span>
                                    <span className="text-[10px] text-gray-500 ml-1">mm (1kN Load)</span>
                                </div>
                            </div>

                            {/* Slenderness */}
                            <div className={`p-3 rounded border ${results.passSlenderness ? 'border-border bg-void/30' : 'border-alert bg-alert/10'}`}>
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-stone">Plate Buckling</span>
                                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded text-midnight font-mono ${results.passSlenderness ? 'bg-emerald' : 'bg-alert'}`}>{results.passSlenderness ? 'PASS' : 'FAIL'}</span>
                                </div>
                                <div className="mt-1 flex items-baseline">
                                    <span className="text-lg font-mono font-bold text-stone">{results.slendernessRatio.toFixed(1)}</span>
                                    <span className="text-[10px] text-gray-500 ml-1">Ratio (b/t)</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-border">
                            <div><div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Weight</div><div className="text-sm font-bold text-stone font-mono">{results.steelMassKg.toFixed(0)} kg</div></div>
                            <div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Freq</div>
                                <div className={`text-sm font-bold font-mono ${results.frequency > 10 ? 'text-emerald' : 'text-yellow-400'}`}>
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
