import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAxOz2yIElOjQTrKiZ7hOcyTg2qp6fRtJk",
  authDomain: "quasarbbdd.firebaseapp.com",
  databaseURL: "https://quasarbbdd.firebaseio.com",
  projectId: "quasarbbdd",
  storageBucket: "quasarbbdd.appspot.com",
  messagingSenderId: "9634301907",
  appId: "1:9634301907:web:74b23da7eb88aa4b8c1126"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let ddbb = firebase.firestore();

export {ddbb, firebase};