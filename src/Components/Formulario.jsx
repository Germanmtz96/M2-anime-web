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
    <div id="formulario-search">
      {/* Status */}
      <Dropdown className="d-inline mx-2" onSelect={handleDropdownStatus}>
        <Dropdown.Toggle variant="outline-info">Status</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="airing">Airing</Dropdown.Item>
          <Dropdown.Item eventKey="complete">Completed</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Formulario;
