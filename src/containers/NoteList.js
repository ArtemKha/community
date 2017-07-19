import { connect } from 'react-redux'
import { showAll } from '../actions'
import NoteList from '../components/NoteList'


function mapStateToProps(state) {
  return {
    notes: state.Notes,
    filter: state.Filter,
  }
}

export default connect(mapStateToProps, { showAll })(NoteList)
