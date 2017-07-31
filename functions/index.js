const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.newNoteAlert = functions.database.ref('/Users/Notes/')
  .onWrite((event) => {
    const note = event.data.val()
    console.log('from FB', note)
    const getTokens = admin.database().ref('Users').once('value')
      .then((snapshot) => {
        const tokens = []
        snapshot.forEach((user) => {
          const token = user.child('token').val()
          if (token) tokens.push(token)
        })
        return tokens
      })

    const getNote = admin.database().ref('Users').child('Notes').child(note.key)
    Promise.all([getTokens, getNote]).then(([ tokens, note ]) => {
      const payload = {
        notification: {
          title: `Reminder from JustNote: ${note.title}`,
          body: note.text
        }
      }

      auth.messaging().sendToDevice(tokens, payload).catch(console.error)
    })
  })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
