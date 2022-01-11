import React, { useState } from 'react'

import Minabokningarcomponent from '../components/minabokningarcomponent'

function BookingPage(bookingsdata) {
  const [bookings, setBookings] = useState(bookingsdata)
return (
  <>
  <Minabokningarcomponent {...bookings}/>
  </>
)
}
export async function getStaticProps() {
  console.log("Laddar in props automatiskt")
  const response = await fetch('http://localhost:8080/booking/getAll')
  const data = await response.json()
  return {
    props: { data }
  }
}

export default BookingPage
