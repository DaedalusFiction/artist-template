import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNTosknWvfeqgHSfH5p8Nwj__Lc-1Bsxg",
    authDomain: "shandon-black.firebaseapp.com",
    projectId: "shandon-black",
    storageBucket: "shandon-black.appspot.com",
    messagingSenderId: "457064148933",
    appId: "1:457064148933:web:7d51bf64a1ebc88b4ba5ac",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
