import React from 'react'
import { Button } from '@material-ui/core'
import { FaRegCalendarPlus, FaCalendarDay, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import Minabokningarcomponent from '../components/minabokningarcomponent'
import MinaSidorComponent from '../components/minasidorcomponent'
import useActiveUser from '../lib/hooks/useActiveUser'

let id = 0

function MyPages(userBookings) {

  const activeUser = useActiveUser()
  id = activeUser.userId
  console.log(id)

  return <>
    <div className={styles.main}>
      <h1>Du är inloggad som {activeUser.activeUser.firstName} {activeUser.activeUser.lastName}</h1>
      {/* <h2><MinaSidor /></h2> */}

      <button onClick={MinaSidorComponent.updateUser}>Ändra</button>

      <h2>Mina bokningar</h2>
      <Minabokningarcomponent data={userBookings} />
      <div>Boka fler städningar: <Link href="/booking">Bokning</Link></div>
    </div>
  </>
}

export async function getStaticProps() {
  const response = await fetch(`http://localhost:8080/booking/get/user/1`)
  const userBookings = await response.json()
  console.log("returnerar detta från getStaticProps: ", userBookings)
  return { props: { userBookings } }
}

export default MyPages
