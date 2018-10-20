import firebase from "firebase";

var config = {
  apiKey: "AIzaSyC_5DKvhsgcJlTa_W1PU1FuyRkDF-zkGUs",
  authDomain: "owly-app.firebaseapp.com",
  databaseURL: "https://owly-app.firebaseio.com",
  projectId: "owly-app",
  storageBucket: "owly-app.appspot.com",
  messagingSenderId: "94235768372"
};
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
