import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import bg from "../assets/Image20240724104615.png";
function UltimosComentarios() {
  const [comentarioArr, setComentarioArr] = useState(null);

  useEffect(() => {
    getComentarioArr();
  }, []);

  const getComentarioArr = async () => {
    const response = await axios.get("http://localhost:5005/comments");
    setComentarioArr(response.data);
    setComentarioArr(comentarioArr.toSpliced(0, 5));
    console.log(comentarioArr);
  };

  if (comentarioArr === null) {
    return <p>"Loading ..."</p>;
  }
  return (
    <div >
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
