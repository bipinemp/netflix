import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkwJoTuDhYIOq9Ugq1iVMcMdt6lmMR2EI",
  authDomain: "netflix-clone-e6beb.firebaseapp.com",
  projectId: "netflix-clone-e6beb",
  storageBucket: "netflix-clone-e6beb.appspot.com",
  messagingSenderId: "302364866994",
  appId: "1:302364866994:web:f1a0ba806a07a21c350cab",
  measurementId: "G-BLLEEDZ5GD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
