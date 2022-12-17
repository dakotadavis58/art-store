// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRCa4Cl0rQ114p2FLlGdnRwzG-2N0zW8Y",
  authDomain: "art-store-52924.firebaseapp.com",
  projectId: "art-store-52924",
  storageBucket: "art-store-52924.appspot.com",
  messagingSenderId: "277397555932",
  appId: "1:277397555932:web:451cd6409d77faecf84219",
  measurementId: "G-EJS2XX92B6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
