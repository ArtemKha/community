import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyC-vQSOHRoQce3gajeW9M_U67uzrTwJkJc",
  authDomain: "justnote-3337b.firebaseapp.com",
  databaseURL: "https://justnote-3337b.firebaseio.com",
  projectId: "justnote-3337b",
  storageBucket: "",
  messagingSenderId: "573770206685"
}

firebase.initializeApp(config)

export default firebase
export const auth = firebase.auth()
export const database = firebase.database()
export const messaging = firebase.messaging()
export const NotesRef = database.ref('/Users')
