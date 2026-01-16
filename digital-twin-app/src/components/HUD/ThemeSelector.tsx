
import { useAppStore, type Theme } from '../../store';
import styles from './ThemeSelector.module.css';

const THEMES: Theme[] = ['Monastery', 'Club', 'HQ'];

export const ThemeSelector = () => {
    const { theme, setTheme } = useAppStore();

    return (
        <div className={styles.container}>
            {THEMES.map((t) => (
                <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`${styles.button} ${theme === t ? styles.active : ''}`}
                >
                    {t}
                </button>
            ))}
        </div>
    )
}
