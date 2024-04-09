// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hks-estate.firebaseapp.com",
  projectId: "hks-estate",
  storageBucket: "hks-estate.appspot.com",
  messagingSenderId: "950824998489",
  appId: "1:950824998489:web:82a58710cfe805d587c348",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
