import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0vTUTC9qRGHsfSTms85dgl3r5tZCBNVg",
  authDomain: "react-netflix-clone-632bd.firebaseapp.com",
  projectId: "react-netflix-clone-632bd",
  storageBucket: "react-netflix-clone-632bd.appspot.com",
  messagingSenderId: "676665227362",
  appId: "1:676665227362:web:3bf43842414f845a6e793b",
  measurementId: "G-3G2M340T3P"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);