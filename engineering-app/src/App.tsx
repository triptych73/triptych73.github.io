import { useState, useMemo, useEffect } from 'react';
import { calculatestructure, type StaircaseInputs } from './core/physics';
import { InputPanel } from './components/InputPanel';
import { ResultsPanel } from './components/ResultsPanel';
import { Visualizer } from './components/Visualizer';

function App() {
  const [inputs, setInputs] = useState<StaircaseInputs>({
    steelGrade: 'S275',
    liveLoadType: 'domestic',
    stepCount: 14,
    width: 1000,
    rise: 180,
    going: 250,
    thickness: 6,
    cheekVisible: true,
    cheekSide: 'two',
    cheekHeight: 250,
    cheekThickness: 10,
    calculationMethod: 'simplified',
  });

  const [uiState, setUiState] = useState({
    inputOpen: true,
    resultsOpen: true
  });

  // Parse URL parameters on mount (for integration with staircase configurator)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const updates: Partial<StaircaseInputs> = {};

    // Parse numeric parameters
    const numParams: (keyof StaircaseInputs)[] = ['rise', 'going', 'width', 'thickness', 'stepCount', 'cheekHeight'];
    numParams.forEach(key => {
      const value = params.get(key);
      if (value) {
        const num = parseInt(value, 10);
        if (!isNaN(num)) {
          (updates as any)[key] = num;
        }
      }
    });

    // Parse boolean parameters
    if (params.get('cheekVisible')) {
      updates.cheekVisible = params.get('cheekVisible') === 'true';
    }

    // Check if we have any updates from URL
    if (Object.keys(updates).length > 0) {
      console.log('Loaded parameters from staircase configurator:', updates);
      setInputs(prev => ({ ...prev, ...updates }));
    }
  }, []);

  const results = useMemo(() => calculatestructure(inputs), [inputs]);

  return (
    <div className="relative w-screen h-screen bg-[#1a1a1a] overflow-hidden">
      <Visualizer inputs={inputs} results={results} />

      {/* UI Layer */}
      <div className="absolute inset-0 z-10 p-4 flex flex-col md:flex-row justify-between items-start pointer-events-none gap-4">
        <div className="pointer-events-auto w-full md:w-96">
          <InputPanel
            inputs={inputs}
            setInputs={setInputs}
            isOpen={uiState.inputOpen}
            toggleOpen={() => setUiState(p => ({ ...p, inputOpen: !p.inputOpen }))}
          />
        </div>

        <div className="pointer-events-auto w-full md:w-96">
          <ResultsPanel
            results={results}
            isOpen={uiState.resultsOpen}
            toggleOpen={() => setUiState(p => ({ ...p, resultsOpen: !p.resultsOpen }))}
            steelGrade={inputs.steelGrade}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
