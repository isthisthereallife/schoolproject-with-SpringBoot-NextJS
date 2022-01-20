import React from 'react'

import Minabokningarcomponent from '../components/minabokningarcomponent'
import useActiveUser from '../lib/hooks/useActiveUser'
let id = 0;


function BookingPage(userBookings) {
  const activeUser = useActiveUser()
  id = activeUser.activeUser.customer_id
  console.log("activeUser..userId i minabokningar", id)
return (
  <>
  <Minabokningarcomponent data={userBookings}/>
  </>
)
}
export async function getStaticProps() {
  const activeUser = useActiveUser()
  const response = await fetch(`http://localhost:8080/booking/get/user/${activeUser.activeUser.userId}`)
  const userBookings = await response.json()
  console.log("returnerar detta från getStaticProps: ", userBookings)
  return { props: { userBookings } }
}

export default BookingPage
