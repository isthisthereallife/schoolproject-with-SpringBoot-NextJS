import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'


MinabokningarComponent.propTypes = {
  data: PropTypes.object
}


/**
 * den här ska sidan skriva ut den aktiva användarens bokningar
 */
export default function MinabokningarComponent({ data }) {
  console.log("DATA IN", data.userBookings)

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
        <hr/>
      </div>
      <div>

        {bookings && bookings.map((booking) => (
          <div key={booking.boknings_id}>
            <div key={booking.boknings_id}>hej {booking.kundnamn_fornamn} </div>
            <div key={booking.boknings_id}>Här är dina bokningar: </div>
            <div key={booking.boknings_id}>#{booking.boknings_id}  {booking.date_and_time}</div>
          <hr/>
          </div>
        ))}

         <div>
        </div>
      </div>
    </>
  )
}
async function reloadBookings() {
  let res = await fetch(`http://localhost:8080/booking/get/user/1`)
  let userBookings = await res.json()
  console.log("reload", userBookings)
  return { ...userBookings }
}
