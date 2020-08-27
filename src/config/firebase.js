import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
   
        apiKey: "AIzaSyAs2tLTyg49ShITXNAGyRwU-4T8rWSWHmg",
        authDomain: "instagran-clone-c5303.firebaseapp.com",
        databaseURL: "https://instagran-clone-c5303.firebaseio.com",
        projectId: "instagran-clone-c5303",
        storageBucket: "instagran-clone-c5303.appspot.com",
        messagingSenderId: "704394255875",
        appId: "1:704394255875:web:c34a17fcbf7f08ca9e3836",
        measurementId: "G-2PY8X49MDH"
    
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};