import React, { useEffect, useState } from "react";
import Tendencias from "../Components/Tendencias";
import { Link } from "react-router-dom";
import UltimosComentarios from "../Components/UltimosComentarios";
import axios from "axios";

function HomePage() {
  const [tendenciasArr, setTendenciasArr] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v4/top/anime");
      setTendenciasArr(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);



  if(tendenciasArr === null){
    return <h3>... Cargando</h3>
  }

  return (
    <div id="homepage">
      <p>HomePage</p>
       {tendenciasArr.data.map((eachTendencia,index) => {
        return <Tendencias key={index} eachTendencia={eachTendencia} />;
      })} 
      <UltimosComentarios />

      <Link to="/anime-list">
        <button id="btn-ir-contenido"> Ir al contenido</button>
      </Link>
    </div>
  );
}

export default HomePage;
