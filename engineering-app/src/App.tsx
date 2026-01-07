import { useState, useMemo } from 'react';
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
  });

  const [uiState, setUiState] = useState({
    inputOpen: true,
    resultsOpen: true
  });

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
