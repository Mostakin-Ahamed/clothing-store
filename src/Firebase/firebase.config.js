// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-My-I1uHCLW5UDWI27cJgXPOKxsIIuyQ",
  authDomain: "clothing-store-a9fe8.firebaseapp.com",
  projectId: "clothing-store-a9fe8",
  storageBucket: "clothing-store-a9fe8.appspot.com",
  messagingSenderId: "130264113851",
  appId: "1:130264113851:web:201b75feba2f5f9d587f9e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app