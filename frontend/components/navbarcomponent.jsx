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
          <p className="navbar-brand">Start</p>
          </Link>
        </Grid>
        {activeUser.activeUser
        ? <>
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
        </> : ""}
        <Grid item xs={2}>
          {(activeUser.activeUser
          ? <Button onClick={() => logout(activeUser)} variant="contained">Logga ut</Button>
            : "")}

          <Button onClick={() => debugChangeUser(activeUser)} variant="contained">
            {(activeUser.activeUser ? "Växla användare" : "Logga in")}</Button>
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

/*
 * det här kan vi använda som template.
 */
export function debugChangeUser(activeUser) {
    if (activeUser.activeUser && activeUser.activeUser.userId === 1) {
    activeUser.activeUserDispatch({
    payload: {
      userId: 2,
      firstName: "Tvåan",
      lastName: "Twosie",
      bookings: [{}]
    },
    type: USER_ACTIONS.LOGIN
    })
  } else if (activeUser.activeUser && activeUser.activeUser.userId === 2) {
    activeUser.activeUserDispatch({
      payload: {
        userId: 3,
        firstName: "Trean",
        lastName: "Oboken",
        bookings: [{}]
      },
      type: USER_ACTIONS.LOGIN
      })
    } else {
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
}
export default Navbarcomponent
