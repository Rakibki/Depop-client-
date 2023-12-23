// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDN7iYWoDI5u7xYrRqX3UFABl5jucWNFwc",
  authDomain: "depop-6136f.firebaseapp.com",
  projectId: "depop-6136f",
  storageBucket: "depop-6136f.appspot.com",
  messagingSenderId: "623705759915",
  appId: "1:623705759915:web:b74595e1cccb55ceedd7ee"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth