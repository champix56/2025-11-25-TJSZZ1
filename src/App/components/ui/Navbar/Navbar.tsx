import React from 'react'
import styles from './Navbar.module.css'
import { Container, Nav, Navbar as Nvb } from 'react-bootstrap'

import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router'
const Navbar :React.FC= () => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
       <Nvb bg="dark" data-bs-theme="dark">
        <Container>
          <Link className='navbar-brand' to="/">Navbar</Link>
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/thumbnail">thumbnail</Link>
            <Link className='nav-link' to="/edit">Nouveau meme ...</Link>
          </Nav>
        </Container>
      </Nvb>
    </div>
  )
}

export default Navbar