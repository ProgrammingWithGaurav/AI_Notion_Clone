// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCN5p2v9-Z3jmSb6fOzMA8cLzGiBViJSGw",
  authDomain: "notion-clone-aa6f3.firebaseapp.com",
  projectId: "notion-clone-aa6f3",
  storageBucket: "notion-clone-aa6f3.appspot.com",
  messagingSenderId: "129870803611",
  appId: "1:129870803611:web:423d660ceea6b5463ccc3e"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };