import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxNh_9wwuU6IxpsD3kUxUABGXQXJc7dYI",
  authDomain: "coder-e-commerce-4fb76.firebaseapp.com",
  projectId: "coder-e-commerce-4fb76",
  storageBucket: "coder-e-commerce-4fb76.firebasestorage.app",
  messagingSender: "816831279355",
  appId: "1:816831279355:web:eb907938f3253f61a0405e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
