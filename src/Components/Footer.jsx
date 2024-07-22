import React from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
 
function Footer() {
  return (
    
      <Nav className="footer" activeKey="/home">
      <Nav.Item>
      <Nav.Link as={Link} to="/about" >About</Nav.Link> 
      </Nav.Item>
      <Nav.Link href='https://github.com/Germanmtz96/M2-anime-web'><img src="../src/assets/logo-github.png" height={20}/></Nav.Link>
      </Nav>
   
  )
}

export default Footer