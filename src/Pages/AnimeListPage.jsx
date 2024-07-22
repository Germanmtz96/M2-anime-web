import React, { useEffect } from "react";
import Formulario from "../Components/Formulario";
import Buscador from "../Components/Buscador";
import AnimeCard from "../Components/AnimeCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AnimeListPage() {
  const [filterIsVisible, setFilterIsVisible] = useState(false);
  const [searchIsVisible, setSearchIsVisible] = useState(false);
  const [animeList, setAnimeList] = useState(null)

  const getData = async () =>{
    try {
      const response = await axios.get("https://api.jikan.moe/v4/anime")
      setAnimeList(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  if(animeList === null){
    return  <h3>... Cargando</h3>
  }

  function handleSearchButton() {
    setSearchIsVisible(!searchIsVisible);
  }
  function handleFilterButton() {
    setFilterIsVisible(!filterIsVisible);
  }
console.log(animeList)
  return (
    <div id="anime-list">
      <button onClick={handleFilterButton}>Filter</button>

      {filterIsVisible && <Formulario />}

      <button onClick={handleSearchButton}>Search</button>

      {searchIsVisible && <Buscador />}

      {animeList.data.map((eachAnime)=>{
        return(
      <Link   to={`/anime-list/${eachAnime.mal_id}`}>
        <AnimeCard eachAnime={eachAnime} key={eachAnime.mal_id}/>
      </Link>)
      })
      }
    </div>
  );
}

export default AnimeListPage;
