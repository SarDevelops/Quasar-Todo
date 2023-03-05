// import { boot } from 'quasar/wrappers'

// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
// })

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTlam9GGOLxzU1AjHz1vbLbcPHwa6b1vg",
  authDomain: "quasar-todos-a1044.firebaseapp.com",
  projectId: "quasar-todos-a1044",
  storageBucket: "quasar-todos-a1044.appspot.com",
  messagingSenderId: "639892273358",
  appId: "1:639892273358:web:6fb2e1773d4fa2291eb89f",
  measurementId: "G-R6827FFTKL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
