import * as UserActionTypes from '../actiontypes/auth'

export default (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_REJECTED:
      return action.error
    default:
      return state
  }
}
