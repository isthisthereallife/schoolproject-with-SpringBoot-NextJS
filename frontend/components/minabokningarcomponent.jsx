import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


MinabokningarComponent.propTypes = {
  data: PropTypes.object
}

export default function MinabokningarComponent({ data }) {
  console.log("DATA IN", data.userBookings)

const [bookings, setBookings] = useState(data.userBookings)


  useEffect(() => {
    console.log("useEffect bookings:", bookings)
  }, [])


  async function bookingFunction() {
    let temp = await reloadBookings()
    setBookings([temp])
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
        <button onClick={bookingFunction}>ladda om mina bokningar</button>
        </div>
      </div>
    </>
  )
}
async function reloadBookings() {
  let res = await fetch(`http://localhost:8080/mybookings/1`)
  let data = await res.json()
  return { ...data }
}
