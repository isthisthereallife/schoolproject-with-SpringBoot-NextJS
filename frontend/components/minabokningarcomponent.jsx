import React, { useEffect, useState } from 'react'

export default function MinabokningarComponent(minaBokningar) {
const [bookings, setBookings] = useState()
const [num, setNum] = useState(0)
let testNum = 0

  useEffect(() => {
    console.log(minaBokningar)
    console.log("used effect")
    testNum += 1
  }, [bookings, testNum])


  function bookingFunction() {
    testNum += 1
    setNum(num + 1)
    console.log("bookingFunction on click")
    reloadBookings()
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
        Mina bokningar: {bookings}
        <button onClick={bookingFunction}>ladda om mina bokningar</button>
      </div>
    </>
  )
}
async function reloadBookings() {
  let res = await fetch('http://localhost:8080/booking/getAll')
  let data = res.json()
  console.log(await data)
  return data
}
