// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWiEzdEnhkoAx1CaQGYCQYAE3_IuWmuLk",
  authDomain: "viverolaflorida-4388c.firebaseapp.com",
  projectId: "viverolaflorida-4388c",
  storageBucket: "viverolaflorida-4388c.appspot.com",
  messagingSenderId: "784887836699",
  appId: "1:784887836699:web:bd70f1d37543ab986948be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;