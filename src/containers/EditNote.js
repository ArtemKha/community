import { connect } from 'react-redux'
import { addNote, removeNote, updateNote } from '../actions'

import EditNote from '../components/EditNote'


function mapStateToProps(state) {
  return {
    notes: state.NoteList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNote: note => dispatch(addNote(note)),
    removeNote: id => dispatch(removeNote(id)),
    updateNote: (id, note) => dispatch(updateNote(id, note)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote)
