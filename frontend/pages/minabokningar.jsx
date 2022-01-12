import React from 'react'

import Minabokningarcomponent from '../components/minabokningarcomponent'

function BookingPage(userBookings) {
return (
  <>
  <Minabokningarcomponent data={userBookings}/>
  </>
)
}
export async function getStaticProps() {
  const response = await fetch(`http://localhost:8080/mybookings/1`)
  const userBookings = await response.json()
  console.log("returnerar detta från getStaticProps: ", userBookings)
  return { props: { userBookings } }
}

export default BookingPage
