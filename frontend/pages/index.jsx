import React from 'react'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import { Button } from '@material-ui/core'
import { FaHouseUser, FaCartPlus } from 'react-icons/fa'
import useActiveUser from '../lib/hooks/useActiveUser'
import LoginComponent from '../components/LoginComponent'

function HomePage() {
  const activeUser = useActiveUser()


  return <>
  <div className={styles.main}>
    <h2>Välkommen till Städa Fint AB</h2>


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
        <LoginComponent />
        <Link href="/registrering" ><Button variant="contained" className={styles.button}>Registrera användare</Button></Link></>
        )}

    </div>

  </>
}
export default HomePage
