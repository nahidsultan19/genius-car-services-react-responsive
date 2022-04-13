// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjm8Lx8mvY_VsqhZwQT6set0eyt7tidyc",
    authDomain: "genius-car-services-e5c72.firebaseapp.com",
    projectId: "genius-car-services-e5c72",
    storageBucket: "genius-car-services-e5c72.appspot.com",
    messagingSenderId: "758942654882",
    appId: "1:758942654882:web:046c30443eb70a443ed2fb"

    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;