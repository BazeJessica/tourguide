
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBfk_kUj7MI4OngmNLhm_5RNtYavq8iT7U",
  authDomain: "airbnb-9fa22.firebaseapp.com",
  projectId: "airbnb-9fa22",
  storageBucket: "airbnb-9fa22.appspot.com",
  messagingSenderId: "518071882944",
  appId: "1:518071882944:web:67ff577d2c9949eeeb4925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  auth = getAuth(app)
export const db =  getFirestore(app)
