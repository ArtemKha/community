import { database } from '../firebase'

export const firebase = () => {
  return database.ref().on('value', (snapshot) => {
    return snapshot.val()
  })
}

export const pushState = (state) => {
  return database.ref().set(state)
}
