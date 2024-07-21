import React from "react";
import Formulario from "../Components/Formulario";
import Buscador from "../Components/Buscador";
import AnimeCard from "../Components/AnimeCard";
import { useState } from "react";
import { Link } from "react-router-dom";

function AnimeListPage() {
  const [filterIsVisible, setFilterIsVisible] = useState(false);
  const [searchIsVisible, setSearchIsVisible] = useState(false);

  function handleSearchButton() {
    setSearchIsVisible(!searchIsVisible);
  }
  function handleFilterButton() {
    setFilterIsVisible(!filterIsVisible);
  }

  return (
    <div id="anime-list">
      <button onClick={handleFilterButton}>Filter</button>
      {searchIsVisible && <Formulario />}
      <button onClick={handleSearchButton}>Search</button>
      {searchIsVisible && <Buscador />}

      {/*Array.map(e=>{
        e
        })  */}
      <Link to={"/anime-list/:id"}>
        <AnimeCard />
      </Link>
    </div>
  );
}

export default AnimeListPage;
