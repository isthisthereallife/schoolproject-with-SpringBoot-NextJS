import { React, createContext, useReducer } from 'react'
import { userReducer } from '../../lib/reducers/activeUserReducer'
import { USER_ACTIONS } from '../lib/reducers/activeUserReducer'

import PropTypes from 'prop-types'


// provider provides a context for the user
export const ActiveUserContext = createContext()


const ActiveUserProvider = ({ children }) => {
  const [activeUser, activeUserDispatch] = useReducer(userReducer, {
    userId: null,
    firstName: "",
    lastName: "",
    address: "",
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
export function getUsers() {


  let user
  return {
    userId: user.userId,
    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address,
    bookings
}
}
export async function loadUser(activeUser, userId) {
  console.log("userId", userId)
  if (userId) {
    console.log("userId", userId)
    let id = "1"
    id = userId
  let res = await fetch(`http://localhost:8080/customer/get/id/${id}`)
  let userInfo = await res.json()
  console.log("userInfo i loadUser:", userInfo)

  activeUser.activeUserDispatch({
    payload: {
      userId: userInfo.customer_id,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      address: userInfo.address,
      bookings: [{}]
    },
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
