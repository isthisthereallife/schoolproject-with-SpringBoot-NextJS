import { React, createContext, useReducer } from 'react'
import { activeUserReducer } from '../../lib/reducers/activeUserReducer'
import PropTypes from 'prop-types'


// provider provides a context for the user
export const ActiveUserContext = React.createContext({
  userId: 666,
  firstName: "activeUserContext initierades med detta",
  lastName: "aUp lastname here",
  bookings: [{}]
})


const ActiveUserProvider = ({ children }) => {
  const [activeUser, activeUserDispatch] = useReducer(activeUserReducer, {
    userId: 666,
    firstName: "activeUserProvider sent this",
    lastName: "ändrat lastname",
    bookings: [{}]
  })

  console.log(ActiveUserContext)
  return (
    <ActiveUserContext.Provider value={{
      activeUser,
      activeUserDispatch
    }}>
      {children}
    </ActiveUserContext.Provider >
  )
}

ActiveUserProvider.propTypes = {
  children: PropTypes.array
}
export default ActiveUserProvider
