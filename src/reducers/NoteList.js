import * as NoteActionTypes from '../actiontypes'
import notes from '../notesfile'

export default function NoteList (state = notes, action) {
  switch(action.type) {
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
          if (note.id === action.note.id){
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
      return state
  }
}
