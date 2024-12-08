// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBiOOmkxQ-TAHFNpo_hAUnd2tgxeaYX0s",
  authDomain: "fir-test-bdd14.firebaseapp.com",
  projectId: "fir-test-bdd14",
  storageBucket: "fir-test-bdd14.firebasestorage.app",
  messagingSenderId: "813016321970",
  appId: "1:813016321970:web:806f1bf3a9e5675dab9eab",
  measurementId: "G-MZQGKFD53Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider();
export const db=getFirestore(app);
export const storage=getStorage();

//const analytics = getAnalytics(app);