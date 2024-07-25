import axios from "axios";
import React, { useEffect, useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";

function Formulario(props) {
  const { currentPage, setAnimeList, status, setStatus, setGenre, genre } =
    props;

  useEffect(() => {
    if (status !== "" || genre !== "") {
      getData();
    }
  }, [status, currentPage, genre]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?page=${currentPage}&status=${status}&genres=${genre}`
      );
      setAnimeList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDropdownStatus = (status) => {
    setStatus(status);
  };
  const handleDropdownGenre = (genre) => {
    setGenre(genre);
  };

  return (
<<<<<<< HEAD
    <div id='formulario-search'>
<Dropdown className="d-inline mx-2"  onSelect={handleSelect(setGenre)} >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info' style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>
        Géneros
        </Dropdown.Toggle>

        <Dropdown.Menu >
          <Dropdown.Item eventKey="Action" >Action</Dropdown.Item>
          <Dropdown.Item eventKey="Space">Espacial</Dropdown.Item>
          <Dropdown.Item eventKey="Kids">Infantil</Dropdown.Item>
          <Dropdown.Item eventKey="Mecha">Mecha</Dropdown.Item>
          <Dropdown.Item eventKey="Sci-Fi">Ciencia Ficción</Dropdown.Item>
          <Dropdown.Item eventKey="Romance">Romance</Dropdown.Item>
          <Dropdown.Item eventKey="Shounen">Shounen</Dropdown.Item>
          <Dropdown.Item eventKey="Horror">Terror</Dropdown.Item>
          <Dropdown.Item eventKey="Martial Arts">Artes Marciales</Dropdown.Item>
          <Dropdown.Item eventKey="Comedy">Comedia</Dropdown.Item>
          <Dropdown.Item eventKey="Drama">Drama</Dropdown.Item>
          <Dropdown.Item eventKey="Fantasy">Fantasía</Dropdown.Item>
          <Dropdown.Item eventKey="Isekai">Isekai</Dropdown.Item>
          <Dropdown.Item eventKey="Military">Militar</Dropdown.Item>
          <Dropdown.Item eventKey="Detective">Detective</Dropdown.Item>
          <Dropdown.Item eventKey="Samurai">Samurai</Dropdown.Item>
          <Dropdown.Item eventKey="Supernatural">Sobrenarutal</Dropdown.Item>
          <Dropdown.Item eventKey="Harem">Harem</Dropdown.Item>
          <Dropdown.Item eventKey="Adventure">Aventuras</Dropdown.Item>
          <Dropdown.Item eventKey="Gore">Sangriento</Dropdown.Item>
          <Dropdown.Item eventKey="Ecchi">Ecchi</Dropdown.Item>
          <Dropdown.Item eventKey="Historical">Histórico</Dropdown.Item>
          <Dropdown.Item eventKey="Sports">Deporte</Dropdown.Item>
          <Dropdown.Item eventKey="Mystery">Misterio</Dropdown.Item>
          <Dropdown.Item eventKey="Psychological">Psicológico</Dropdown.Item>
          <Dropdown.Item eventKey="Seinen">Sheinen</Dropdown.Item>
          <Dropdown.Item eventKey="Super Power">Super poderes</Dropdown.Item>
          <Dropdown.Item eventKey="Yaoi">Yaoi</Dropdown.Item>
          <Dropdown.Item eventKey="Racing">Carreras</Dropdown.Item>
          <Dropdown.Item eventKey="Reincarnation">Reencarnación</Dropdown.Item>
          <Dropdown.Item eventKey="School">Escolares</Dropdown.Item>
          <Dropdown.Item eventKey="Avant Garde">Vanguardia</Dropdown.Item>
          <Dropdown.Item eventKey="Magic">Magia</Dropdown.Item>
          <Dropdown.Item eventKey="Music">Música</Dropdown.Item>
          <Dropdown.Item eventKey="Shoujo">Shoujo</Dropdown.Item>
          <Dropdown.Item eventKey="Suspense">Suspense</Dropdown.Item>
          <Dropdown.Item eventKey="Yuri">Yuri</Dropdown.Item>


        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2"  onSelect={handleSelect(setStatus)} >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info' style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>
        Estado
        </Dropdown.Toggle>
=======
    <div id="formulario-search">
      {/* Status */}
      <Dropdown className="d-inline mx-2" onSelect={handleDropdownStatus}>
        <Dropdown.Toggle variant="outline-info">Status</Dropdown.Toggle>
>>>>>>> huanye

        <Dropdown.Menu>
          <Dropdown.Item eventKey="airing">Airing</Dropdown.Item>
          <Dropdown.Item eventKey="complete">Completed</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
<<<<<<< HEAD

      <Dropdown className="d-inline mx-2"  onSelect={handleSelect(setOrder)} >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info' style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>
        Orden
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item >Actualizados</Dropdown.Item>
          <Dropdown.Item >Nombre A-Z</Dropdown.Item>
          <Dropdown.Item >Calificación</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2"  onSelect={handleSelect(setYear)} >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info' style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>
        Año
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="2024">2024</Dropdown.Item>
          <Dropdown.Item eventKey="2023">2023</Dropdown.Item>
          <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
          <Dropdown.Item eventKey="2021">2021</Dropdown.Item>
          <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
          <Dropdown.Item eventKey="2019">2019</Dropdown.Item>
          <Dropdown.Item eventKey="2018">2018</Dropdown.Item>
          <Dropdown.Item eventKey="2017">2017</Dropdown.Item>
          <Dropdown.Item eventKey="2016">2016</Dropdown.Item>
          <Dropdown.Item eventKey="2015">2015</Dropdown.Item>
          <Dropdown.Item eventKey="2014">2014</Dropdown.Item>
          <Dropdown.Item eventKey="2013">2013</Dropdown.Item>
          <Dropdown.Item eventKey="2012">2012</Dropdown.Item>
          <Dropdown.Item eventKey="2011">2011</Dropdown.Item>
          <Dropdown.Item eventKey="2010">2010</Dropdown.Item>
          <Dropdown.Item eventKey="2009">2009</Dropdown.Item>
          <Dropdown.Item eventKey="2008">2008</Dropdown.Item>
          <Dropdown.Item eventKey="2007">2007</Dropdown.Item>
          <Dropdown.Item eventKey="2006">2006</Dropdown.Item>
          <Dropdown.Item eventKey="2005">2005</Dropdown.Item>
          <Dropdown.Item eventKey="2004">2004</Dropdown.Item>
          <Dropdown.Item eventKey="2003">2003</Dropdown.Item>
          <Dropdown.Item eventKey="2002">2002</Dropdown.Item>
          <Dropdown.Item eventKey="2001">2001</Dropdown.Item>
          <Dropdown.Item eventKey="2000">2000</Dropdown.Item>
          <Dropdown.Item eventKey="1999">1999</Dropdown.Item>
          <Dropdown.Item eventKey="1998">1998</Dropdown.Item>
          <Dropdown.Item eventKey="1997">1997</Dropdown.Item>
          <Dropdown.Item eventKey="1996">1996</Dropdown.Item>
          <Dropdown.Item eventKey="1995">1995</Dropdown.Item>
          <Dropdown.Item eventKey="1994">1994</Dropdown.Item>
          <Dropdown.Item eventKey="1993">1993</Dropdown.Item>
          <Dropdown.Item eventKey="1992">1992</Dropdown.Item>
=======
      {/*genre*/}
      <Dropdown className="d-inline mx-2" onSelect={handleDropdownGenre}>
        <Dropdown.Toggle variant="outline-info">Genre</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Adventure</Dropdown.Item>
          <Dropdown.Item eventKey="4">Comedy</Dropdown.Item>
          <Dropdown.Item eventKey="8">Drama</Dropdown.Item>
          <Dropdown.Item eventKey="10">Fantasy</Dropdown.Item>
          <Dropdown.Item eventKey="14">Horror</Dropdown.Item>
          <Dropdown.Item eventKey="17">Mystery</Dropdown.Item>
          <Dropdown.Item eventKey="19">Psychological</Dropdown.Item>
          <Dropdown.Item eventKey="22">Romance</Dropdown.Item>
          <Dropdown.Item eventKey="24">Sci-Fi</Dropdown.Item>
          <Dropdown.Item eventKey="28">Slice of Life</Dropdown.Item>
          <Dropdown.Item eventKey="30">Supernatural</Dropdown.Item>
          <Dropdown.Item eventKey="33">Historical</Dropdown.Item>
          <Dropdown.Item eventKey="35">Music</Dropdown.Item>
          <Dropdown.Item eventKey="37">Sports</Dropdown.Item>
          <Dropdown.Item eventKey="40">Demons</Dropdown.Item>
          <Dropdown.Item eventKey="42">Game</Dropdown.Item>
          <Dropdown.Item eventKey="44">Martial Arts</Dropdown.Item>
          <Dropdown.Item eventKey="46">Parody</Dropdown.Item>
          <Dropdown.Item eventKey="47">Samurai</Dropdown.Item>
          <Dropdown.Item eventKey="49">Space</Dropdown.Item>
          <Dropdown.Item eventKey="51">Yaoi</Dropdown.Item>
          <Dropdown.Item eventKey="53">Yuri</Dropdown.Item>
          <Dropdown.Item eventKey="54">Harem</Dropdown.Item>
>>>>>>> huanye
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Formulario;
