import * as NoteActionTypes from '../actiontypes';

export const addNote = (note) => {
  return {
    type: NoteActionTypes.ADD_NOTE,
    note
  };
};

export const removeNote = index => {
  return {
    type: NoteActionTypes.DELETE_NOTE,
    index
  };
};

export const updateNote = (index, note)  => {
  return {
    type: NoteActionTypes.EDIT_NOTE,
    index,
    note
  };
};
