import { React, createContext, useReducer } from 'react'
import { userReducer } from '../../lib/reducers/activeUserReducer'
import PropTypes from 'prop-types'

// provider provides a context for the user
export const ActiveUserContext = createContext()

const ActiveUserProvider = ({ children }) => {
  const [activeUser, activeUserDispatch] = useReducer(userReducer, {
    userId: 1,
    firstName: "[sätt i activeUserProvider]",
    lastName: "lastname",
    address: "here 123",
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
export async function loadUser(userId) {
  if (userId) {
  let res = await fetch(`http://localhost:8080/customer/get/id/${userId}`)
  let userInfo = await res.json()
  console.log("userInfo i loadUser:", userInfo)
  return userInfo
  }
   return {}

}
ActiveUserProvider.propTypes = {
  children: PropTypes.array
}
export default ActiveUserProvider
