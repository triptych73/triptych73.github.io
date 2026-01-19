import React from 'react';
import Stage from './components/Stage';
import Catalog from './components/Catalog';
import PropertiesPanel from './components/PropertiesPanel';
import SnapToggle from './components/SnapToggle';

function App() {
  return (
    <div className="w-screen h-screen bg-midnight text-stone flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-14 bg-void border-b border-border flex items-center px-6 justify-between shrink-0 z-10">
        <div className="flex items-center gap-4">
          <h1 className="font-serif font-bold text-lg tracking-widest text-stone uppercase">
            Triptych<span className="text-bronze">73</span> Kitchens
          </h1>
          <span className="px-2 py-0.5 rounded bg-emerald/10 text-emerald text-xs font-mono font-bold tracking-wider uppercase border border-emerald/20">
            Beta
          </span>
        </div>
        <div className="flex items-center gap-4">
          {/* Placeholder Actions */}
          <button className="px-4 py-2 bg-bronze text-white text-xs font-bold uppercase tracking-wider hover:bg-bronze-dark transition-colors">
            Save Design
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex relative">
        {/* Left Sidebar (Catalog) */}
        <aside className="w-64 bg-panel border-r border-border flex flex-col z-10">
          <div className="p-4 border-b border-border">
            <h2 className="text-xs font-mono text-bronze uppercase tracking-widest mb-2">Catalog</h2>
            <input
              type="text"
              placeholder="Search items..."
              className="w-full bg-void border border-border text-stone text-xs p-2 focus:outline-none focus:border-bronze placeholder-gray-500"
            />
          </div>
          <div className="flex-1 overflow-y-auto bg-midnight">
            <Catalog />
          </div>
        </aside>

        {/* 3D Viewport */}
        <main className="flex-1 relative bg-midnight">
          <Stage />

          {/* Bottom Info Bar */}
          <SnapToggle />
        </main>

        {/* Right Sidebar (Properties) */}
        <aside className="w-64 bg-panel border-l border-border flex flex-col z-10">
          <div className="p-4 border-b border-border">
            <h2 className="text-xs font-mono text-bronze uppercase tracking-widest">Properties</h2>
          </div>
          <PropertiesPanel />
        </aside>
      </div>
    </div>
  );
}

export default App;
