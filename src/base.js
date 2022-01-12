import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnv9uzS-WLKSmikr-P_A5TwQCRPngPiIM",
  authDomain: "very-hot-burgers-4b86a.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-4b86a-default-rtdb.europe-west1.firebasedatabase.app",
});
const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;