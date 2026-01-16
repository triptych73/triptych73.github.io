
import { StreamContainer } from './components/StreamContainer';
import { ZAxisSidebar } from './components/HUD/ZAxisSidebar';
import { ThemeSelector } from './components/HUD/ThemeSelector';
import { ZoningPassport } from './components/HUD/ZoningPassport';
import { InspectorOverlay } from './components/HUD/InspectorOverlay';
import { SunsetSlider } from './components/HUD/SunsetSlider';
import { useAppStore } from './store';
import styles from './App.module.css';

function App() {
  const { viewMode } = useAppStore();

  return (
    <div className={styles.appContainer}>
      {/* Layer 1: The 3D Stream (or basic fallback) */}
      <StreamContainer />

      {/* Layer 2: The HUD (Heads Up Display) */}
      <div className={styles.hudOverlay}>
        <div className={styles.hudContent}>

          {/* Top Bar */}
          <div className={styles.topBar}>
            <h1 className={styles.title}>
              St Mary Somerset
            </h1>
            <p className={styles.subtitle}>Digital Twin v1.0</p>
          </div>

          <div className={styles.topCenter}>
            <ThemeSelector />
          </div>

          {/* Right Sidebar */}
          <div className={styles.rightSidebar}>
            <ZAxisSidebar />
          </div>

          {/* Bottom Controls */}
          <div className={styles.bottomBar}>
            <SunsetSlider />
          </div>

          {/* Overlays */}
          <InspectorOverlay active={viewMode === 'XRay'} />
          <ZoningPassport />
        </div>
      </div>
    </div>
  );
}

export default App;
