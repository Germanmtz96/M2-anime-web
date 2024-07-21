import React from 'react'
import Tendencias from "../Components/Tendencias"
import { Link } from 'react-router-dom'



function HomePage() {
  return (
    <div id='homepage'>
      <p>HomePage</p>
      <Tendencias />


      <Link to="/anime-list">
      <button id='btn-ir-contenido'> Ir al contenido</button>
      </Link>
    </div>
    
  )
}

export default HomePage