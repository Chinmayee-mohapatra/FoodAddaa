// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoSTk0zsVSvSDOfKaHSlaQ96MbP2781fg",
  authDomain: "foodaddaa-103ee.firebaseapp.com",
  projectId: "foodaddaa-103ee",
  storageBucket: "foodaddaa-103ee.appspot.com",
  messagingSenderId: "944532991365",
  appId: "1:944532991365:web:0fef805921d6d16a1268ec",
  measurementId: "G-WRZDC3MGLM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
