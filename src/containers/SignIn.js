import { connect } from 'react-redux'
import { signIn } from '../actions/auth'
import SignIn from '../components/SignIn'

function mapStateToProps(state) {
  return {
    user: state.User,
    error: state.AuthErrors,
  }
}

export default connect(mapStateToProps, { signIn })(SignIn)
