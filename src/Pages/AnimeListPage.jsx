import React, { useEffect } from "react";
import Formulario from "../Components/Formulario";
import Buscador from "../Components/Buscador";
import AnimeCard from "../Components/AnimeCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Button from 'react-bootstrap/Button';

function AnimeListPage() {
  const [filterIsVisible, setFilterIsVisible] = useState(false);
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

  function handleFilterButton() {
    setFilterIsVisible(!filterIsVisible);
  }

  return (
    <div id="anime-list">
      <Button id="search-btn" variant="outline-info" onClick={handleFilterButton} style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>Busqueda avanzada</Button>

      {filterIsVisible && <Formulario animeList={animeList} setAnimeList={setAnimeList} />}

    <section id="lista-animes">
      {animeList.data.map((eachAnime, index)=>{
        return(
      <Link   key={index} to={`/anime-list/${eachAnime.mal_id}`}>
        <AnimeCard eachAnime={eachAnime} key={eachAnime.mal_id} />
      </Link>)
      })
      }
      </section>
    </div>
  );
}

export default AnimeListPage;
