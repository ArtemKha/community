import { connect } from 'react-redux'
import { addNote, removeNote, updateNote } from '../actions'

import ControlButtons from '../components/TextFields/ControlButtons'


function mapStateToProps(state) {
  return {
    // notes: state.NoteList,
    // routing: state.routing
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNote: note => dispatch(addNote(note)),
    removeNote: id => dispatch(removeNote(id)),
    updateNote: (id, note) => dispatch(updateNote(id, note)),
  }
}

export default connect(null, mapDispatchToProps)(ControlButtons)
