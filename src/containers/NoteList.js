import { connect } from 'react-redux'
import { showAll } from '../actions/filter'
import { getNotes } from '../actions/get_notes'
import NoteList from '../components/NoteList'


function mapStateToProps(state) {
  return {
    notes: state.Notes,
    filter: state.Filter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetNotes: () => dispatch(getNotes()),
    showAll: () => dispatch(showAll()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
