export interface UE5Descriptor {
    [key: string]: any;
}

export class PixelStreamingService {
    private ws: WebSocket | null = null;
    private onStreamReady: (() => void) | null = null;

    constructor() { }

    connect(signalingUrl: string) {
        console.log(`[PixelStream] Connecting to ${signalingUrl}...`);

        // Mocking the connection for frontend dev without a running UE5 instance
        setTimeout(() => {
            console.log('[PixelStream] Connected (Mock)');
            if (this.onStreamReady) this.onStreamReady();
        }, 1500);

        // In a real implementation, we would:
        // 1. Connect WS
        // 2. Handle 'offer' from UE5
        // 3. Create RTCPeerConnection
        // 4. Send 'answer'
        // 5. Bind video track
    }

    emitUIInteraction(payload: object) {
        if (!this.ws) {
            console.log('[PixelStream] Mock Emit:', payload);
            return;
        }

        // Standard UE5 Pixel Streaming JSON format
        const message = JSON.stringify(payload);
        this.ws.send(message);
    }

    registerStreamListener(cb: () => void) {
        this.onStreamReady = cb;
    }

    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }
}

export const pixelStreaming = new PixelStreamingService();
