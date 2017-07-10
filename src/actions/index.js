import * as NoteActionTypes from '../actiontypes';

export const addNote = note => {
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

export const updateNote = note => {
  return {
    type: NoteActionTypes.EDIT_NOTE,
    note
  };
};
