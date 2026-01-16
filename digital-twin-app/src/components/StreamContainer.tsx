
import { useEffect, useRef, useState } from 'react';
import styles from './StreamContainer.module.css';
import { pixelStreaming } from '../services/PixelStreamingService';

export const StreamContainer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            pixelStreaming.connect('ws://localhost:8888');
            pixelStreaming.registerStreamListener(() => setIsConnected(true));
        }
        return () => pixelStreaming.disconnect();
    }, []);

    return (
        <div className={styles.container}>
            {!isConnected && (
                <div className={styles.message}>
                    <p className={styles.alertText}>Pixel Stream Signal Lost</p>
                    <p className={styles.subText}>Connecting to UE5 Backend...</p>
                </div>
            )}

            <video ref={videoRef} autoPlay playsInline muted className="absolute inset-0 w-full h-full object-cover" />

            {/* Background Gradient to simulate atmosphere */}
            <div className={styles.vignette} />
        </div>
    );
};
