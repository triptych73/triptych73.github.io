import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import type { FloorData } from "@/store/useStore";

const firebaseConfig = {
    apiKey: "AIzaSyBcezJRuEx8vsThQKhi8Az_XdL_XSM6u8g",
    authDomain: "st-mary-somerset.firebaseapp.com",
    projectId: "st-mary-somerset",
    storageBucket: "st-mary-somerset.firebasestorage.app",
    messagingSenderId: "924281338278",
    appId: "1:924281338278:web:82023a592a670e7d97f767"
};

// Initialize Firebase (singleton)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

const DB_PATH = "artifacts/mood-board/floors"; // Adjust path as needed

export const saveFloorsToFireStore = async (floors: Record<number, FloorData>) => {
    try {
        await setDoc(doc(db, DB_PATH, "data"), { floors });
    } catch (e) {
        console.error("Error saving floors:", e);
    }
};

export const loadFloorsFromFireStore = async (): Promise<Record<number, FloorData> | null> => {
    try {
        const snap = await getDoc(doc(db, DB_PATH, "data"));
        if (snap.exists()) {
            return snap.data().floors as Record<number, FloorData>;
        }
    } catch (e) {
        console.error("Error loading floors:", e);
    }
    return null;
};

export { db };
