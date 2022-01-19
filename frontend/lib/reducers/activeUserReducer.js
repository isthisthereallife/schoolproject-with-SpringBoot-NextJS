export const USER_ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout'
}

export function userReducer(state, action) {
  let newState = state
  switch (action.type) {
    case USER_ACTIONS.LOGIN: {
      newState = action.payload
      break
    }
    case USER_ACTIONS.LOGOUT: {
      newState = null
      break
    }
    default:
      return {
        newState
      }
  }
  return newState
}
export default userReducer
