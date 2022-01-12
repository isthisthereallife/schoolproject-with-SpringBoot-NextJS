import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'


MinabokningarComponent.propTypes = {
  minaBokningar: PropTypes.array
}

export default function MinabokningarComponent({ minaBokningar }) {
  const [bookings, setBookings] = useState(minaBokningar)
const [num, setNum] = useState(0)
let testNum = 0

  useEffect(() => {
    console.log("mina bokningar i useEffecten")
    console.log(minaBokningar)
    console.log("bookings i useEffecten")
    console.log(bookings)
    testNum += 1
  }, [bookings])


  async function bookingFunction() {
    testNum += 1
    setNum(num + 1)
    console.log("bookingFunction on click")
    let temp = await reloadBookings()
    console.log("sparar ner detta temp.data: ", temp)
    setBookings(temp.data)
    console.log("testar att skriva ut en bokning: ", temp[0])
  }
  return (
    <>
      <div>
        Hålla koll på re-rendering av skärmen
        <hr/>
        med vanlig variabel: {testNum}
        <hr/>
        men en useState-variabel: {num}
        <hr/>
      </div>
      <div>
         * {bookings && bookings.map((booking) => (
          <Link key={booking.booking_id} href={`/booking/${booking.booking_id.toString()}`}>
            <div key={booking.booking_id}>bokning{booking.booking_id}
            <div>HEJ TEXT</div>
            </div>
            </Link>
        ))}
        Mina bokningar: {bookings}
        <button onClick={bookingFunction}>ladda om mina bokningar</button>
      </div>
    </>
  )
}
async function reloadBookings() {
  let res = await fetch('http://localhost:8080/booking/getAll')
  let data = res.json()
  console.log("reloading bookings", await data)
  return data
}
