import React from 'react'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import { USER_ACTIONS } from '../lib/reducers/activeUserReducer'
import { Button } from '@material-ui/core'
import { FaRegCalendarPlus, FaCalendarDay, FaArrowRight } from 'react-icons/fa'
function HomePage() {


  return <>
  <div className={styles.main}>
    <h1>Inloggningssida</h1>

    <Button className={styles.button} variant="contained" startIcon={<FaArrowRight/>}>Logga in</Button>
    <Button className={styles.button} variant="contained" startIcon={<FaCalendarDay/>}><Link href="/minabokningar">MINA BOKNINGAR</Link></Button>
    <Button className={styles.button} variant="contained" startIcon={<FaRegCalendarPlus/>}><Link href="/boka">bokning</Link></Button>
    </div>

  </>
}

export function login(activeUser) {
  activeUser.activeUserDispatch({
  payload: {
    userId: "hej",
    firstName: "nyttnamn",
    lastName: "kollaaa",
    bookings: [{}]
  },
  type: USER_ACTIONS.LOGIN
  })
  console.log("loggat in ", activeUser.activeUser.firstname)
}
export default HomePage
