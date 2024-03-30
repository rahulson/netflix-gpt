// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxrQ9Ptm7E0qufuWN8xUgDJX8UUO1WDtE",
  authDomain: "netflixgpt-3e58d.firebaseapp.com",
  projectId: "netflixgpt-3e58d",
  storageBucket: "netflixgpt-3e58d.appspot.com",
  messagingSenderId: "259648860050",
  appId: "1:259648860050:web:9e32b4b8a94d9606a59b4b",
  measurementId: "G-FTVPSLS394",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
