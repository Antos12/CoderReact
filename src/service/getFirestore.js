import firebase from "firebase";

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBfp23j0EgmmBotRIHw62mnSQbLKz7OY8Y",
    authDomain: "frikimania-d3cbe.firebaseapp.com",
    projectId: "frikimania-d3cbe",
    storageBucket: "frikimania-d3cbe.appspot.com",
    messagingSenderId: "594803841604",
    appId: "1:594803841604:web:799ff6f6c8d1152de53a11"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export function getFirestore(){
      return firebase.firestore(app)
  }

  