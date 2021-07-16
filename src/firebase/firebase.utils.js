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

export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if(!userAuth) return;

    const userRef = firestore.collection('users').doc(userAuth.uid);
    const snapshot = await userRef.get();

    if(!snapshot.exists){ 
        const{ displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;