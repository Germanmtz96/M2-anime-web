import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import bg from "../assets/Image20240724104615.png";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function UltimosComentarios() {
  const [comentarioArr, setComentarioArr] = useState(null);

  useEffect(() => {
    getComentarioArr();
  }, []);

  const getComentarioArr = async () => {
    const response = await axios.get("http://localhost:5005/comments");
    setComentarioArr(response.data.slice(-5));
    
    console.log(comentarioArr);
  };

  if (comentarioArr === null) {
    return <p>"Loading ..."</p>;
  }
  return (
    <div >
      <h2 id="last-comments-title">Last comments</h2>
      <Carousel data-bs-theme="dark" id="carousel-coment" style={{width:'100%'}}>
        {comentarioArr.map((e) => {
          return (
            <Carousel.Item id={e.id} >
              <img src={bg}></img>
              <Carousel.Caption id="ult-com-caption" style={{height:'100%'}}>
                <Card style={{  backgroundColor: '#89b4fb',width:'100%'}}>
                  <Card.Header>
                    <ListGroup.Item style={{backgroundColor: '#c2d8fb' , border:' 1px solid #5091fb', color:'black'}}>Anime title: {e.title}</ListGroup.Item>
                  </Card.Header>
                   <ListGroup variant="flush">
                    <ListGroup.Item style={{backgroundColor: '#c2d8fb' , border:' 1px solid #5091fb', color:'black'}}>Commenter: {e.name}</ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: '#c2d8fb' , border:' 1px solid #5091fb', color:'black'}}>Score given: {e.score}</ListGroup.Item> 
                    <ListGroup.Item id="ult-com-comment" style={{backgroundColor: '#c2d8fb' , border:' 1px solid #5091fb', color:'black'}}>Comment: {e.comment}</ListGroup.Item>
                   </ListGroup>
                </Card>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default UltimosComentarios;
