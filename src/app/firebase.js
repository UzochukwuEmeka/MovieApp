// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxXn8p_8Xrno7UIQ-LCzl-KcwB10wLKUk",
    authDomain: "netflik-517f6.firebaseapp.com",
    projectId: "netflik-517f6",
    storageBucket: "netflik-517f6.appspot.com",
    messagingSenderId: "57677503547",
    appId: "1:57677503547:web:8ef836a5e18aba3ce1101e",
    measurementId: "G-GG91YYZTEX"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }