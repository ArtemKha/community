import * as NotesActionTypes from '../actiontypes/notes'
import * as NoteActionTypes from '../actiontypes/note'
import { find, propEq } from 'ramda'

export default function NotesFb(state = [], action) {
  switch(action.type) {
    case NotesActionTypes.GET_NOTES_RECEIVED:
      return action.notes

    case NoteActionTypes.ADD_NOTE:
      return [
        ...state,
        action.note,
      ]

    case NoteActionTypes.DELETE_NOTE:
      const dnote = find(propEq('key', action.key), state)
      const dIndex = state.indexOf(dnote)
      return [
        ...state.slice(0, dIndex),
        ...state.slice(dIndex + 1)
      ]

    case NoteActionTypes.EDIT_NOTE:
      const eNote = find(propEq('key', action.note.key), state)
      const eIndex = state.indexOf(eNote)
      const { title, text, timestamp, updated } = action.note
      return [
        ...state.slice(0, eIndex),
        {
          ...eNote,
          title,
          text,
          timestamp,
          updated
        },
        ...state.slice(eIndex + 1)
      ]

    default:
      return state;
  }
}
