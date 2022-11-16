
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDL7KOU3vT_IbfbS0nOIdMdWI0Npqtl_9g",
  authDomain: "e-commerce-project-30177.firebaseapp.com",
  projectId: "e-commerce-project-30177",
  storageBucket: "e-commerce-project-30177.appspot.com",
  messagingSenderId: "1022198270815",
  appId: "1:1022198270815:web:8ff9058e3ffae51c98c4ea",
  measurementId: "G-793DBK3G2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)