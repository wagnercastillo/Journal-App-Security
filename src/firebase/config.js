// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0f75OmhN1lmfSRtwmyG2FilLpUDE7S0o",
  authDomain: "react-app-auth-fb201.firebaseapp.com",
  projectId: "react-app-auth-fb201",
  storageBucket: "react-app-auth-fb201.appspot.com",
  messagingSenderId: "892394925855",
  appId: "1:892394925855:web:abd5d183202b082218ca2a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);