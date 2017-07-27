import * as NotesActionTypes from '../actiontypes/notes'
// import * as NoteActionTypes from '../actiontypes'

export default function NotesFb(state = [], action) {
  switch(action.type) {
    case NotesActionTypes.GET_NOTES_FULFILLED:
      return action.notes
    default:
      return state;
  }
}
