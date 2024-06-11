import { Link } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="py-5 pl-5">
      <Container>
        <Navbar.Brand href='/'>Kage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={`/`}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={`/resume`}>Resume</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={`/about`}>About</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
