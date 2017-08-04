import * as NotesActionTypes from '../actiontypes/notes'

export default function NotesLoading(state = false, action) {
  switch(action.type) {
    case NotesActionTypes.GET_NOTES_REQUESTED:
      return true
    case NotesActionTypes.GET_NOTES_RECEIVED:
      return false
    default:
      return state;
  }
}
