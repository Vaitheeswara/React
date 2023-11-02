import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA4m4KxDjNHh8vtoMWjcluvQBHhJ1D6Vuw",
  authDomain: "react-test-f2d98.firebaseapp.com",
  projectId: "react-test-f2d98",
  storageBucket: "react-test-f2d98.appspot.com",
  messagingSenderId: "175835396412",
  appId: "1:175835396412:web:84836b7f6eef2723688639",
  measurementId: "G-VD6KJT4XKB"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default firebaseApp;
