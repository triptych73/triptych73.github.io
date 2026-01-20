import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Helper to ensure we are engaged with Firebase
export const ensureAuth = async () => {
    console.log("ensureAuth: Checking current user...", auth.currentUser?.uid);
    if (!auth.currentUser) {
        try {
            console.log("ensureAuth: Attempting anonymous sign-in...");
            const result = await signInAnonymously(auth);
            console.log("ensureAuth: Signed in anonymously as:", result.user.uid);
        } catch (e) {
            console.error("ensureAuth: Auth failed:", e);
            throw e;
        }
    } else {
        console.log("ensureAuth: User already signed in:", auth.currentUser.uid);
    }
};

const DB_PATH = "artifacts/mood-board/floors";

export const saveFloorsToFireStore = async (data: { floors: FloorData[], libraryItems: any[] }) => {
    try {
        // Saving as a map for easier retrieval or just as the array structure
        const floorsMap = data.floors.reduce((acc, floor) => {
            acc[floor.id] = floor;
            return acc;
        }, {} as Record<string, FloorData>);

        await setDoc(doc(db, DB_PATH, "v2_data"), {
            floors: floorsMap,
            libraryItems: data.libraryItems
        });
    } catch (e) {
        console.error("Error saving floors:", e);
    }
};

export const loadFloorsFromFireStore = async (): Promise<{ floors: FloorData[], libraryItems: any[] } | null> => {
    try {
        const snap = await getDoc(doc(db, DB_PATH, "v2_data"));
        if (snap.exists()) {
            const data = snap.data();
            const result: { floors: FloorData[], libraryItems: any[] } = {
                floors: [],
                libraryItems: []
            };

            // Convert map back to array if needed, or handle schema migration
            if (data.floors) {
                result.floors = Object.values(data.floors) as FloorData[];
            }
            if (data.libraryItems) {
                result.libraryItems = data.libraryItems;
            }
            return result;
        }
    } catch (e) {
        console.error("Error loading floors:", e);
    }
    return null;
};

export const uploadAsset = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `mood-board-assets/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
};
