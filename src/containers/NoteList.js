import { connect } from 'react-redux'
import { showAll } from '../actions'
import NoteList from '../components/NoteList'


function mapStateToProps(state) {
  return {
    notes: state.NoteList,
    filter: state.Filter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showAll: filter => dispatch(showAll(filter)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
