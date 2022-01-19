import React from 'react'

import Minabokningarcomponent from '../components/minabokningarcomponent'
import useActiveUser from '../lib/hooks/useActiveUser'
let id = 0;
const activeUser = useActiveUser()

function BookingPage(userBookings) {
  id = activeUser.userId
  console.log("id", id)
return (
  <>
  <Minabokningarcomponent data={userBookings}/>
  </>
)
}
export async function getStaticProps() {
  const response = await fetch(`http://localhost:8080/booking/get/user/${activeUser.userId}`)
  const userBookings = await response.json()
  console.log("returnerar detta från getStaticProps: ", userBookings)
  return { props: { userBookings } }
}

export default BookingPage
