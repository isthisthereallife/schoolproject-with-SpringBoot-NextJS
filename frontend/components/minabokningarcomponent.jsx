import React, { useEffect, useState } from 'react'

export default function MinabokningarComponent(minaBokningar) {
const [bookings, setBookings] = useState("")

  useEffect(() => {
    console.log(minaBokningar)
    console.log("used effect")
  }, [bookings])
  let testVar = "and this is a var"
  let testNum = 0
  return (
    <>
      <div>
        THIS IS A COMPONENT! {testVar}<hr/>
        this many times rendered: {testNum}

        Mina bokningar: {bookings}
      </div>
    </>
  )
}
