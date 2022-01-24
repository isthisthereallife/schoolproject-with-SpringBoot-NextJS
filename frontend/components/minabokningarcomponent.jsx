/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useActiveUser from '../lib/hooks/useActiveUser'
import { Grid, ListItem, FormControl, InputLabel, NativeSelect } from '@material-ui/core'
import styles from '../styles/minabokningarcomponent.module.css'
import { format } from 'date-fns'


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
  const [statusSelection, setStatusSelection] = useState("Alla")
  const [selectedCards, setSelectedCards] = useState([{}])
  const [sorted, setSorted] = useState(false)


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
    let cards = []
      selectedCards.forEach((card) => {
      console.log("itemid", item.booking_id)
      if (item.booking_id === card.booking_id) {
        console.log("card already clicked")
      } else {
        cards.push(item)
        console.log("PUSHED")
      }
      console.log("vaaad", cards)
    })
    if (cards.length < 1) {
      cards.push(item)
    }
    setSelectedCards(cards)
    console.log("sele", selectedCards)
    console.log("detta är activueUser", activeUser)
  }

  let empty = true
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
        {bookings && bookings.map((booking) => {
          if (statusSelection === "Alla" || booking.status === statusSelection) {
            empty = false
            return (
              <Grid onClick={(() => cardClickEvent(booking))} id={styles.bookingcardId} className={styles.bookingcard} key={booking.booking_id} item container xs={6} md={4} lg={2} spacing={1}>
                <ListItem className={styles.listitem}><Grid>📆</Grid><Grid>{datesplitter(booking.datetime)}</Grid><Grid>🕙</Grid><Grid>{timesplitter(booking.datetime)}</Grid></ListItem>
                <ListItem className={styles.listitem}><Grid>Städtyp:</Grid> <Grid> {booking.type_of_service}</Grid></ListItem>
                <ListItem className={styles.listitem}><Grid> Status:</Grid><Grid> {booking.status}</Grid></ListItem>
                <ListItem className={styles.listitem} key={booking.booking_id}>BokningsID: #{booking.booking_id}</ListItem>
              </Grid>)
            }
        })}
      </Grid>

      {empty
        ? (
      <div>
        <h3>Inga bokningar hittades</h3>
        </div>)
        : (<></>)}

    </>
  )
}
async function getUserBookings(activeUser) {
  const bookings = await reloadBookings(activeUser.activeUser.customer_id)
  return bookings

}

export function timesplitter(datetime) {
    let t = new Date(datetime)
    return `${t.getHours().toString().length > 1 ? t.getHours() : ("0".concat(t.getHours()))}:${t.getUTCMinutes().toString().length > 1 ? t.getMinutes() : ("0".concat(t.getMinutes()))}`

  }
async function reloadBookings(customer_id) {
  if (customer_id) {
  let res = await fetch(`http://localhost:8080/booking/get/user/${customer_id}`)
  let userBookings = await res.json()
  return userBookings
  }
   return {}

}
