import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAhsGPnedTOxo9XAH_5c4a8S_xVih6xwgw",
    authDomain: "mprprojectsem4.firebaseapp.com",
    projectId: "mprprojectsem4",
    storageBucket: "mprprojectsem4.appspot.com",
    messagingSenderId: "722204704573",
    appId: "1:722204704573:web:c06f0ae763c773c9b1cf54"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();