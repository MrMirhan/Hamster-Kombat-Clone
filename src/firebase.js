import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    // Replace with your Firebase configuration
    apiKey: "AIzaSyBJ8rSaa46Eegtl9a2NPNaoXwffZvbWpgU",
    authDomain: "hamstercombatclone.firebaseapp.com",
    projectId: "hamstercombatclone",
    storageBucket: "hamstercombatclone.appspot.com",
    messagingSenderId: "166022752",
    appId: "1:166022752:web:da9d8854994c8246f33d05",
    measurementId: "G-3F6G50RX1N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
