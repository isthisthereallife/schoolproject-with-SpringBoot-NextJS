import React from 'react'
import Link from 'next/link'
import styles from '../styles/index.module.css'
function HomePage() {
  return <>
  <div className={styles.main}>
    <h1>Inloggningssida</h1>

    <div>Gå till <Link href="/booking">bokning</Link></div>
    </div>

  </>
}

export default HomePage
