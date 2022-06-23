import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyDruWVpii2S_w-DmWitkBfO8oNzeuxPQS8",
    authDomain: "clone-f465a.firebaseapp.com",
    projectId: "clone-f465a",
    storageBucket: "clone-f465a.appspot.com",
    messagingSenderId: "231829347409",
    appId: "1:231829347409:web:3fdfecf9f6baab30142c70",
    measurementId: "G-2CDENT55BW"
  
});

const auth = firebase.auth();

export { auth };