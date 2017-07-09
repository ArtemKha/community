import { connect } from 'react-redux';
import { addNote, removeNote } from '../actions';

import '../css/App.css';
import Notes from '../components/Notes';


function mapStateToProps(state) {
  return {
    notes: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNote: note => dispatch(addNote(note)),
    removeNote: id => dispatch(removeNote(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
