import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcS8ySkxFwTppXkzqAQmBbdiqc5XcfLlQ",
  authDomain: "geek-6d5ba.firebaseapp.com",
  databaseURL: "https://geek-6d5ba-default-rtdb.firebaseio.com",
  projectId: "geek-6d5ba",
  storageBucket: "geek-6d5ba.appspot.com",
  messagingSenderId: "174538116006",
  appId: "1:174538116006:web:2f00176addaf732f449d67",
  measurementId: "G-5LRMFMZN0P"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);