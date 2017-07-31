importScripts("https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/4.2.0/firebase-messaging.js")

const config = {
  messagingSenderId: "573770206685"
}

firebase.initializeApp(config)
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler((payload) => {
  const title = payload.title
  const options = {
    body: payload.body,
  }

  self.registration.showNotification(title, options)
})
