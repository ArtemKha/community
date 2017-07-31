import * as NoteActionTypes from '../actiontypes/note'
import { NotesRef as UsersRef } from '../firebase'
let NotesRef = UsersRef.child('/Share/Notes')

export function getUserNotesPath(user) {
  NotesRef = UsersRef.child(user.uid).child('/Notes')
}

export function addNote(note) {
  return dispatch => {
    dispatch(NoteRequestedAction())
    NotesRef.push(note)
    .catch((error) => {
      console.log(error)
      dispatch(NoteChangeRejectedAction())
    })
  }
}

export function removeNote(key) {
  return dispatch => {
    dispatch(NoteRequestedAction())
    NotesRef.child(key).remove()
  }
}

export function updateNote(note) {
  return dispatch => {
    dispatch(NoteRequestedAction())
    NotesRef.child(note.key).set(note)
  }
}

export function watchNoteChangedEvent(user) {
  NotesRef = UsersRef.child(user.uid).child('/Notes')
  return dispatch => {
    NotesRef.on('child_added', (snap) => {
      const note = { ...snap.val(), key: snap.key}
      dispatch(addToNotes(note))
    })

    NotesRef.on('child_removed', (snap) => {
      dispatch(destroyNote(snap.val().index))
    })

    NotesRef.on('child_changed', (snap) => {
      dispatch(changeNote(snap.val()))
    })
  }
}

function NoteRequestedAction() {
  return {
    type: NoteActionTypes.NOTE_REQUESTED
  }
}

function NoteChangeRejectedAction() {
  return {
    type: NoteActionTypes.NOTE_REJECTED
  }
}

const addToNotes = note => {
  return {
    type: NoteActionTypes.ADD_NOTE,
    note
  }
}

export const destroyNote = index => {
  return {
    type: NoteActionTypes.DELETE_NOTE,
    index
  }
}

export const changeNote = note => {
  return {
    type: NoteActionTypes.EDIT_NOTE,
    note
  }
}
