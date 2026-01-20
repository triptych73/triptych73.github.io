// Visitor Tracker for St Mary Somerset
// Logs anonymous session data to Firestore for the executive dashboard

(function () {
    console.log("SMS-1694: Initializing Visitor Tracker...");

    // 1. Bot Detection
    function isBot() {
        const botPattern = /bot|googlebot|crawler|spider|robot|crawling/i;
        const userAgent = navigator.userAgent;
        const chromeHeadless = /HeadlessChrome/.test(userAgent);
        const webdriver = navigator.webdriver;

        if (botPattern.test(userAgent)) return true;
        if (chromeHeadless) return true;
        if (webdriver) return true;

        return false;
    }

    // 2. Session Management
    function getSessionId() {
        let sessionId = localStorage.getItem('sms_session_id');
        if (!sessionId) {
            sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('sms_session_id', sessionId);
            // New session flag could be stored if we want to track "New vs Returning" explicitly
        }
        return sessionId;
    }

    // 3. Log Visit
    async function logVisit() {
        if (!window.firebase || !window.firebase.firestore) {
            console.warn("SMS-1694: Firebase not loaded, skipping tracker.");
            return;
        }

        // Initialize if not already (safeguard, though index.html should do it)
        if (!firebase.apps.length) {
            if (typeof firebaseConfig !== 'undefined') {
                firebase.initializeApp(firebaseConfig);
            } else {
                console.error("SMS-1694: No firebaseConfig found.");
                return;
            }
        }

        const db = firebase.firestore();
        const sessionId = getSessionId();
        const detectedBot = isBot();

        // Data payload
        const visitData = {
            sessionId: sessionId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            path: window.location.pathname,
            referrer: document.referrer || 'direct',
            userAgent: navigator.userAgent,
            isBot: detectedBot,
            screen: `${window.screen.width}x${window.screen.height}`
        };

        try {
            // We use a specific collection 'site_visits'
            // meaningful ID: sessID_timestamp to avoid dupes if reloaded quickly? 
            // Actually auto-ID is fine for clickstream, but for simple "visitor count" 
            // we might want to just update a "Last Seen" on a session document?
            // Option: "Events" vs "Sessions". 
            // Plan: Log an EVENT. Aggregation will happen on read.

            await db.collection('site_visits').add(visitData);
            console.log("SMS-1694: Visit logged.", detectedBot ? "(Bot Detected)" : "");
        } catch (e) {
            console.error("SMS-1694: Tracker failed", e);
        }
    }

    // Wait for window load to ensure Firebase scripts are parsed
    window.addEventListener('load', () => {
        // slight delay to not impact LCP
        setTimeout(logVisit, 1000);
    });

})();
