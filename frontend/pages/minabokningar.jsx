import React from 'react'

import Minabokningarcomponent from '../components/minabokningarcomponent'

function BookingPage(bookingsdata) {
return (
  <>
  <Minabokningarcomponent {...bookingsdata}/>
  </>
)
}
export async function getStaticProps() {
  console.log("Laddar in props automatiskt")
  const response = await fetch(`http://localhost:8080/mybookings/1`)
  const data = await response.json()
  console.log("returnerar detta från getStaticProps: ", { props: { data } })
  return { props: { data } }
}

export default BookingPage
