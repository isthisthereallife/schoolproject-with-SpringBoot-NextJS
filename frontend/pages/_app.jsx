import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/navbar'

StadaFint.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

function StadaFint({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps}/>
    </>
  )
}
export default StadaFint
