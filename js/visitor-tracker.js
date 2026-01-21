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

        // Data payload base
        const visitData = {
            sessionId: sessionId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            path: window.location.pathname,
            referrer: document.referrer || 'direct',
            userAgent: navigator.userAgent,
            isBot: detectedBot,
            screen: `${window.screen.width}x${window.screen.height}`,
            language: navigator.language || 'en-US'
        };

        // 4. Enhance with IP/Location (Async)
        // Check localStorage first to save API calls
        const cachedLoc = localStorage.getItem('visitor_loc_cache');
        if (cachedLoc) {
            try {
                const loc = JSON.parse(cachedLoc);
                visitData.ip = loc.ip;
                visitData.city = loc.city;
                visitData.country = loc.country_name;
                visitData.org = loc.org; // ISP
            } catch (e) { console.warn('Loc cache parse error', e); }
        } else {
            try {
                // timeout after 2s so we don't hang
                const controller = new AbortController();
                setTimeout(() => controller.abort(), 2000);

                const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
                if (res.ok) {
                    const loc = await res.json();
                    if (!loc.error) {
                        visitData.ip = loc.ip;
                        visitData.city = loc.city;
                        visitData.country = loc.country_name;
                        visitData.org = loc.org;

                        // Cache it indefinitely (or you could add expiry)
                        localStorage.setItem('visitor_loc_cache', JSON.stringify(loc));
                    }
                }
            } catch (e) {
                console.log('IP fetch skipped:', e.message);
            }
        }

        try {
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
