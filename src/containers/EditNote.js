import { connect } from 'react-redux';
import { addNote, removeNote, updateNote } from '../actions';

import EditNote from '../components/EditNote';


function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNote: note => dispatch(addNote(note)),
    removeNote: index => dispatch(removeNote(index)),
    updateNote: (index, note) => dispatch(updateNote(index, note)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);
