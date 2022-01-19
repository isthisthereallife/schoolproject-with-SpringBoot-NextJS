import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useActiveUser from '../lib/hooks/useActiveUser'
import { Grid, ListItem } from '@material-ui/core'
import { USER_ACTIONS } from '../lib/reducers/activeUserReducer'
import styles from '../styles/minabokningarcomponent.module.css'
import { format, toDate } from 'date-fns'

MinabokningarComponent.propTypes = {
  data: PropTypes.object
}

/**
 * den här ska sidan skriva ut den aktiva användarens bokningar
 */
export default function MinabokningarComponent({ data }) {
  const activeUser = useActiveUser()
  const [bookings, setBookings] = useState(data.userBookings)
  const datesplitter = ((datetime) => format(new Date(datetime), 'PPPP'))
  const timespliteter = ((datetime) => format(new Date(datetime), 'XXx'))
  function timesplitter(datetime) {
    let t = new Date(datetime)
    return `${t.getHours()}:${t.getUTCMinutes().toString().length > 1 ? t.getMinutes() : ("0".concat(t.getMinutes()))}`

  }
  useEffect(() => {
    getUserBookings(activeUser).then((booking) => setBookings(booking))
  }, [activeUser])
  if (!bookings || !bookings[0]) {
    return (
      <>
      <div>
        <h3>Inga bokningar gjorda</h3>
        </div>
        </>
    )
  }
  return (
    <>
      <div>
        </div>

        <Grid className={styles.gridcontainer} container spacing={2}>
        {bookings && bookings.map((booking) => (
            <Link key={ booking.booking_id} href={`/bokning/${booking.booking_id.toString()}`}>
              <Grid className={styles.bookingcard} key={booking.booking_id} item container xs={6} md={4} lg={2} spacing={1}>

                <ListItem className={styles.listitem}><Grid>📆</Grid><Grid>{datesplitter(booking.datetime)}</Grid><Grid>🕙</Grid><Grid>{timesplitter(booking.datetime)}</Grid></ListItem>
                <ListItem className={styles.listitem}><Grid>Städtyp:</Grid> <Grid> {booking.type_of_service}</Grid></ListItem>
                <ListItem className={styles.listitem}><Grid> Status:</Grid><Grid> {booking.status}</Grid></ListItem>
                <ListItem className={styles.listitem} key={booking.booking_id}>BokningsID: #{booking.booking_id}</ListItem>
            </Grid>
          </Link>

        ))}
        </Grid>

    </>
  )
}
async function getUserBookings(activeUser) {
  const bookings = await reloadBookings(activeUser.activeUser.userId)
  return bookings

}
async function reloadBookings(userId) {
  if (userId) {
  let res = await fetch(`http://localhost:8080/booking/get/user/${userId}`)
  let userBookings = await res.json()
  return userBookings
  }
   return {}

}
