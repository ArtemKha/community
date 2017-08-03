import * as UserActionTypes from '../actiontypes/auth'

export default (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_REJECTED:
      return action.error
    case UserActionTypes.USER_REQUESTED:
      return { signing: true }
    case UserActionTypes.SIGNED_IN:
      return {}
    case UserActionTypes.SIGNED_OUT:
      return {}
    default:
      return state
  }
}
