import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";
function Tendencias(props) {
  const { eachTendencia } = props;

  return (
    <Link to={`/anime-list/${eachTendencia.mal_id}`}>
    <div id="card-carousel">
      <img
        src={eachTendencia.images.jpg.large_image_url}
        className="d-block w-100"
      />
      <Carousel.Caption>
        <div>
          <h3 className="box">{eachTendencia.title}</h3>
        </div>
      </Carousel.Caption>
    </div>
    </Link>
  );
}

export default Tendencias;
