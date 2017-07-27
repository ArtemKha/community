import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { selectNote } from '../actions/filter'
import { signOut } from '../actions/auth'
import Navigation from '../components/Navigation'

export default withRouter(connect(null, { selectNote, signOut })(Navigation))
