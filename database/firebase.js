import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCpYD6hzSMNPy92iQIQhCpzGlR-BAc6aMw",
    authDomain: "chat-dispatch.firebaseapp.com",
    projectId: "chat-dispatch",
    storageBucket: "chat-dispatch.appspot.com",
    messagingSenderId: "36078699978",
    appId: "1:36078699978:web:2467c78fe68ddc8e207b33"
};



//Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

export default {firebase, db, auth}

