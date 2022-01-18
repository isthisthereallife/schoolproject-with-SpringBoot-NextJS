import React from 'react'

export default function bokning(bokningsinfo) {
console.log("bokningsinfo: ", bokningsinfo)
  return (
    <>
      <div>
        <h2>Städning {bokningsinfo.bokning.booking_id}</h2>
        <h3>Adress: {bokningsinfo.bokning.address}</h3>
        <h3>Status: {bokningsinfo.bokning.status}</h3>


      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:8080/booking/get/user/1`)
  const data = await res.json()
  //console.log("data i getStaticPATHS", data)

  const paths = data.map((bookingdata) => ({
    params: { bokning: `${bookingdata.booking_id.toString()}` }
  }))
  return {
    fallback: true,
    paths
  }
}

export async function getStaticProps({ params }) {
  console.log("params: ", params)
  const res = await fetch(`http://localhost:8080/booking/get/id/${params.bokning}`)
  const data = await res.json()
  console.log("data i getStaticProps", data)
  return { props: { bokning: data } }
}
