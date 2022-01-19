import React from 'react'
import Link from 'next/link'
import { Button, Grid } from '@material-ui/core';
import styles from '../styles/Navbar.module.css'
import useActiveUser from '../lib/hooks/useActiveUser'
import { USER_ACTIONS } from '../lib/reducers/activeUserReducer'
import { FaUsers } from 'react-icons/fa'

function Navbarcomponent() {
  const activeUser = useActiveUser()
  const debug = false;

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
        </> : <Grid item xs={4}></Grid>}
        <Grid className={styles.loginLogoutBtn} item xs={4}>
          {(activeUser.activeUser
          ? <Button onClick={() => logout(activeUser)} variant="contained">Logga ut</Button>
            : "")}
          </Grid>
           {(debug
           ? <Grid className={styles.navbarBtn}item xs={2}>
          <Button onClick={() => debugChangeUser(activeUser)} variant="contained">
            {(activeUser.activeUser ? <div className={styles.toggleBtn}><p><FaUsers/></p>  <p>toggle user</p></div> : "Logga in")}</Button>
        </Grid>
        : "")}
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
      address: "here 123",
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
        address: "here 123",
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
          address: "here 123",
          bookings: [{}]
        },
        type: USER_ACTIONS.LOGIN
        })
      }
}
export default Navbarcomponent
