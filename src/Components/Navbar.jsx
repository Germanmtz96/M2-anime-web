import React from 'react'
import logo from "../assets/logo-1.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/">
        <img src={logo} alt="" id='nav-logo' />
      </Link>
    </div>
  )
}

export default Navbar