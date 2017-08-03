const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.newNoteAlert = functions.database.ref('/Users/')
  .onWrite((event) => {
    const note = event.data.val()
    const getTokens = admin.database().ref('Users').once('value')
      .then((snapshot) => {
        const tokens = []
        snapshot.forEach((user) => {
          const token = user.child('token').val()
          if (token) tokens.push(token)
        })
        return tokens
      })

    // const getNote = admin.database().ref('Users').child('Notes').child(note.key)
    Promise.all([getTokens]).then(([ tokens ]) => {
      const payload = {
        notification: {
          title: `Reminder from JustNote!`,
          body: `Reminder`,
        }
      }

      // admin.messaging().sendToDevice(tokens, payload).catch(console.error)
    })
  })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
