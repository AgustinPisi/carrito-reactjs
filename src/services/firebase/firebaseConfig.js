
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBoXN7iAFWlk7pcRXwUFSDXx_0nH_wOlaw",
  authDomain: "apcollectiblesreact.firebaseapp.com",
  projectId: "apcollectiblesreact",
  storageBucket: "apcollectiblesreact.appspot.com",
  messagingSenderId: "862206815476",
  appId: "1:862206815476:web:7b7c0aeafdce73ecbc82a1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 