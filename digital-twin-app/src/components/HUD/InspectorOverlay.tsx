
import styles from './InspectorOverlay.module.css';

interface Props {
    active: boolean;
}

export const InspectorOverlay = ({ active }: Props) => {
    if (!active) return null;

    return (
        <div className={styles.container}>
            {/* Grid overlay */}
            <div className={styles.grid} />

            {/* Corners */}
            <div className={`${styles.corner} ${styles.tl}`} />
            <div className={`${styles.corner} ${styles.tr}`} />
            <div className={`${styles.corner} ${styles.bl}`} />
            <div className={`${styles.corner} ${styles.br}`} />

            {/* Status Text */}
            <div className={styles.status}>
                <span className={styles.blinking}>●</span> SYSTEM: STRUCTURAL ANALYSIS
            </div>
        </div>
    );
};
