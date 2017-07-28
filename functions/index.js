const functions = require('firebase-functions')
const admin = require('firebase-admin')
const icon = require('../public/favicon.ico')

exports.newMessageAlert = functions.database.ref('/Users/Notes/{note}')
  .onWrite((event) => {
    const note = event.data.val()

    const getTokens = admin.database().app().ref('Users').once('value')
      .then((snapshot) => {
        const tokens = []
        snapshot.forEach((user) => {
          const token = user.child('token').val()
          if (token) tokens.push(token)
        }
        return tokens
      })

    const getNote = admin.database().app().ref('Users/Notes').child(note.uid)
    Promise.all([getTokens, getNote]).them(([ tokens, note ]) => {
      const payload = {
        notification: {
          title: `Reminder from JustNote: ${note.title}`,
          body: note.test,
          icon: icon
        }
      }
    })
  })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
