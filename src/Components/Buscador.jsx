import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import ListGroup from 'react-bootstrap/ListGroup';

function Buscador() {
  const [searchTerm, setSearchTerm] = useState("");
  const [animeArr, setAnimeArr] = useState(null);
  const [filteredArr,setFilteredArr ] = useState([])

  //get animes Array function
  const getAnimes = async () =>{
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}`)
      setAnimeArr(response.data.data)
    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }
  useEffect(()=>{
    if (searchTerm) {
      getAnimes();
    } else {
      setAnimeArr([]);
      setFilteredArr([]);
    }
  },[searchTerm])
  
  
  // filter response by searchTerm and get 5 titles with timeout 
  useEffect(() => {
    if (animeArr) {
      const delayDebounceFn = setTimeout(() => {
        if (searchTerm === "") {
          setFilteredArr([])
        } else {
          const filtered = animeArr.filter((eachAnime) =>
            eachAnime.title.toLowerCase().startsWith(searchTerm.toLowerCase())
          
        );
        setFilteredArr(filtered.slice(0,5));
      }
    }, 3000); 
    
    return () => clearTimeout(delayDebounceFn);
  }
}, [searchTerm, animeArr]);

//funciones
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
  };

  if (animeArr === null) {
    (
      <div>
        <BounceLoader className="spinner" size={150} aria-label="Loading Spinner" ></BounceLoader>
        <h3> Loading ... </h3>;
      </div>
    );
  }

  return (
    <div>
      <input
        autoFocus
        type="text"
        autoComplete="off"
        placeholder="Search here..."
        onChange={handleSearch}
        value={searchTerm}
      />
      <ListGroup>
        {filteredArr.map((anime) => {
          return (
            
            <Link to={`/anime-list/${anime.mal_id}`}>
              <ListGroup.Item key={anime.mal_id}>{anime.title}</ListGroup.Item>
            </Link>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default Buscador;
