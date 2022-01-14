import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import useActiveUser from '../lib/hooks/useActiveUser'
import { USER_ACTIONS } from '../lib/reducers/activeUserReducer'


MinabokningarComponent.propTypes = {
  data: PropTypes.object
}


/**
 * den här ska sidan skriva ut den aktiva användarens bokningar
 */
export default function MinabokningarComponent({ data }) {
  console.log("DATA IN", data.userBookings)

  const activeUser = useActiveUser()
  const [bookings, setBookings] = useState(data.userBookings)


  useEffect(() => {
    console.log("useEffect bookings:", bookings)
  }, [])


  async function bookingFunction() {
    let temp = await reloadBookings()
    console.log("[temp]", [temp])
    setBookings([temp])
    console.log("reloaded", [temp])
  }

  return (
    <>
      <div>
        <div >{activeUser.firstName} </div>
          <div >Här är dina bokningar: </div>
        </div>
        {bookings && bookings.map((booking) => (
          <div key={booking.booking_id}>
            <div key={booking.booking_id}>| #{booking.booking_id}  📆{booking.datetime}🕙 <br/> | Städtyp: {booking.type_of_service} | Status: {booking.status} </div>
          <hr/>
          </div>
        ))}
    </>
  )
}
async function reloadBookings() {
  let res = await fetch(`http://localhost:8080/booking/get/user/1`)
  let userBookings = await res.json()
  console.log("reload", userBookings)
  return { ...userBookings }
}
