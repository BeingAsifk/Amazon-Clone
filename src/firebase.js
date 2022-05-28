import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBVWmJ_ySCV1s1ECGG2Wb7Ej16XI_2UHw",
  authDomain: "clone-d33b6.firebaseapp.com",
  projectId: "clone-d33b6",
  storageBucket: "clone-d33b6.appspot.com",
  messagingSenderId: "727075866690",
  appId: "1:727075866690:web:8ff6a8f7ab7562f72905db",
  measurementId: "G-F2ZFYB29CS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
