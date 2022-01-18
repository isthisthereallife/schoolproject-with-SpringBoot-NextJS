import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import useActiveUser from '../lib/hooks/useActiveUser'
import { Grid, ListItem } from '@material-ui/core'
import { USER_ACTIONS } from '../lib/reducers/activeUserReducer'
import styles from '../styles/minabokningarcomponent.module.css'

MinabokningarComponent.propTypes = {
  data: PropTypes.object
}


/**
 * den här ska sidan skriva ut den aktiva användarens bokningar
 */
export default function MinabokningarComponent({ data }) {
  console.log("DATA IN", data.userBookings)


  const [bookings, setBookings] = useState(data.userBookings)

  const activeUser = useActiveUser()
  console.log("activeUser i minabokningarcomponent:", activeUser)
  return (
    <>
      <div>
        <div >{activeUser.activeUser.firstName} </div>
          <div >Här är dina bokningar: </div>
          <hr/>
        </div>

        <Grid className={styles.gridcontainer} container spacing={2}>
        {bookings && bookings.map((booking) => (
          <>
            <Link key={ booking.booking_id} href={`/bokning/${booking.booking_id.toString()}`}>
              <Grid className={styles.bookingcard} key={booking.booking_id} item container xs={6} md={4} lg={2} spacing={1}>

                <ListItem key={booking.booking_id}>BokningsID: #{booking.booking_id}</ListItem>
                <ListItem>📆{booking.datetime}🕙</ListItem>
                <ListItem>Städtyp: {booking.type_of_service}</ListItem>
                <ListItem> Status: {booking.status}</ListItem>
            </Grid>
          </Link>
        </>
        ))}
        </Grid>

    </>
  )
}
async function reloadBookings() {
  let res = await fetch(`http://localhost:8080/booking/get/user/1`)
  let userBookings = await res.json()
  console.log("reload", userBookings)
  return { ...userBookings }
}
