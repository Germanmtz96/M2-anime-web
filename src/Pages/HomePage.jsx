import React, { useEffect, useState } from "react";
import Tendencias from "../Components/Tendencias";
import { Link } from "react-router-dom";
import UltimosComentarios from "../Components/UltimosComentarios";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { BounceLoader } from "react-spinners";
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

  if (tendenciasArr === null) {
    return (
      <div>
        <h3> Loading ... </h3>;
      </div>
    );
  }

  return (
    <div id="homepage">
      <h2 id="title-carousel">Top 25 anime</h2>
      <div className="carousel-img-text">
      <Carousel data-bs-theme="dark" id="carousel" >
        {tendenciasArr.data.map((eachTendencia, index) => {
          return (
            <Carousel.Item key={index}>
              <Tendencias eachTendencia={eachTendencia} />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="bnt-comments">
      <Link to="/anime-list">
        <Button variant="outline-info" size="lg" id="btn-ir-contenido" style={{backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb',marginBottom:'30px'}}>
          {" "}
          Go to all animes
        </Button>
      </Link>
      <UltimosComentarios />
      </div>
      </div>
    </div>
  );
}

export default HomePage;
