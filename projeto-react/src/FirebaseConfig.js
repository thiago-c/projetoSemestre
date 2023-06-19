// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY6jLaWj0AAlOYu1XzOEydyqH_faNgIrc",
  authDomain: "projeto-semestral-react.firebaseapp.com",
  projectId: "projeto-semestral-react",
  storageBucket: "projeto-semestral-react.appspot.com",
  messagingSenderId: "130421929832",
  appId: "1:130421929832:web:d73d82eebe2eff6f7b88dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, db };
