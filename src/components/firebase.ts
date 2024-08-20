// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFCqWa2gWsTz6ONIRYURVziF2IEPqSa4g",
  authDomain: "plant-centar.firebaseapp.com",
  databaseURL: "https://plant-centar-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plant-centar",
  storageBucket: "plant-centar.appspot.com",
  messagingSenderId: "539973415559",
  appId: "1:539973415559:web:fa1b7a989a66e93a4d7e22",
  measurementId: "G-68R1MBXRLG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };