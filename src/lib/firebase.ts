import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7ECUQJGzCMnNhx6x1aTDvEQoggrBdr7Q",
  authDomain: "civictrack-28c5c.firebaseapp.com",
  projectId: "civictrack-28c5c",
  storageBucket: "civictrack-28c5c.firebasestorage.app",
  messagingSenderId: "103215690396",
  appId: "1:103215690396:web:17195b5b14c7c4de193359",
  measurementId: "G-HBJ4C7M9YJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
