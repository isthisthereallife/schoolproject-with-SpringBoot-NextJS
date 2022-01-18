import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/navbar'
import UserSignUp from '../components/registerusercomponent'
StadaFint.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

function StadaFint({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps}/>
    <UserSignUp />
    </>
  )
}


export default StadaFint
