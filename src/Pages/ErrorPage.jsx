import React from 'react'
import yuzu from "../assets/yuzu-bucket.png"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div id='error' style={{display:'flex',flexDirection:'row',textAlign:'center',justifyContent:'center', flexWrap:'wrap'}}>
      <img src={yuzu} style={{width:'50%', marginTop:'20vh'}}/>
      <div style={{width:'50%', marginTop:'20vh'}}>
        <h2 style={{ fontSize:'2.5em'}}>404 - Página no encontrada</h2>
        <p style={{marginTop:'5vh', fontSize:'1.5em'}}>¡Yuzu dice que aquí no hay nada!</p>
        <Link to="/">
        <Button style={{marginTop:'5vh', backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>LLÉVAME AL INICIO</Button>
        </Link>
      </div>

    </div>
  )
}

export default ErrorPage