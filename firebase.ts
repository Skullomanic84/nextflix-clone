// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj9pheB9SqeJkenYMUzayASP3M9_X03rE",
  authDomain: "netflix-clone-f56ac.firebaseapp.com",
  projectId: "netflix-clone-f56ac",
  storageBucket: "netflix-clone-f56ac.appspot.com",
  messagingSenderId: "917829765433",
  appId: "1:917829765433:web:fa766ffb78f9db36a6c0e8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app 
export { auth, db}