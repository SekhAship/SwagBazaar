// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKpCsY9No-sJrDdeKoP_72aGSYgVemUHg",
    authDomain: "myecom-76b9c.firebaseapp.com",
    projectId: "myecom-76b9c",
    storageBucket: "myecom-76b9c.appspot.com",
    messagingSenderId: "17094096896",
    appId: "1:17094096896:web:0de4a2171e167760a240e5"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }  
