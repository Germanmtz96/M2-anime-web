import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import bg from "../assets/Image20240724104615.png";
import { Card,ListGroup } from "react-bootstrap";
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
      setComentarioArr(response.data.slice(-5));
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  if (comentarioArr === null) {
    return(
    <div>
      <h3> Loading ... </h3>;
    </div>)
  }

  return (
    <div>
      <h2 id="last-comments-title">Last comments</h2>
      <Carousel data-bs-theme="dark" id="carousel-coment" style={{width:'100%',marginBottom:"40px"}}>
        {comentarioArr.map((e) => {
          return (
            <Carousel.Item id={e.id} key={e.id}>
              <img src={bg}></img>
              <Carousel.Caption id="ult-com-caption" style={{height:'100%'}}>
                <Card style={{  backgroundColor: '#89b4fb',width:'100%'}}>
                  <Card.Header>
                    <ListGroup.Item style={{backgroundColor: '#c2d8fb' , border:' 1px solid #5091fb', color:'black'}}>Anime title: {e.title}</ListGroup.Item>
                  </Card.Header>
                   <ListGroup variant="flush" >
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
