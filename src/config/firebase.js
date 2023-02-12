// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC65bEKjwUUMJ3U-sQZvjv19EQJlEmYhg4",
  authDomain: "final-hackathon-6b997.firebaseapp.com",
  projectId: "final-hackathon-6b997",
  storageBucket: "final-hackathon-6b997.appspot.com",
  messagingSenderId: "198437871304",
  appId: "1:198437871304:web:ad21fa0baacdbe9db38ffd",
  measurementId: "G-VN0VEZDEFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

console.log("firebase Connected");

export {
    app,
    analytics,
    db,
    auth
}