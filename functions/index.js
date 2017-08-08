const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.newNoteAlert = functions.database.ref('/Users/{uid}/Notes/{noteId}')
  .onWrite((event) => {
    // const data = event.data.val()
    const uid = event.params.uid
    const noteId = event.params.noteId

    const getToken = admin.database().ref('Users').once('value')
      .then((snapshot) => {
        const token = snapshot.child(uid).child('token').val()
        return token
      })

    const getNote = admin.database().ref('Users').once('value')
      .then((snapshot) => {
        const note = snapshot.child(uid).child('Notes').child(noteId).val()
        console.log('time', note.timestamp)
        return note
      })

    Promise.all([getToken, getNote]).then(([token, note]) => {
      const payload = {
        notification: {
          title: note.title,
          body: note.text,
        }
      }

      setTimeout(function(){
        admin.messaging().sendToDevice([token], payload).catch(console.error)
      }, 60000);

    })
  })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
