import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
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
      console.log("minasidor useEffect activeUser.activeUser", activeUser.activeUser)
      if (!loaded) getUserBookings(activeUser).then((eachBooking) => setBookings(eachBooking))
      setLoaded(true)
    }, [loaded, activeUser])

  return <>
    <div className={styles.main}>
      <h1>Du är inloggad som {activeUser.activeUser.firstName} {activeUser.activeUser.lastName}</h1>
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
  console.log("returnerar detta från getStaticProps: ", userBookings)
  return { props: { userBookings } }
}

export default MyPages
