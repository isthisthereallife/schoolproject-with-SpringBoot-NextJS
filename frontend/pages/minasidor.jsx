import React, { useState, useEffect } from 'react'
import { Button, Grid, ListItem } from '@material-ui/core'
import { FaRegCalendarPlus, FaCalendarDay, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import styles from '../styles/minasidor.module.css'
import Minabokningarcomponent from '../components/minabokningarcomponent'
import useActiveUser from '../lib/hooks/useActiveUser'
import { FaCartPlus } from 'react-icons/fa'


function MyPages(userBookings) {
  const [bookings, setBookings] = useState(userBookings)
  const [loaded, setLoaded] = useState(false)
  const activeUser = useActiveUser()


    useEffect(() => {
      if (activeUser.activeUser && activeUser.activeUser.customer_id) {
      if (!loaded) getUserBookings(activeUser).then((eachBooking) => setBookings(eachBooking))
      setLoaded(true)
      }
    }, [loaded, activeUser])

    if (!activeUser.activeUser) {
      return (<>
      <div className={styles.main}>
        <h1>Utloggad</h1>
        </div>
        </>
        )
    }

  return <>
    <div className={styles.main}>
    <Grid container className={styles.navbar}>
        <Grid item xs={12}>
      <h3>{activeUser.activeUser && activeUser.activeUser.username}</h3>
      </Grid>
      <Grid container className={styles.user_info_grid}>
        <ListItem className={styles.user_info_item}><Grid item xs={3}>Namn:</Grid><Grid item xs={6}> {activeUser.activeUser.first_name} {activeUser.activeUser.lastName}</Grid></ListItem>
        <ListItem className={styles.user_info_item}><Grid item xs={3}>Adress:</Grid><Grid item xs={6}> {activeUser.activeUser.address}</Grid></ListItem>
        <ListItem className={styles.user_info_item}><Grid item xs={3}>Telefon:</Grid><Grid item xs={6}> {activeUser.activeUser.phone}</Grid></ListItem>
        <ListItem className={styles.user_info_item}><Grid item xs={3}>Email:</Grid><Grid item xs={6} >{activeUser.activeUser.e_mail}</Grid></ListItem>
        <ListItem className={styles.user_info_item}><Grid item xs={3}>Password:</Grid><Grid item xs={6} >**********</Grid></ListItem>
      </Grid>

      </Grid>
      {/* <h2><MinaSidor /></h2> */}

      <h2>Mina bokningar</h2>
      <Minabokningarcomponent data={bookings} />

      <Button variant="contained" startIcon={<FaCartPlus/>}><Link href="/boka">Boka fler städningar: Bokning</Link></Button>
    </div>
  </>
}

// eslint-disable-next-line require-await
async function getUserBookings(activeUser) {
  return reloadProps(activeUser.activeUser.customer_id)
}
async function reloadProps(id) {

  const res = await fetch(`http://localhost:8080/booking/get/user/${id}`)
  const data = await res.json()
  return { data }
}

/*
 * export async function getStaticProps() {
 *   const response = await fetch(`http://localhost:8080/booking/get/user/1`)
 *   console.log("THIS IS THE RESPONSE", response)
 *   const userBookings = await response.json()
 *   return { props: { userBookings } }
 * }
 */

export default MyPages
