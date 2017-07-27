import * as UserActionTypes from '../actiontypes/user'
import { auth } from '../firebase'

export function signUp(email, password) {
  return dispatch => {
    dispatch(getdUserRequestedAction())
    auth.createUserWithEmailAndPassword(email, password).then(user => {
      dispatch(signedIn(user))
    })
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
  }
}

export function signOut() {
  return dispatch => {
    dispatch(getdUserRequestedAction())
    auth.signOut()
  }
}

export function startListenToAuthChanges(email, password) {
  return dispatch => {
    auth.onAuthStateChanged( user => {
      if (user) {
        dispatch(signedIn(user))
      } else {
        dispatch(signedOut())
      }
    })
  }
}

function getdUserRequestedAction() {
  return {
    type: UserActionTypes.GET_USER_REQUESTED
  }
}

function getUserRejectedAction(error) {
  return {
    type: UserActionTypes.GET_USER_REJECTED,
    error
  }
}

function signedIn(user) {
  return {
    type: UserActionTypes.GET_USER_FULFILLED,
    user
  }
}

function signedOut() {
  return {
    type: UserActionTypes.SIGNED_OUT
  }
}
