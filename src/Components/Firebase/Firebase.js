
import { initializeApp } from "firebase/app";
import {getFirestore,collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMe6WtVXCPxwrljinAn3P_9puHtFApg0I",
  authDomain: "filmyverse-132ee.firebaseapp.com",
  projectId: "filmyverse-132ee",
  storageBucket: "filmyverse-132ee.appspot.com",
  messagingSenderId: "1039645656109",
  appId: "1:1039645656109:web:8659f4bd2d7d97707464a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
export const moviesRef = collection(db,"movies")

export default app;