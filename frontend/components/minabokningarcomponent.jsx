import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'


MinabokningarComponent.propTypes = {
  data: PropTypes.array
}

export default function MinabokningarComponent({ data }) {
  console.log("DATA", data)
const [[bookings], setBookings] = useState(data)
console.log("nyyyy bookings", bookings)


  useEffect(() => {
    console.log("data i useEffecten")
    console.log(data)
    console.log("bookings i useEffecten")
    console.log(bookings)
  }, [])


  async function bookingFunction() {
    console.log("bookingFunction on click")
    let temp = await reloadBookings()
    console.log("sparar ner detta temp: ", temp)
    console.log("temp.data", temp.data)
    console.log("temp[0]", temp[0])
    setBookings(temp)
    console.log("bookings: ", bookings)
  }
  return (
    <>
      <div>
        <hr/>
      </div>
      <div>
        {bookings && bookings.map((booking) => (
          <div key={booking.bookingID}>HEJ</div>

          /*
           * <div key={booking.bookingID}>
           *   <Link href={`/minabokningar/${booking.bookingID}`}>
           *     <div key={booking.bookingID}>bokning{booking.bookingID}
           */


          /*
           *     </div>
           *   </Link>
           * </div>
           */
        ))}
      </div>
        <div>
        Mina bokningar: {bookings}
        <button onClick={bookingFunction}>ladda om mina bokningar</button>
      </div>
    </>
  )
}
async function reloadBookings() {
  let res = await fetch(`http://localhost:8080/mybookings/1`)
  let data = await res.json()
  console.log("reloading bookings", await data)
  return data
}
