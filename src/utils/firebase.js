// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNNVAPYT9IjjQt5BO0aRMh-EtK84YH8xw",
  authDomain: "foodaddaa-e39d7.firebaseapp.com",
  projectId: "foodaddaa-e39d7",
  storageBucket: "foodaddaa-e39d7.appspot.com",
  messagingSenderId: "401516068752",
  appId: "1:401516068752:web:e163f67e8a0d02c21d3d15",
  measurementId: "G-LQPK2WE0KJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
