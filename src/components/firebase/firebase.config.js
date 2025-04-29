// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyCI-52FEj6Y0KNF-EtV-GCUzcSoLpdZI",
    authDomain: "dragon-news-authenticati-76185.firebaseapp.com",
    projectId: "dragon-news-authenticati-76185",
    storageBucket: "dragon-news-authenticati-76185.firebasestorage.app",
    messagingSenderId: "224007067343",
    appId: "1:224007067343:web:9dd02f5cfb734ca32c49ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app