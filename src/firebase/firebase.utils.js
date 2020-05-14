import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBRCqtUmKyDef9hputtQLLdTTiqX5_hdbo",
  authDomain: "wine-a-little.firebaseapp.com",
  databaseURL: "https://wine-a-little.firebaseio.com",
  projectId: "wine-a-little",
  storageBucket: "wine-a-little.appspot.com",
  messagingSenderId: "1035080099099",
  appId: "1:1035080099099:web:be450962c00b72a5001fbe"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if user is signed out, return
  if (!userAuth) return;

  // see if user already exists
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShop = await userRef.get();

  // if user does not exist, add it to the database
  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('Error creating user', err);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;