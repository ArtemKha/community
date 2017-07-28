import { connect } from 'react-redux'
import { addNote, removeNote, updateNote } from '../actions/note'
import { withRouter } from 'react-router'

import TextFields from '../components/TextFields'

function mapStateToProps(state) {
  return {
    notes: state.Notes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNote: note => dispatch(addNote(note)),
    removeNote: id => dispatch(removeNote(id)),
    updateNote: (id, note) => dispatch(updateNote(id, note)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TextFields))
