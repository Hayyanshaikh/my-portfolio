import firebase from "firebase/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import firebaseConfig from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firestore, storage };