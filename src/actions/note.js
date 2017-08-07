import * as NoteActionTypes from '../actiontypes/note'
import { UsersRef } from '../firebase'
let NotesRef = UsersRef.child('/Share/Notes')

export function getUserNotesPath(user) {
  NotesRef = UsersRef.child(user.uid).child('/Notes')
}

export function addNote(note) {
  return dispatch => {
    dispatch(NoteRequestedAction())
    const newRef = NotesRef.push(note)
    const newNote = { ...note, key: newRef.key }
    dispatch(addToNotes(newNote))
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

    NotesRef.on('child_removed', (snap) => {
      dispatch(destroyNote(snap.key))
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

const addToNotes = note => {
  return {
    type: NoteActionTypes.ADD_NOTE,
    note
  }
}

export const destroyNote = key => {
  return {
    type: NoteActionTypes.DELETE_NOTE,
    key
  }
}

export const changeNote = note => {
  return {
    type: NoteActionTypes.EDIT_NOTE,
    note
  }
}
