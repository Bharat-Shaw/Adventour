// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAsT2jZjpN6sCGR_My5o8hcGzEV1uM9Yhc",
    authDomain: "advantour2.firebaseapp.com",
    projectId: "advantour2",
    storageBucket: "advantour2.appspot.com",
    messagingSenderId: "860852960905",
    appId: "1:860852960905:web:d585b5c94850fcb935d058",
    measurementId: "G-5XZKL1VPQ8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
// const analytics = getAnalytics(app);

export {auth, provider}