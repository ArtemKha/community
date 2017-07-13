import { connect } from 'react-redux'
import NoteList from '../components/NoteList'


function mapStateToProps(state) {
  return {
    notes: state.NoteList,
  }
}

export default connect(mapStateToProps, null)(NoteList)
