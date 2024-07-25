import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import bg from "../assets/Image20240724104615.png";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
function UltimosComentarios() {
  const [comentarioArr, setComentarioArr] = useState(null);
  const navigate = useNavigate;
  useEffect(() => {
    getComentarioArr();
  }, []);

  const getComentarioArr = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/comments`
      );
      setComentarioArr(response.data);

      setComentarioArr(comentarioArr.toSpliced(0, 5));
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  if (comentarioArr === null) {
    return(
    <div>
      <BounceLoader className="spinner" size={150} aria-label="Loading Spinner"></BounceLoader>
      <h3> Loading ... </h3>;
    </div>)
  }

  return (
    <div>
      <h2 id="last-comments-title">Last comments</h2>
      <Carousel data-bs-theme="dark" id="carousel-coment">
        {comentarioArr.map((e) => {
          return (
            <Carousel.Item id={e.id}>
              <img src={bg}></img>
              <Carousel.Caption id="ult-com-caption">
                <p>Anime title: {e.title}</p>
                <p>Commenter: {e.name}</p>
                <p>score given: {e.score}</p>
                <p id="ult-com-comment">comment: {e.comment}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default UltimosComentarios;
