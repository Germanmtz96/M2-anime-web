import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Accordion from 'react-bootstrap/Accordion';
function AnimeDetailsCard(props) {
 


  return (
<<<<<<< HEAD
    <Card id="anime-card-details" style={{ backgroundColor: '#89b4fb', width:'98%',marginLeft:'10px', marginTop:'50px',marginBottom:'50px'}}>
      <Card.Img variant="top" src={props.theAnime.images.jpg.image_url} />
      <Card.Body >
      <h3 >{props.theAnime.title}</h3>
      <Accordion  >
      <Accordion.Item eventKey="0">
        <Accordion.Header >Episodios</Accordion.Header>
        <Accordion.Body style={{backgroundColor:'#5091fb'}}>
          {props.theAnime.episodes}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header >Score</Accordion.Header>
        <Accordion.Body style={{backgroundColor:'#5091fb'}}>
          {props.theAnime.score}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header >Release year</Accordion.Header>
        <Accordion.Body style={{backgroundColor:'#5091fb'}}>
          {props.theAnime.year}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header >Synopsis</Accordion.Header>
        <Accordion.Body style={{backgroundColor:'#5091fb'}}>
          {props.theAnime.synopsis}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Background</Accordion.Header>
        <Accordion.Body style={{backgroundColor:'#5091fb'}}>
          {props.theAnime.background}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        
      </Card.Body>
    </Card >
=======
    <div className="anime-details">
      <img src={props.theAnime.images.jpg.image_url} alt="" />
      <h3>Name: {props.theAnime.title} </h3>
      <button onClick={handleMore}>More details</button>
      {isMoreVisible && (
        <article >
          <p>Episodes: {props.theAnime.episodes} </p>
          <p>Score: {props.theAnime.score} </p>
          <p>Release year: {props.theAnime.year} </p>
          <p>Synopsis: {props.theAnime.synopsis}</p>
          <p>Background: {props.theAnime.background}</p>
        </article>
      )}
    </div>
>>>>>>> huanye
  );
}

export default AnimeDetailsCard;
