import React from 'react'
import PropTypes from 'prop-types'
import ActiveUserProvider from '../components/context/activeUserProvider'
import Navbarcomponent from '../components/navbarcomponent'
StadaFint.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

function StadaFint({ Component, pageProps }) {
  return (
    <>
    <ActiveUserProvider>
    <Navbarcomponent />
    <Component {...pageProps}/>
    </ActiveUserProvider>
    </>
  )
}


export default StadaFint
