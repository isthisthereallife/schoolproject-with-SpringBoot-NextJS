import { React, createContext, useReducer } from 'react'
import { userReducer } from '../../lib/reducers/activeUserReducer'
import PropTypes from 'prop-types'


// provider provides a context for the user
export const ActiveUserContext = createContext()


const ActiveUserProvider = ({ children }) => {
  const [activeUser, activeUserDispatch] = useReducer(userReducer, {
    userId: 666,
    firstName: "activeUserProvider sent this",
    lastName: "ändrat lastname",
    bookings: [{}]
  })

  console.log("ActiveUserContext i activeUserProvider: ", ActiveUserContext)
  return (
    <ActiveUserContext.Provider value={{ activeUser,
      activeUserDispatch }
    }>
      {children}
    </ActiveUserContext.Provider >
  )
}

ActiveUserProvider.propTypes = {
  children: PropTypes.array
}
export default ActiveUserProvider
