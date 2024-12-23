// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPrOJSrFu7qvxEqNP87OiGsy4kXRO1Hgg",
  authDomain: "task-manager-rn-6af53.firebaseapp.com",
  projectId: "task-manager-rn-6af53",
  storageBucket: "task-manager-rn-6af53.firebasestorage.app",
  messagingSenderId: "59104179007",
  appId: "1:59104179007:web:73056e4460d0163010d98a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
