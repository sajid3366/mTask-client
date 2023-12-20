// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Vp8ObCVhC950CPk7CE5sHyaWwNAMLiI",
  authDomain: "mtask-auth.firebaseapp.com",
  projectId: "mtask-auth",
  storageBucket: "mtask-auth.appspot.com",
  messagingSenderId: "761312964190",
  appId: "1:761312964190:web:2ecc846ef89163c4b6cecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;