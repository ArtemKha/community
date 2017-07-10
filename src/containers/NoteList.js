import { connect } from 'react-redux'
import { addNote, removeNote, updateNote } from '../actions'

import NoteList from '../components/NoteList'


function mapStateToProps(state, ownProps) {
  return {
    notes: state.NoteList,
    ownProps
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNote: note => dispatch(addNote(note)),
    removeNote: index => dispatch(removeNote(index)),
    updateNote: (index, note) => dispatch(updateNote(index, note)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
