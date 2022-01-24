import React, { useEffect } from 'react'

import Minabokningarcomponent from '../components/minabokningarcomponent'
import useActiveUser from '../lib/hooks/useActiveUser'


function BookingPage(userBookings) {
  useEffect(() => {
console.log("uppe")
  }, [])
return (
  <>
  <Minabokningarcomponent data={userBookings}/>
  </>
)
}
export async function getStaticProps() {
  console.log("nere")
  const activeUser = useActiveUser()
  const response = await fetch(`http://localhost:8080/booking/get/user/${activeUser.activeUser.userId}`)
  const userBookings = await response.json()
  return { props: { userBookings } }
}

export default BookingPage
