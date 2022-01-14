import React from 'react'
import Link from 'next/link'
import { Button, Grid } from '@material-ui/core';
import styles from '../styles/Navbar.module.css'
import useActiveUser from '../lib/hooks/useActiveUser'
import { USER_ACTIONS } from '../lib/reducers/activeUserReducer'

function Navbarcomponent() {
  const activeUser = useActiveUser()


  console.log("activeUser i navbarcomponent: ", activeUser.activeUser)
  return (
    <>
      <Grid container className={styles.navbar}>
        <Grid item xs={2}>
          <Link item href="/">
          <p className="navbar-brand">Hem{activeUser.activeUser.firstname}</p>
          </Link>
        </Grid>

        <Grid item xs={2}>
          <Link href="/minabokningar">
          <p className="nav-link">Mina sidor</p>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link href="/boka">
            <p className="nav-link">Boka</p>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => logout(activeUser)} variant="contained">Logga ut</Button>
        </Grid>
      </Grid>
    </>
  )
}
export function logout(activeUser) {
  console.log("loggar ut ", activeUser)

    activeUser.activeUserDispatch({
    payload: {
      userId: null,
      firstName: null,
      lastName: null,
      bookings: [{}]
    },
    type: USER_ACTIONS.LOGOUT
    })
    console.log("loggat ut...? ", activeUser)
}
export default Navbarcomponent
