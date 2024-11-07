// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHnsl7U3HsaKnLiAd_Rf6QD1RWWJD6y08",
  authDomain: "netflix-clone-eac8d.firebaseapp.com",
  projectId: "netflix-clone-eac8d",
  storageBucket: "netflix-clone-eac8d.firebasestorage.app",
  messagingSenderId: "207577983473",
  appId: "1:207577983473:web:5cf1804dac6c1fee217c50",
  measurementId: "G-7VDJDQN0TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const analytics = getAnalytics(app);