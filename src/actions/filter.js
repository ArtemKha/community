import * as NoteActionTypes from '../actiontypes/filter'

export const selectNote = filter => {
  return {
    type: NoteActionTypes.SELECT_NOTE,
    filter
  }
}

export const showAll = () => {
  return {
    type: NoteActionTypes.SHOW_ALL
  }
}
