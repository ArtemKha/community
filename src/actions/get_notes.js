import * as NotesActionTypes from '../actiontypes/notes'
import { UsersRef } from '../firebase'

export function getNotes(user) {
  return dispatch => {
    dispatch(getNotesRequestedAction())
    return UsersRef.child(user.uid).child('/Notes')
      .once('value', snap => {
      let notes = []
      snap.forEach(note => {
        notes.push({...note.val(), key: note.key})
      })
      dispatch(getNotesFulfilledAction(notes))
    })
    .catch((error) => {
      console.log(error)
      dispatch(getNotesRejectedAction(error))
    })
  }
}

function getNotesRequestedAction() {
  return {
    type: NotesActionTypes.GET_NOTES_REQUESTED
  }
}

function getNotesRejectedAction(error) {
  return {
    type: NotesActionTypes.GET_NOTES_REJECTED,
    error
  }
}

function getNotesFulfilledAction(notes) {
  return {
    type: NotesActionTypes.GET_NOTES_RECEIVED,
    notes
  }
}
