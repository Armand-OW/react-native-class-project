// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import Authentication
import { getAuth } from "firebase/auth";
//Import Firestore
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKhsu0SfNlAUxD0IGRy_w93IiRJXGZBLE",
  authDomain: "awesome-class-project-3ca73.firebaseapp.com",
  projectId: "awesome-class-project-3ca73",
  storageBucket: "awesome-class-project-3ca73.appspot.com",
  messagingSenderId: "850656086999",
  appId: "1:850656086999:web:adfad279cbfad514551992",
  measurementId: "G-H0442Z10CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//create initial instance of auth functionality
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);