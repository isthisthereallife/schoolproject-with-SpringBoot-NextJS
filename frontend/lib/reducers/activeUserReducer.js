export const USER_ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout'
}

export function userReducer(state, action) {

  switch (action.type) {
    case 'login': {
      return {
        ...state,
        activeUser: action.payload
      }
    }
    case 'logout': {
      return {
        ...state,
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
