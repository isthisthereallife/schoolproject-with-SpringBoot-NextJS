import React from 'react'
import Link from 'next/link'
import styles from '../styles/confirmation.module.css'
function ConfirmationPage() {


  return (
    <>
      <div className={styles.main}>
        <h3>Detta är din bokningsbekräftelse.</h3>
        <div>Din städning kommer ske [put datetime here].
        </div>
        <div className={styles.backToStartButtondiv}>
          <button className={styles.backToStartButton}><Link href="/">Tillbaka till startsidan</Link></button>
        </div>
      </div>
    </>
  )
}

export default ConfirmationPage
