import { connect } from 'react-redux'
import { addNote, updateNote } from '../actions'

import ControlButtons from '../components/TextFields/ControlButtons'

function mapDispatchToProps(dispatch) {
  return {
    addNote: note => dispatch(addNote(note)),
    updateNote: (id, note) => dispatch(updateNote(id, note)),
  }
}

export default connect(null, mapDispatchToProps)(ControlButtons)
