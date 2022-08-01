// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBKJeVVLjjRaNMU70K-BKtFJiZY26GJjRs",
    authDomain: "todo-ed12b.firebaseapp.com",
    projectId: "todo-ed12b",
    storageBucket: "todo-ed12b.appspot.com",
    messagingSenderId: "117923410269",
    appId: "1:117923410269:web:87a3694a2ac80cd1a6f8b4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
