import * as NoteActionTypes from '../actiontypes';

const initialState = [
  {
    title: 'Church backs transgender services',
    text: 'Bishops and campaigners hailed a major advance in the Church of England’s attitude towards LGBT people'
  },
  {
    title: 'Remainers plot to sabotage May’s Repeal Bill',
    text: 'Theresa May claimed that plans for a trade deal with America had put Brexit back on track as critics warned '
  },
  {
    title: 'Terror informants face lie tests',
    text: 'Scotland Yard’s counter-terrorism division has started performing “lie detector” tests on its informants'
  },
  {
    title: 'Church transgender',
    text: 'Bishops hailed a major advance in the Church of England’s towards LGBT people'
  }
];

export default function Note (state = initialState, action) {
  switch(action.type) {
    case NoteActionTypes.ADD_NOTE:
      return [
        ...state,
        action.note
      ];

    case NoteActionTypes.DELETE_NOTE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case NoteActionTypes.EDIT_NOTE:
      return [
        ...state.map((note, index) => {
          if (index === action.index){
            return {
              ...note,
              title: action.note.title,
              text: action.note.text
            };
          }
        return note;
        })
      ];

    default:
      return state;
  }
};
