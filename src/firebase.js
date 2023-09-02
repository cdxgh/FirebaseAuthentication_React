import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDfnhX_9_R9Q8H9U7GzbygpApC-MaNgHr8",

  authDomain: "bookstoreapp-ee51d.firebaseapp.com",

  projectId: "bookstoreapp-ee51d",

  storageBucket: "bookstoreapp-ee51d.appspot.com",

  messagingSenderId: "278140668037",

  appId: "1:278140668037:web:20567340dfaebaf71641ec",

  measurementId: "G-KVY7W38GY9",
  databaseURL: "https://bookstoreapp-ee51d-default-rtdb.firebaseio.com/"
};
export const app = initializeApp(firebaseConfig);
