import React from 'react'
import { Link } from 'react-router-dom'
 
function Footer() {
  return (
    <div className='footer'>
      <Link to="/about">
      <h3>About</h3>
      </Link>
      <a href='https://github.com/Germanmtz96/M2-anime-web'><img src="../src/assets/logo-github.png" height={30}/></a>
    </div>
  )
}

export default Footer