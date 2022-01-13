import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import styles from '../styles/Navbar.module.css'
function Navbarcomponent() {


  return (
    <div className={styles.navbar}>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link href="/">
          <a className="navbar-brand">Next Context API</a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link href="/about">
              <a className="nav-link">put link here</a>
            </Link>
            <Link href="/contact">
              <a className="nav-link">put link here</a>
            </Link>
            <NavDropdown
              title={"dropdown".toUpperCase()}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item onClick={ console.log('() => value.setLanguageSelected("en")')}>
                English
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={console.log('() => value.setLanguageSelected("es")') }>
                Spanish
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
  )
}

export default Navbarcomponent
