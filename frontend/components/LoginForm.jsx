import React, { useState } from 'react'
import { USER_ACTIONS } from '../lib/reducers/activeUserReducer'

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const handleChange = ((event) => {
    if (event.target.name === "username") {
        setUsername(event.target.value)
    } else {
         setPassword(event.target.value)
        }
        console.log(username)
        console.log(password)


  })
  const handleSubmit = ((event) => {
    event.preventDefault()
    console.log("username:", username, "  password:", password)


  })

    return (
      <form>
        <div>
          <input type="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
          defaultValue="kundanders63"
          />
        </div>
        <div>
          <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          defaultValue="**********"
          />
        </div>
      </form>

    )
  }


export function login(activeUser) {
  activeUser.activeUserDispatch({
  payload: {
    userId: "1",
    firstName: "nyttnamn",
    lastName: "kollaaa",
    bookings: [{}]
  },
  type: USER_ACTIONS.LOGIN
  })
  console.log("loggat in ", activeUser)
}
