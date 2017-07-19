import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { selectNote } from '../actions'
import Navigation from '../components/Navigation'

export default withRouter(connect(null, { selectNote })(Navigation))
