import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDbo_cN1goy7sPWU1xnN5JmA05vn6GWjnM",
  authDomain: "wokr-project.firebaseapp.com",
  projectId: "wokr-project",
  storageBucket: "wokr-project.appspot.com",
  //messagingSenderId: "189580592206",
  appId: "1:189580592206:web:5df7e969d662fde3976f1f",
  measurementId: "G-1P3V15SXE8",
  type: "service_account",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const actionCodeSettings = {
  url: import.meta.env.VITE_CONFIRMATION_EMAIL_REDIRECT,
  handleCodeInApp: true,
};

export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
