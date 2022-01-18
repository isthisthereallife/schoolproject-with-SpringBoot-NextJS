import React from 'react'
import Link from 'next/link'
import { Button, Grid } from '@material-ui/core';
import styles from '../styles/Navbar.module.css'
import useActiveUser from '../lib/hooks/useActiveUser'
import { USER_ACTIONS } from '../lib/reducers/activeUserReducer'

function Navbarcomponent() {
  const activeUser = useActiveUser()


 return (
    <>
      <Grid container className={styles.navbar}>
        <Grid item xs={2}>
          <Link item href="/">
          <p className="navbar-brand">Start{activeUser.activeUser.firstname}</p>
          </Link>
        </Grid>

        <Grid item xs={2}>
          <Link href="/minasidor">
          <p className="nav-link">Mina sidor</p>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link href="/boka">
            <p className="nav-link">Gör en bokning</p>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => debugChangeUser(activeUser)} variant="contained">Växla användare</Button>
        </Grid>
      </Grid>
    </>
  )
}
export function logout(activeUser) {
  activeUser.activeUserDispatch({
    payload: null,
    type: USER_ACTIONS.LOGOUT
  })
}
export function debugChangeUser(activeUser) {
  console.log("changeuser activeUser: ", activeUser)
  console.log("byter ", activeUser.activeUser.userId)
    if (activeUser.activeUser.userId === 1) {
    activeUser.activeUserDispatch({
    payload: {
      userId: 2,
      firstName: "Tvåan",
      lastName: "Twosie",
      bookings: [{}]
    },
    type: USER_ACTIONS.LOGIN
    })
  } else if (activeUser.activeUser.userId === 2) {
    activeUser.activeUserDispatch({
      payload: {
        userId: 1,
        firstName: "EttanIgen",
        lastName: "LOLOLO",
        bookings: [{}]
      },
      type: USER_ACTIONS.LOGIN
      })
    }
    console.log("bytt? ", activeUser.activeUser.userId)
}
export default Navbarcomponent
