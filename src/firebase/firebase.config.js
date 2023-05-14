// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXiNLjlFhsWx5fM3D5z3H8tcetGTL-7i0",
  authDomain: "cars-doctor-c4d96.firebaseapp.com",
  projectId: "cars-doctor-c4d96",
  storageBucket: "cars-doctor-c4d96.appspot.com",
  messagingSenderId: "562504831626",
  appId: "1:562504831626:web:c58c98ae9fc634d7a4d373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;