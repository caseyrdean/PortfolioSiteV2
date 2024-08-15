// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeqdf_WzAtNTQss6ZuKJVbo60uLypp4R0",
    authDomain: "portfolio-website-nextjs-test1.firebaseapp.com",
    projectId: "portfolio-website-nextjs-test1",
    storageBucket: "portfolio-website-nextjs-test1.appspot.com",
    messagingSenderId: "1026279158229",
    appId: "1:1026279158229:web:a8389fb074c1030bd18d5c",
    measurementId: "G-D5JZFWP4TP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);