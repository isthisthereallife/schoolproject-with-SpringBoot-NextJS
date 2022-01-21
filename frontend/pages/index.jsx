import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import { Button } from '@material-ui/core'
import { FaRegCalendarPlus, FaCalendarDay, FaHouseUser, FaArrowRight, FaCartPlus } from 'react-icons/fa'
import { debugChangeUser } from '../components/navbarcomponent'
import useActiveUser from '../lib/hooks/useActiveUser'
import LoginForm, { login } from '../components/LoginForm'
import { loadUser } from '../components/context/activeUserProvider'

function HomePage() {
  const activeUser = useActiveUser()

  const DEBUG_USER_ID = 1

  const debugLogin = (() => {
    debugChangeUser(activeUser)
  })


useEffect(() => {

  console.log("what")
}, [activeUser])


  function loginBtnEvent() {
    loadUser(activeUser, DEBUG_USER_ID)
  }
  return <>
  <div className={styles.main}>
    <h2>Välkommen till Städa Fint AB</h2>


    {/* <Button className={styles.button} variant="contained" startIcon={<FaCalendarDay/>}><Link href="/minabokningar">MINA BOKNINGAR</Link></Button> */}
    {(activeUser.activeUser && activeUser.activeUser.customer_id
    ? <>
        <Link href="/minasidor">
          <Button className={styles.button} variant="contained" startIcon={<FaHouseUser/>}>
            mina sidor
          </Button>
        </Link>
        <Link href="/boka">
          <Button className={styles.button} variant="contained" startIcon={<FaCartPlus/>}>
            boka tjänst
          </Button>
        </Link>
      </>
    : <>
        <LoginForm />
        <Link href="/minasidor"><Button className={styles.button} onClick={(() => loginBtnEvent())} variant="contained" startIcon={<FaArrowRight/>}>Logga in</Button></Link>
        <Link href="/registrering" variant="contained"><Button className={styles.button}>Registrera användare</Button></Link></>
        )}

    </div>

  </>
}
export default HomePage
