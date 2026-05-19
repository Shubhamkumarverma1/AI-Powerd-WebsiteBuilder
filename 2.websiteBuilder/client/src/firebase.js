// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-29e14.firebaseapp.com",
  projectId: "fir-29e14",
  storageBucket: "fir-29e14.firebasestorage.app",
  messagingSenderId: "412847505445",
  appId: "1:412847505445:web:d091cf323dd88a47827fcc",
  measurementId: "G-L4K89VGY8L"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
