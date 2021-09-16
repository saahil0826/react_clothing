import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAVRPmrmx5r-coMet205z6EM-FIVcTLpyY",
  authDomain: "crwn-db-d159e.firebaseapp.com",
  databaseURL: "https://crwn-db-d159e.firebaseio.com",
  projectId: "crwn-db-d159e",
  storageBucket: "crwn-db-d159e.appspot.com",
  messagingSenderId: "198960932892",
  appId: "1:198960932892:web:27239f85f0d1c7ff8017d9",
  measurementId: "G-35WGG4DVC0"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
