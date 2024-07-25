import React from 'react'
import narutosad from '../assets/naruto.jpg'


function Error2Page() {
  return (
    <>
    <div style={{position:'relative', display:'inline-block'}}>
      <img src={narutosad} style={{width:'100%',display:'block'}}/>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',fontSize:'18px'}}>
      <h2>Error</h2>
      <p>¡Lo sentimos, ha sucedido un error!</p>
      </div>
    </div>
    <div style={{position:'relative', display:'inline-block'}}>
    <img src={narutosad} style={{width:'100%',display:'block'}}/>
    <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',fontSize:'18px'}}>
    <h2>Error</h2>
    <p>¡Lo sentimos, ha sucedido un error!</p>
    </div>
  </div>
  <div style={{position:'relative', display:'inline-block'}}>
    <img src={narutosad} style={{width:'100%',display:'block'}}/>
    <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',fontSize:'18px'}}>
    <h2>Error</h2>
    <p>¡Lo sentimos, ha sucedido un error!</p>
    </div>
  </div>
  
  </>
  )
}

export default Error2Page