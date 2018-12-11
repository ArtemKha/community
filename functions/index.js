const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://justnote-3337b.firebaseio.com'
})

exports.newNoteAlert = functions.database
  .ref(`/Users/{userId}/Notes/{noteId}`)
  .onWrite((snapshot, context) => {
    const noteId = context.params.noteId

    const getTokens = admin
      .database()
      .ref('Users')
      .once('value')
      .then(snapshot => {
        const tokens = []
        snapshot.forEach(user => {
          const token = user.child('token').val()
          if (token) tokens.push(token)
        })
        return tokens
      })

    const userId = context.params.userId
    const getNote = admin
      .database()
      .ref('Users')
      .once('value')
      .then(snapshot => {
        const note = snapshot
          .child(userId)
          .child('Notes')
          .child(noteId)
          .val()
        return note
      })

    Promise.all([getTokens, getNote]).then(([tokens, note]) => {
      const payload = {
        notification: {
          title: note.title,
          body: note.text
        }
      }

      admin
        .messaging()
        .sendToDevice(tokens, payload)
        .catch(console.error)
    })
  })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
