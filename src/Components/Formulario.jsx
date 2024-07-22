import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown';


function Formulario() {
  return (
    <div id='formulario-search'>
<Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info'>
        Géneros
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Todos</Dropdown.Item>
          <Dropdown.Item href="#">Ciencia Ficción</Dropdown.Item>
          <Dropdown.Item href="#">Espacial</Dropdown.Item>
          <Dropdown.Item href="#">Infantil</Dropdown.Item>
          <Dropdown.Item href="#">Mecha</Dropdown.Item>
          <Dropdown.Item href="#">Parodia</Dropdown.Item>
          <Dropdown.Item href="#">Romance</Dropdown.Item>
          <Dropdown.Item href="#">Shounen</Dropdown.Item>
          <Dropdown.Item href="#">Terror</Dropdown.Item>
          <Dropdown.Item href="#">Artes Marciales</Dropdown.Item>
          <Dropdown.Item href="#">Comedia</Dropdown.Item>
          <Dropdown.Item href="#">Drama</Dropdown.Item>
          <Dropdown.Item href="#">Fantasía</Dropdown.Item>
          <Dropdown.Item href="#">Josei</Dropdown.Item>
          <Dropdown.Item href="#">Militar</Dropdown.Item>
          <Dropdown.Item href="#">Policía</Dropdown.Item>
          <Dropdown.Item href="#">Samurai</Dropdown.Item>
          <Dropdown.Item href="#">Sobrenarutal</Dropdown.Item>
          <Dropdown.Item href="#">Vampiros</Dropdown.Item>
          <Dropdown.Item href="#">Aventuras</Dropdown.Item>
          <Dropdown.Item href="#">Demencia</Dropdown.Item>
          <Dropdown.Item href="#">Ecchi</Dropdown.Item>
          <Dropdown.Item href="#">Harem</Dropdown.Item>
          <Dropdown.Item href="#">Juegos</Dropdown.Item>
          <Dropdown.Item href="#">Misterio</Dropdown.Item>
          <Dropdown.Item href="#">Psicológico</Dropdown.Item>
          <Dropdown.Item href="#">Sheinen</Dropdown.Item>
          <Dropdown.Item href="#">Superpoderes</Dropdown.Item>
          <Dropdown.Item href="#">Yaoi</Dropdown.Item>
          <Dropdown.Item href="#">Carreras</Dropdown.Item>
          <Dropdown.Item href="#">Demonios</Dropdown.Item>
          <Dropdown.Item href="#">Escolares</Dropdown.Item>
          <Dropdown.Item href="#">Historico</Dropdown.Item>
          <Dropdown.Item href="#">Magia</Dropdown.Item>
          <Dropdown.Item href="#">Música</Dropdown.Item>
          <Dropdown.Item href="#">Shoujo</Dropdown.Item>
          <Dropdown.Item href="#">Suspenso</Dropdown.Item>
          <Dropdown.Item href="#">Yuri</Dropdown.Item>


        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info'>
        Estado
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">En emisión</Dropdown.Item>
          <Dropdown.Item href="#">Finalizado</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info'>
        Orden
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Actualizados</Dropdown.Item>
          <Dropdown.Item href="#">Nombre A-Z</Dropdown.Item>
          <Dropdown.Item href="#">Calificación</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info'>
        Año
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">2024</Dropdown.Item>
          <Dropdown.Item href="#">2023</Dropdown.Item>
          <Dropdown.Item href="#">2022</Dropdown.Item>
          <Dropdown.Item href="#">2021</Dropdown.Item>
          <Dropdown.Item href="#">2020</Dropdown.Item>
          <Dropdown.Item href="#">2019</Dropdown.Item>
          <Dropdown.Item href="#">2018</Dropdown.Item>
          <Dropdown.Item href="#">2017</Dropdown.Item>
          <Dropdown.Item href="#">2016</Dropdown.Item>
          <Dropdown.Item href="#">2015</Dropdown.Item>
          <Dropdown.Item href="#">2014</Dropdown.Item>
          <Dropdown.Item href="#">2013</Dropdown.Item>
          <Dropdown.Item href="#">2012</Dropdown.Item>
          <Dropdown.Item href="#">2011</Dropdown.Item>
          <Dropdown.Item href="#">2010</Dropdown.Item>
          <Dropdown.Item href="#">2009</Dropdown.Item>
          <Dropdown.Item href="#">2008</Dropdown.Item>
          <Dropdown.Item href="#">2007</Dropdown.Item>
          <Dropdown.Item href="#">2006</Dropdown.Item>
          <Dropdown.Item href="#">2005</Dropdown.Item>
          <Dropdown.Item href="#">2004</Dropdown.Item>
          <Dropdown.Item href="#">2003</Dropdown.Item>
          <Dropdown.Item href="#">2002</Dropdown.Item>
          <Dropdown.Item href="#">2001</Dropdown.Item>
          <Dropdown.Item href="#">2000</Dropdown.Item>
          <Dropdown.Item href="#">1999</Dropdown.Item>
          <Dropdown.Item href="#">1998</Dropdown.Item>
          <Dropdown.Item href="#">1997</Dropdown.Item>
          <Dropdown.Item href="#">1996</Dropdown.Item>
          <Dropdown.Item href="#">1995</Dropdown.Item>
          <Dropdown.Item href="#">1994</Dropdown.Item>
          <Dropdown.Item href="#">1993</Dropdown.Item>
          <Dropdown.Item href="#">1992</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Formulario   