import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBaDE3BK2HuZWSmTi3m9kepgfMtuCJKG34",
    authDomain: "crwn-db-62750.firebaseapp.com",
    projectId: "crwn-db-62750",
    storageBucket: "crwn-db-62750.appspot.com",
    messagingSenderId: "752823823739",
    appId: "1:752823823739:web:fbff6c64cedda45dc4a1de"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;