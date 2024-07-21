import React from 'react'

function Tendencias(props) {

  const {eachTendencia} = props

  return (
    <div id='tendencias'>
      
    <h2>{eachTendencia.title}</h2> 
    <img src={eachTendencia.images.jpg.image_url} />
   
     

    </div>
  )
}

export default Tendencias