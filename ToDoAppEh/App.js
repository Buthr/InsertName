// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0tit-piRZSrWrGZ9OErlN4Rxqzmcsp-E",
  authDomain: "todoappeh.firebaseapp.com",
  projectId: "todoappeh",
  storageBucket: "todoappeh.appspot.com",
  messagingSenderId: "1081226928495",
  appId: "1:1081226928495:web:2a716eb3ea64a9cdcec89a",
  measurementId: "G-PF5L0Q546Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);