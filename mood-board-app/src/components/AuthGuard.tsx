"use client";

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp, getApps, getApp } from "firebase/app";

// Re-using the config to ensure we check the same auth session
const firebaseConfig = {
    apiKey: "AIzaSyBcezJRuEx8vsThQKhi8Az_XdL_XSM6u8g",
    authDomain: "st-mary-somerset.firebaseapp.com",
    projectId: "st-mary-somerset",
    storageBucket: "st-mary-somerset.firebasestorage.app",
    messagingSenderId: "924281338278",
    appId: "1:924281338278:web:82023a592a670e7d97f767"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticated(true);
                setLoading(false);
            } else {
                // Redirect to main login
                // Assuming the app is deployed in a subfolder, we go up to root
                window.location.href = "../login.html";
            }
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 bg-midnight z-[9999] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 border border-bronze/30 border-t-bronze rounded-full animate-spin mb-4"></div>
                <div className="font-serif text-bronze tracking-[0.2em] animate-pulse">VERIFYING CREDENTIALS</div>
                <div className="font-mono text-[10px] text-portland/40 mt-2">SMS-1694 SECURITY PROTOCOL</div>
            </div>
        );
    }

    if (!authenticated) return null;

    return <>{children}</>;
}
