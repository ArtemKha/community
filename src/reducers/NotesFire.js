import * as NotesActionTypes from '../actiontypes/notes'
import * as NoteActionTypes from '../actiontypes/note'

export default function NotesFb(state = [], action) {
  switch(action.type) {
    case NotesActionTypes.GET_NOTES_RECEIVED:
      return action.notes

    case NoteActionTypes.ADD_NOTE:
      return state.concat(action.note)

    case NoteActionTypes.DELETE_NOTE:
      return state.filter(note => note.key !== action.key)

    case NoteActionTypes.EDIT_NOTE:
    const { title, text, timestamp, updated, key } = action.note

    state.map(note => {
      note.key !== key
        ? note
        : {
          ...note,
          title,
          text,
          timestamp,
          updated
        }
    })

    default:
      return state
  }
}
