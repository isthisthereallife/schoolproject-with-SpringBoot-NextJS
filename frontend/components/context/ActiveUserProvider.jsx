/* eslint-disable camelcase */
import React, { createContext, useReducer } from 'react'
import { userReducer, USER_ACTIONS } from '../../lib/reducers/activeUserReducer'

import PropTypes from 'prop-types'


// provider provides a context for the user
export const ActiveUserContext = createContext()


const ActiveUserProvider = ({ children }) => {
  const [activeUser, activeUserDispatch] = useReducer(userReducer, {
    userId: null,
    username: "",
    firstName: "",
    lastName: "",
    e_mail: "",
    address: "",
    phone: "",
    bookings: [{}]
  })

  return (
    <ActiveUserContext.Provider value={{ activeUser,
      activeUserDispatch }
    }>
      {children}
    </ActiveUserContext.Provider >
  )
}

export async function loadUser(activeUser, userId) {
  if (userId) {
    let id = 1
    id = userId
  let res = await fetch(`http://localhost:8080/customer/get/id/${id}`)
  let userInfo = await res.json()

  activeUser.activeUserDispatch({
    payload: userInfo,
    type: USER_ACTIONS.LOGIN
  })

  return userInfo
  }
   return {}
}
ActiveUserProvider.propTypes = {
  children: PropTypes.array
}
export default ActiveUserProvider
