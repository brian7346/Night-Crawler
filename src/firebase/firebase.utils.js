import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDYDdnKNLVNcPdGn4Ejczz_Waw8KHBcAi0",
  authDomain: "night-crawler-be0d1.firebaseapp.com",
  databaseURL: "https://night-crawler-be0d1.firebaseio.com",
  projectId: "night-crawler-be0d1",
  storageBucket: "night-crawler-be0d1.appspot.com",
  messagingSenderId: "1095073600134",
  appId: "1:1095073600134:web:79b0c02703bd2a02a5b707",
  measurementId: "G-LHT5ZZ10LF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
