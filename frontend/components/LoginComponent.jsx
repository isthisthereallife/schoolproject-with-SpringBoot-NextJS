import React, { useState } from 'react'
import { USER_ACTIONS } from '../lib/reducers/activeUserReducer'
import Link from 'next/link'
import { Button } from '@material-ui/core'
import { FaArrowRight } from 'react-icons/fa'
import styles from '../styles/logincomponent.module.css'
import { loadUser } from '../components/context/activeUserProvider'
import useActiveUser from '../lib/hooks/useActiveUser'

const TO_BE_IMPLEMENTED_USER_ID = 1

export default function LoginComponent() {
  const activeUser = useActiveUser()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const handleChange = ((event) => {
    if (event.target.name === "username") {
        setUsername(event.target.value)
    } else {
         setPassword(event.target.value)
        }


  })
  const handleSubmit = ((event) => {
    event.preventDefault()
    console.log("username:", username, "  password:", password)
  })


 function loginBtnEvent() {
  loadUser(activeUser, TO_BE_IMPLEMENTED_USER_ID)
}

    return (<>
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
              <Link href="/minasidor"><Button className={styles.button} onClick={(() => loginBtnEvent())} variant="contained" startIcon={<FaArrowRight/>}>Logga in</Button></Link>
</>
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
