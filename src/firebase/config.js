import app from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyA1kkcPGlbqJgYj9LORSD0C8POX1qHCa2w",
    authDomain: "job-listing-f302a.firebaseapp.com",
    projectId: "job-listing-f302a",
    storageBucket: "job-listing-f302a.appspot.com",
    messagingSenderId: "1029077818660",
    appId: "1:1029077818660:web:85b650a45c61605ceaa7b1"
  };

  // Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app}