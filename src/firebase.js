import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC-vQSOHRoQce3gajeW9M_U67uzrTwJkJc",
  authDomain: "justnote-3337b.firebaseapp.com",
  databaseURL: "https://justnote-3337b.firebaseio.com",
  projectId: "justnote-3337b",
  storageBucket: "",
  messagingSenderId: "573770206685"
};

export const fire = firebase.initializeApp(config);
// const db = firebase.database();
// const dbRef = db.ref().child('data');
// export const noteRef = firebase.database().ref('notes');
