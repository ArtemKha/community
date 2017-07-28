import { database, messaging } from './firebase'

export default function(user) {
  messaging.requestPermission()
    .then(() => messaging.getToken())
    .then((token) => {
      console.log('token', token)
      database.ref('Users')
        .child(user.uid)
        .child('token')
        .set(token)
    })
    .catch(console.error)
}
