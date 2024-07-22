import React from 'react'
import logo from "../assets/logo-1.png"
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNavbar() {
  return (
    

<Navbar id="navbar" expand="lg" style={{ backgroundColor: '#6b20ee' }} data-bs-theme="dark">
<Container fluid>
  <Navbar.Brand as={Link} to="/"><img src={logo} height={40} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link as={Link} to="/">Top 25 Animes</Nav.Link>
      <Nav.Link href="#action2">Animes de Temporada</Nav.Link>
      <Nav.Link as={Link} to="/anime-list">Todos los Animes</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav>
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Buscar"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-info">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Container>
</Navbar>

  )
}

export default MyNavbar