import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useActiveUser from '../lib/hooks/useActiveUser'
<<<<<<< HEAD
import { Grid, ListItem, Link } from '@material-ui/core'
import { USER_ACTIONS } from '../lib/reducers/activeUserReducer'
=======
import { Grid, ListItem, Button, FormControl, InputLabel, NativeSelect } from '@material-ui/core'
>>>>>>> 57e722af8858df1adfa574bdfe753e1e1ad3bc5c
import styles from '../styles/minabokningarcomponent.module.css'
import { format, toDate } from 'date-fns'

MinabokningarComponent.propTypes = {
  data: PropTypes.object
}

export const STATUS = {
  OBEKRAFTAD: 'Obekräftad',
  BEKRAFTAD: 'Bekräftad',
  BOKAD: 'Bokad',
  UNDER_UTFORANDE: 'Under utförande',
  UTFORT: 'Utförd',
  GODKANT: 'Godkänd',
  FAKTURERAD: 'Fakturerad',
  BETALD: 'Betald'
}

/**
 * den här ska sidan skriva ut den aktiva användarens bokningar
 */
export default function MinabokningarComponent({ data }) {
  const activeUser = useActiveUser()
  const [bookings, setBookings] = useState(data.userBookings)
  const datesplitter = ((datetime) => format(new Date(datetime), 'PPPP'))
<<<<<<< HEAD
  const timespliteter = ((datetime) => format(new Date(datetime), 'XXx'))
  function timesplitter(datetime) {
    let t = new Date(datetime)
    return `${t.getHours()}:${t.getUTCMinutes().toString().length > 1 ? t.getMinutes() : ("0".concat(t.getMinutes()))}`
=======
  const [statusSelection, setStatusSelection] = useState("Alla")
>>>>>>> 57e722af8858df1adfa574bdfe753e1e1ad3bc5c

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

  function cardClickEvent(item) {
    console.log("hejj")
    console.log(item)
  }


  return (
    <>
      <div>
      <FormControl >
  <InputLabel className={styles.valInputLabel} variant="standard" htmlFor="uncontrolled-native">
    Filtrera
  </InputLabel>
  <NativeSelect
    selected={statusSelection}
    onChange={(value) => setStatusSelection(value.target.value)}

    inputProps={{
      name: 'StatusSelection',
      id: 'uncontrolled-native'
    }}
  >
    <option value="Alla">Alla</option>
    <option value={STATUS.OBEKRAFTAD}>Obekräftade</option>
    <option value={STATUS.BEKRAFTAD}>Bekräftade</option>
    <option value={STATUS.UTFORT}>Utförda</option>
    <option value={STATUS.GODKANT}>Godkända</option>
  </NativeSelect>
</FormControl>
        </div>

        <Grid className={styles.gridcontainer} container spacing={2}>
<<<<<<< HEAD
        {bookings && bookings.map((booking) => (
            <Link key={ booking.booking_id} href={`/bokning/${booking.booking_id.toString()}`}>
              <Grid className={styles.bookingcard} key={booking.booking_id} item container xs={6} md={4} lg={2} spacing={1}>
=======

          {bookings && bookings.map((booking) => {
>>>>>>> 57e722af8858df1adfa574bdfe753e1e1ad3bc5c

              if (statusSelection === "Alla" || booking.status === statusSelection) {
              return (<Grid onClick={(() => cardClickEvent(booking))} id={styles.bookingcardId} className={styles.bookingcard} key={booking.booking_id} item container xs={6} md={4} lg={2} spacing={1}>

<<<<<<< HEAD
        ))}
=======
                  <ListItem className={styles.listitem}><Grid>📆</Grid><Grid>{datesplitter(booking.datetime)}</Grid><Grid>🕙</Grid><Grid>{timesplitter(booking.datetime)}</Grid></ListItem>
                  <ListItem className={styles.listitem}><Grid>Städtyp:</Grid> <Grid> {booking.type_of_service}</Grid></ListItem>
                  <ListItem className={styles.listitem}><Grid> Status:</Grid><Grid> {booking.status}</Grid></ListItem>
                  <ListItem className={styles.listitem} key={booking.booking_id}>BokningsID: #{booking.booking_id}</ListItem>
              </Grid>)
               }
              }
            )}
>>>>>>> 57e722af8858df1adfa574bdfe753e1e1ad3bc5c
        </Grid>

    </>
  )
}
async function getUserBookings(activeUser) {
  const bookings = await reloadBookings(activeUser.activeUser.userId)
  return bookings
}

<<<<<<< HEAD
=======
export function timesplitter(datetime) {
    let t = new Date(datetime)
    return `${t.getHours().toString().length > 1 ? t.getHours() : ("0".concat(t.getHours()))}:${t.getUTCMinutes().toString().length > 1 ? t.getMinutes() : ("0".concat(t.getMinutes()))}`

  }
>>>>>>> 57e722af8858df1adfa574bdfe753e1e1ad3bc5c
async function reloadBookings(userId) {
  if (userId) {
  let res = await fetch(`http://localhost:8080/booking/get/user/${userId}`)
  let userBookings = await res.json()
  return userBookings
  }
   return {}

}
