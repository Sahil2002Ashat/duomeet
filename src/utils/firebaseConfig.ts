// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {collection, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABRVRHuoWHRP9hMgAF2bl9aUiJDQRHpyY",
  authDomain: "duomeet-60a87.firebaseapp.com",
  projectId: "duomeet-60a87",
  storageBucket: "duomeet-60a87.appspot.com",
  messagingSenderId: "825642957956",
  appId: "1:825642957956:web:ff46df744ee27add3e56d1",
  measurementId: "G-QGBLGR0XF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "users");
export const usersRef = collection(firebaseDB, "users")
export const meetingsRef = collection(firebaseDB, "meetings");