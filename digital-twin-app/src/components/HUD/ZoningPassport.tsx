import { useState } from 'react';
import { Map, X } from 'lucide-react';
import styles from './ZoningPassport.module.css';

export const ZoningPassport = () => {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return (
            <button className={styles.toggleButton} onClick={() => setIsOpen(true)}>
                <Map size={16} />
                <span className={styles.buttonText}>Zoning Passport</span>
            </button>
        );
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h3>Grade I Permissions Map</h3>
                    <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
                        <X size={16} />
                    </button>
                </div>

                <div className={styles.mapContainer}>
                    {/* Placeholder for the Floorplan SVG */}
                    <div className={styles.legend}>
                        <div className={styles.legendItem}><span className={styles.dotRed} /> Protected</div>
                        <div className={styles.legendItem}><span className={styles.dotAmber} /> Reversible</div>
                        <div className={styles.legendItem}><span className={styles.dotGreen} /> Free Rein</div>
                    </div>

                    <svg viewBox="0 0 100 100" className={styles.floorplan}>
                        {/* Outer Walls (Red - Protected) */}
                        <rect x="10" y="10" width="80" height="80" fill="none" stroke="#ef4444" strokeWidth="2" />
                        {/* Core (Amber - Reversible) */}
                        <rect x="40" y="40" width="20" height="20" fill="none" stroke="#f59e0b" strokeWidth="2" />
                        {/* Partitions (Green - Free) */}
                        <path d="M 20 20 L 30 30" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 2" />
                        <path d="M 70 70 L 80 80" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 2" />

                        <text x="50" y="50" textAnchor="middle" fill="#d6c6b0" fontSize="5" opacity="0.5">L1 FLOORPLAN</text>
                    </svg>
                </div>
            </div>
        </div>
    );
};
