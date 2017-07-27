import * as NoteActionTypes from '../actiontypes/filter';

export default function filterTracks(state = '', action) {
  switch (action.type) {
    case NoteActionTypes.SELECT_NOTE:
      return action.filter.toUpperCase();
    case NoteActionTypes.SHOW_ALL:
      return '';
    default:
      return state;
  }
};
