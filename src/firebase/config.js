// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.APIKEY}`,
  authDomain: `${process.env.AUTHDOMAIN}`,
  projectId: `${process.env.PROJECTID}`,
  storageBucket: `${process.env.STORAGEBUCKET}`,
  messagingSenderId: `${process.env.MESSAGINGSENDERID}`,
  appId: `${process.env.APPID}`

};
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);