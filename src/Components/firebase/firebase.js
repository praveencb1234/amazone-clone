import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB76vpP3czLQ303m-SOeImCwfCHOlZJTPc",
  authDomain: "e-clone-c4056.firebaseapp.com",
  projectId: "e-clone-c4056",
  storageBucket: "e-clone-c4056.appspot.com",
  messagingSenderId: "1037766594747",
  appId: "1:1037766594747:web:df4dc65768933bf4e7999e",
  measurementId: "G-F7JSR29NB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const  auth=getAuth();
export default app;