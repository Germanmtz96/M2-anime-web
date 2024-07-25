import React, { useEffect } from "react";
import Formulario from "../Components/Formulario";
import AnimeCard from "../Components/AnimeCard";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BounceLoader } from "react-spinners";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AnimeListPage() {
  const [filterIsVisible, setFilterIsVisible] = useState(false);
  const [animeList, setAnimeList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState(currentPage);
  const [status, setStatus] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate()
  
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?page=${currentPage}&status=${status}&genres=${genre}`
      );
      setAnimeList(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error")
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage,status,genre]);

  if (animeList === null) {
    return (
      <div>
        <BounceLoader className="spinner" size={150} aria-label="Loading Spinner" ></BounceLoader>
        <h3> Loading ... </h3>;
      </div>
    );
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
      <div id="pagination" style={{display:'flex', flexDirection:'row', padding:'10px',}}>
      <Button onClick={handleBefore} style={{height:'40px', backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>Before</Button>
      <InputGroup className="mb-3" style={{height:'40px',width:'180px', marginLeft:'10px',marginRight:'10px'}}>
      <Form.Control
          type="number"
          onChange={handlePageChange}
          value={inputPage}
          min={1}
        />
      </InputGroup>
        <Button type="button" onClick={handlePageSubmit} style={{height:'40px',backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb', marginRight:'10px'}}>
          Go to page
        </Button>
        <Button onClick={handleNext} style={{height:'40px', backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>Next</Button>
      </div>
    </div>
  );
}

export default AnimeListPage;
