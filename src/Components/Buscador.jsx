import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        console.log(filtered)
        setFilteredArr(filtered.slice(0,5));
        console.log(filteredArr)
      }
    }, 3000); 
    
    return () => clearTimeout(delayDebounceFn);
  }
}, [searchTerm, animeArr]);

//funciones
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
    console.log(searchTerm)
  };

  if (animeArr === null) {
    return <h3>... Cargando</h3>;
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
      <ul>
        {filteredArr.map((anime) => {
          return (
            <Link to={`/anime-list/${anime.mal_id}`}>
              <li key={anime.mal_id}>{anime.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Buscador;
