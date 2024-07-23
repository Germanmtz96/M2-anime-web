import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Buscador() {
  const [searchTerm, setSearchTerm] = useState("");
  const [animeArr, setAnimeArr] = useState(null);
  const [filteredArr, setFilteredArr] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/anime");
        setAnimeArr(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (animeArr) {
      const delayDebounceFn = setTimeout(() => {
        if (searchTerm === "") {
          setFilteredArr([]);
        } else {
          const filtered = animeArr.filter((eachAnime) =>
            eachAnime.title.toLowerCase().startsWith(searchTerm.toLowerCase())
          );
          setFilteredArr(filtered);
        }
      }, 3000); // Reduced debounce delay to 500ms

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchTerm, animeArr]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
        className="live-search-field"
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
