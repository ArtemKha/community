import { connect } from 'react-redux'
import PrivateRoute from '../components/PrivateRoute'

function mapStateToProps(state) {
  return {
    user: state.User,
  }
}

export default connect(mapStateToProps, null)(PrivateRoute)
