import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAlY2j3TIJiFaEdmmHA5knAeN817AQF_l4",
    authDomain: "don-raul-hardware-store.firebaseapp.com",
    projectId: "don-raul-hardware-store",
    storageBucket: "don-raul-hardware-store.appspot.com",
    messagingSenderId: "42584980549",
    appId: "1:42584980549:web:42b5df535d9eefd8d7b72c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();


