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

    case NoteActionTypes.DELETE_NOTE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]

    case NoteActionTypes.EDIT_NOTE:
      return [
        ...state.map(note => {
          if (note.key === action.note.key){
            return {
              ...note,
              title: action.note.title,
              text: action.note.text
            }
          }
        return note
        })
      ]
    default:
      return state;
  }
}
