const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)
const adminId = 'B0S9iLdTCIPmxcddVXAQ8vLO6fa2'

exports.newNoteAlert = functions.database.ref(`/Users/${adminId}/Notes/{noteId}`)
  .onWrite((event) => {
    const noteId = event.params.noteId

    const getTokens = admin.database().ref('Users').once('value')
      .then((snapshot) => {
        const tokens = []
        snapshot.forEach( user => {
          const token = user.child('token').val()
          if (token) tokens.push(token)
        })
        return tokens
      })

    const getNote = admin.database().ref('Users').once('value')
      .then((snapshot) => {
        const note = snapshot.child(adminId).child('Notes').child(noteId).val()
        return note
      })

    Promise.all([getTokens, getNote]).then(([tokens, note]) => {
      const payload = {
        notification: {
          title: note.title,
          body: note.text,
        }
      }

      admin.messaging().sendToDevice(tokens, payload).catch(console.error)
    })
  })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
