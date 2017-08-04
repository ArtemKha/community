import * as NotesActionTypes from '../actiontypes/notes'
import * as NoteActionTypes from '../actiontypes/note'

export default function NotesFb(state = [], action) {
  switch(action.type) {
    case NotesActionTypes.GET_NOTES_RECEIVED:
      return action.notes

    case NoteActionTypes.ADD_NOTE:
      return [
        ...state,
        action.note
      ]
      //maybe Array.filter will work better
    case NoteActionTypes.DELETE_NOTE:
      const deletedNote = state.find(note => { return note.key === action.key })
      const deletedIndex = state.indexOf(deletedNote)

      return [
        ...state.slice(0, deletedIndex),
        ...state.slice(deletedIndex + 1)
      ]

    case NoteActionTypes.EDIT_NOTE:
      const editedNote = state.find(note => { return note.key === action.note.key })
      const editedIndex = state.indexOf(editedNote)

      return [
        ...state.slice(0, editedIndex),
        {
          ...editedNote,
          title: action.note.title,
          text: action.note.text
        },
        ...state.slice(editedIndex + 1)
      ]
    default:
      return state;
  }
}
