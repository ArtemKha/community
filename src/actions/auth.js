import * as UserActionTypes from '../actiontypes/auth'
import { auth, googleAuthProvider } from '../firebase'
import registerMessaging from '../request-messaging-permission'
import { getNotes } from './get_notes'
import { getUserNotesPath, watchNoteChangedEvent } from './note'

export function signUp(email, password) {
  return dispatch => {
    dispatch(getdUserRequestedAction())
    auth.createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      console.log(error)
      dispatch(getUserRejectedAction(error))
    })
  }
}

export function signIn(email, password) {
  return dispatch => {
    dispatch(getdUserRequestedAction())
    auth.signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.log(error)
      dispatch(getUserRejectedAction(error))
    })
  }
}

export function signOut() {
  return dispatch => {
    if (auth.currentUser) {
      dispatch(getdUserRequestedAction())
      auth.signOut()
    }
  }
}

export function startListenToAuthChanges(email, password) {
  return dispatch => {
    auth.onAuthStateChanged( user => {
      if (user) {
        dispatch(signedIn(user))
        dispatch(getNotes(user))
        getUserNotesPath(user)
        dispatch(watchNoteChangedEvent(user))
        registerMessaging(user)
      } else {
        dispatch(signedOut())
      }
    })
  }
}

function getdUserRequestedAction() {
  return {
    type: UserActionTypes.USER_REQUESTED
  }
}

function getUserRejectedAction(error) {
  return {
    type: UserActionTypes.USER_REJECTED,
    error
  }
}

function signedIn(user) {
  return {
    type: UserActionTypes.SIGNED_IN,
    user
  }
}

function signedOut() {
  return {
    type: UserActionTypes.SIGNED_OUT
  }
}
