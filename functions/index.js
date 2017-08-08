const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.newNoteAlert = functions.database.ref('/Users/{uid}/Notes/{note}')
  .onWrite((event) => {
    const data = event.data.val()

    const getToken = admin.database().ref('Users').once('value')
      .then((snapshot) => {
        const token = snapshot.child(uid).child('token').val()
        return token
      })
    //
    // const getToken = admin.database().ref('Users').once('value')
    //   .then((snapshot) => {
    //     const tokens = []
    //     snapshot.forEach((user) => {
    //       const token = user.child('token').val()
    //       if (token) tokens.push(token)
    //     })
    //     return tokens
    //   })

    // const getNote = admin.database().ref('Users')
    //               .child(uid).child('Notes').child(note.key)
    Promise.all([getToken]).then(([ token ]) => {
      const payload = {
        notification: {
          title: `Reminder from JustNote!`,
          body: `Reminder`,
        }
      }

      admin.messaging().sendToDevice(token, payload).catch(console.error)
    })
  })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
