import React, { useEffect } from "react";
import Formulario from "../Components/Formulario";
import AnimeCard from "../Components/AnimeCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";

function AnimeListPage() {
  const [filterIsVisible, setFilterIsVisible] = useState(false);
  const [animeList, setAnimeList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState(currentPage);
  const [status, setStatus] = useState("");
  const [genre, setGenre] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?page=${currentPage}&status=${status}&genres=${genre}`
      );
      setAnimeList(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage,status,genre]);

  if (animeList === null) {
    return <h3>... Cargando</h3>;
  }

  function handleFilterButtonIsVisible() {
    setFilterIsVisible(!filterIsVisible);
  }
  function handlePageChange(event) {
    setInputPage(parseInt(event.target.value, 10));
  }
  function handlePageSubmit() {
    if (inputPage > 0) {
      setCurrentPage(inputPage);
    }
  }
  function handleNext(){
    setInputPage (inputPage +1)
    setCurrentPage (inputPage + 1)
  }
  function handleBefore(){
    if (inputPage > 1){
    setInputPage (inputPage -1)
    setCurrentPage (inputPage -1)
    }
  }
  return (
    <div id="anime-list">
      <Button
        id="search-btn"
        variant="outline-info"
        onClick={handleFilterButtonIsVisible}
      >
        Busqueda avanzada
      </Button>

      {filterIsVisible && (
        <Formulario currentPage={currentPage} setAnimeList={setAnimeList} status={status} setStatus={setStatus} genre={genre} setGenre={setGenre}/>
      )}

      <section id="lista-animes">
        {animeList.data.map((eachAnime, index) => {
          return (
            <Link key={index} to={`/anime-list/${eachAnime.mal_id}`}>
              <AnimeCard eachAnime={eachAnime}  />
            </Link>
          );
        })}
      </section>
      <div id="pagination">
      <button onClick={handleBefore}>Before</button>
        <input
          type="number"
          onChange={handlePageChange}
          value={inputPage}
          min={1}
        />
        <button type="button" onClick={handlePageSubmit}>
          Go to page
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default AnimeListPage;
