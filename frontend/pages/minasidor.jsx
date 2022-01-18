import React, { useState, useEffect } from 'react'
import { Button, Grid } from '@material-ui/core'
import { FaRegCalendarPlus, FaCalendarDay, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import Minabokningarcomponent from '../components/minabokningarcomponent'
import MinaSidorComponent from '../components/minasidorcomponent'
import useActiveUser from '../lib/hooks/useActiveUser'


function MyPages(userBookings) {
  const [bookings, setBookings] = useState(userBookings)
  const [loaded, setLoaded] = useState(false)
  const activeUser = useActiveUser()


    useEffect(() => {
      if (activeUser.activeUser) {
      if (!loaded) getUserBookings(activeUser).then((eachBooking) => setBookings(eachBooking))
      setLoaded(true)
      }
    }, [loaded, activeUser])

    if (!activeUser.activeUser) {
      return (<>
      <div>
        <h1>Utloggad</h1>
        </div>
        </>
        )
    }

  return <>
    <div className={styles.main}>
    <Grid container className={styles.navbar}>
        <Grid item xs={12}>
      <h5>Du är inloggad som {activeUser.activeUser.firstName} {activeUser.activeUser.lastName}</h5>
      </Grid>
      <Grid container direction="row"
  justifyContent="space-between"
  alignItems="flex-start" >
        <Grid><Grid item xs={6}>Adress:</Grid><Grid item xs={6}> blablablabl 33{activeUser.activeUser.address}</Grid></Grid>
        <Grid><Grid item xs={6}>Telefon:</Grid><Grid item xs={6}> 08494988844{activeUser.activeUser.phone}</Grid></Grid>
        <Grid><Grid item xs={6}>Email:</Grid><Grid item xs={6} >thrcoochu@ch;unh.coher{activeUser.activeUser.email}</Grid></Grid>
        <Grid><Grid item xs={6}>Password:</Grid><Grid item xs={6} >******</Grid></Grid>
      </Grid>

      </Grid>
      {/* <h2><MinaSidor /></h2> */}

      <button onClick={MinaSidorComponent.updateUser}>Ändra</button>

      <h2>Mina bokningar</h2>
      <Minabokningarcomponent data={bookings} />

      <div>Boka fler städningar: <Link href="/booking">Bokning</Link></div>
    </div>
  </>
}

// eslint-disable-next-line require-await
async function getUserBookings(activeUser) {
  return reloadProps(activeUser.activeUser.userId)
}
async function reloadProps(id) {

  const res = await fetch(`http://localhost:8080/booking/get/user/${id}`)
  const data = await res.json()
  return { data }
}

export async function getStaticProps() {
  const response = await fetch(`http://localhost:8080/booking/get/user/1`)
  const userBookings = await response.json()
  return { props: { userBookings } }
}

export default MyPages
