// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Customize with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4FZHYXUWcw3gBJ4LPy1A3UB-iTuCxhjo",
  authDomain: "meanas-692aa.firebaseapp.com",
  projectId: "meanas-692aa",
  storageBucket: "meanas-692aa.appspot.com",
  messagingSenderId: "512910836565",
  appId: "1:512910836565:web:02fc2fa779c5bbe50ce5dc",
  measurementId: "G-LH11N0Z7LB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);







