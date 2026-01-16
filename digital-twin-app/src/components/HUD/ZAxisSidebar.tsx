
import { useAppStore } from '../../store';
import styles from './ZAxisSidebar.module.css';

const FLOORS = [
    { id: 5, label: 'SPIRE', height: 'Roof' },
    { id: 4, label: 'L4', height: 'Penthouse' },
    { id: 3, label: 'L3', height: 'Bedroom' },
    { id: 2, label: 'L2', height: 'Living' },
    { id: 1, label: 'L1', height: 'Mezzanine' },
    { id: 0, label: 'G', height: 'Reception' },
];

export const ZAxisSidebar = () => {
    const { floor, setFloor } = useAppStore();

    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>Elevation</div>
            {FLOORS.map((fBox) => (
                <button
                    key={fBox.id}
                    onClick={() => setFloor(fBox.id)}
                    className={`${styles.floorButton} ${floor === fBox.id ? styles.active : ''}`}
                >
                    <div className={styles.labelGroup}>
                        <div className={styles.labelMain}>{fBox.label}</div>
                        <div className={styles.labelSub}>{fBox.height}</div>
                    </div>
                    <div className={styles.indicator} />
                </button>
            ))}
        </div>
    );
}
