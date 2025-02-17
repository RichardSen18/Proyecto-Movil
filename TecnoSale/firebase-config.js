// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHMcJ0quw0BtCJXlQLgYTvRJiN8MLbmF0",
  authDomain: "tecnosale-403ab.firebaseapp.com",
  projectId: "tecnosale-403ab",
  storageBucket: "tecnosale-403ab.firebasestorage.app",
  messagingSenderId: "1017786033382",
  appId: "1:1017786033382:web:6cd84c0340f4b52f8a0727",
  measurementId: "G-72MEJNL1TL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const db = getFirestore(app);