// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "shop-c6e6a.firebaseapp.com",
  projectId: "shop-c6e6a",
  storageBucket: "shop-c6e6a.appspot.com",
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASEREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
