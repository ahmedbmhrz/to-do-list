// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzdmkvmmqKr3b7sL7MfccXQcxxefr_oWU",
  authDomain: "to-do-list-a6fef.firebaseapp.com",
  projectId: "to-do-list-a6fef",
  storageBucket: "to-do-list-a6fef.firebasestorage.app",
  messagingSenderId: "746604431165",
  appId: "1:746604431165:web:b10cc1ac7eac5b13436754",
  measurementId: "G-VGYRRB408J"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()
