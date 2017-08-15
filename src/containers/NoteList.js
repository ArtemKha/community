import { connect } from 'react-redux'
import { showAll } from '../actions/filter'
import { withRouter } from 'react-router'
import NoteList from '../components/NoteList'


function mapStateToProps(state) {
  return {
    notes: state.Notes,
    filter: state.Search,
    loading: state.NotesLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showAll: () => dispatch(showAll()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteList))
