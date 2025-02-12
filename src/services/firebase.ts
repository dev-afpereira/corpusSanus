import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQOoKdwYq_Wbg-ByNd_2JWMLYS8q4nYqI",
  authDomain: "corpossanus.firebaseapp.com",
  projectId: "corpossanus",
  storageBucket: "corpossanus.appspot.com",
  messagingSenderId: "656328835501",
  appId: "1:656328835501:web:68fac8ee171ac978532124",
  measurementId: "G-PZ3XZ435PG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;