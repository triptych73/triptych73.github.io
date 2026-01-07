import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, onSnapshot, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBcezJRuEx8vsThQKhi8Az_XdL_XSM6u8g",
    authDomain: "st-mary-somerset.firebaseapp.com",
    projectId: "st-mary-somerset",
    storageBucket: "st-mary-somerset.firebasestorage.app",
    messagingSenderId: "924281338278",
    appId: "1:924281338278:web:83affbb1aff93ba797f767"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// App ID for data namespacing
export const APP_ID = 'default-app';

export const signIn = async () => {
    try {
        await signInAnonymously(auth);
    } catch (error) {
        console.error("Firebase Auth Error", error);
    }
};

export const subscribeToData = (callback) => {
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            const docRef = doc(db, 'artifacts', APP_ID, 'public', 'data', 'st_mary_project', 'main');
            return onSnapshot(docRef, (doc) => {
                if (doc.exists()) {
                    callback(doc.data());
                } else {
                    // Seed initial data if needed
                    console.log("No data found, seeding...");
                }
            });
        }
    });
};

export const saveData = async (tasks, projectStartDate) => {
    if (!auth.currentUser) return;
    const docRef = doc(db, 'artifacts', APP_ID, 'public', 'data', 'st_mary_project', 'main');

    try {
        await setDoc(docRef, {
            projectStartDate: projectStartDate.toISOString(),
            tasks: tasks,
            lastUpdated: new Date().toISOString()
        });
        console.log("Data saved to Firebase");
    } catch (error) {
        console.error("Error saving data:", error);
    }
};
