import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxYuln9-Hk6F2Hqw61fYxycFSOu5qcyTk",
  authDomain: "upconnect-project.firebaseapp.com",
  projectId: "upconnect-project",
  storageBucket: "upconnect-project.appspot.com",
  messagingSenderId: "425351523228",
  appId: "1:425351523228:web:a3475f09bd1d2f3fa9b659",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
