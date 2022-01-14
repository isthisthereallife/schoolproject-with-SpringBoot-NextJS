export const USER_ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout'
}

export function userReducer(state, action) {

  switch (action.type) {
    case USER_ACTIONS.LOGIN: {
      return {
        activeUser: action.payload
      }
    }
    case USER_ACTIONS.LOGOUT: {
      return {
        activeUser: null
      }
    }
    default:
      return {
        ...state,
        activeUser: null
      }
  }
}
export default userReducer
