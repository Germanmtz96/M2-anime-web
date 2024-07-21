import React from 'react'
import { Link } from 'react-router-dom'
 
function Footer() {
  return (
    <div className='footer'>
      <Link to="/about">
      <h3>About</h3>
      </Link>
    </div>
  )
}

export default Footer