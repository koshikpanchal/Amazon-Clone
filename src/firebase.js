// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDizYATSjR2_tWC8E2o01iIwcI5l8QAf4M",
  authDomain: "challenge-62d22.firebaseapp.com",
  projectId: "challenge-62d22",
  storageBucket: "challenge-62d22.appspot.com",
  messagingSenderId: "818354096537",
  appId: "1:818354096537:web:4837973d091919fdecab08",
  measurementId: "G-RDVWE683PL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
