import React from 'react'
import Link from 'next/link'
function HomePage() {
  return <>
  <div>
    <h1>Inloggningssida</h1>

    <div>Gå till <Link href="/booking">bokning</Link></div>
    </div>

  </>
}

export default HomePage
