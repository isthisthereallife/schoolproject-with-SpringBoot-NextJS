import React from 'react'

export default function bokning(bokningsinfo) {

  return (
    <>

      {bokningsinfo}

    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:8080/booking/get/user/1`)
  const data = await res.json()

  const paths = data.map((bookingdata) => ({
    params: { booking: `${bookingdata.booking_id.toString()}` }
  }))
  return {
    fallback: true,
    paths
  }
}

