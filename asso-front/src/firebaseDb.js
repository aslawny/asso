import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDucRjpdrSfWu_hq82SkMSY64JvyVnSrKc",
    authDomain: "asso-f4029.firebaseapp.com",
    databaseURL: "https://asso-f4029-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "asso-f4029",
    //storageBucket: "project-id.appspot.com",
    //messagingSenderId: "sender-id",
    appId: "1:692342511368:web:2e1f896e0abb75642ebebd",
    //measurementId: "G-measurement-id"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();