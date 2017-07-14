import { connect } from 'react-redux'
import { selectNote } from '../actions'

import Navigation from '../components/Navigation'

function mapDispatchToProps(dispatch) {
  return {
    selectNote: filter => dispatch(selectNote(filter)),
  }
}

export default connect(null, mapDispatchToProps)(Navigation)
