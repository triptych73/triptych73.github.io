
import { useAppStore } from '../../store';
import { Sun } from 'lucide-react';
import styles from './SunsetSlider.module.css';

export const SunsetSlider = () => {
    const { sunTime, setSunTime } = useAppStore();

    return (
        <div className={styles.container}>
            <Sun size={14} className={styles.icon} />
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={sunTime}
                onChange={(e) => setSunTime(parseFloat(e.target.value))}
                className={styles.slider}
            />
            <div className={styles.timeLabel}>
                {Math.floor(sunTime * 24).toString().padStart(2, '0')}:00
            </div>
        </div>
    )
}
