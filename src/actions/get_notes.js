import * as NotesActionTypes from '../actiontypes/notes'
import { NotesRef } from '../firebase'

export function getNotes() {
  return dispatch => {
    dispatch(getNotesRequestedAction())
    return NotesRef.once('value', snap => {
      let notes = []
      snap.forEach(note => {
        notes.push({...note.val(), key: note.key})
      })
      dispatch(getNotesFulfilledAction(notes))
    })
    .catch((error) => {
      console.log(error)
      dispatch(getNotesRejectedAction())
    })
  }
}

function getNotesRequestedAction() {
  return {
    type: NotesActionTypes.GET_NOTES_REQUESTED
  }
}

function getNotesRejectedAction() {
  return {
    type: NotesActionTypes.GET_NOTES_REJECTED
  }
}

function getNotesFulfilledAction(notes) {
  return {
    type: NotesActionTypes.GET_NOTES_RECEIVED,
    notes
  }
}
