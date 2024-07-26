import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Accordion from 'react-bootstrap/Accordion';
function AnimeDetailsCard(props) {
 


  return (
    <Card id="anime-card-details " className="details-card" style={{ backgroundColor: '#89b4fb',marginLeft:'10px', marginTop:'50px',marginBottom:'50px'}}>
      <Card.Img variant="top" src={props.theAnime.images.jpg.image_url} />
      <Card.Body >
      <h3 className="details-card-accordion" >{props.theAnime.title}</h3>
      <Accordion className="details-card-accordion" >
      <Accordion.Item eventKey="0">
        <Accordion.Header >Episodes</Accordion.Header>
        <Accordion.Body  style={{backgroundColor:'#5091fb'}}>
          {props.theAnime.episodes}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header >Score</Accordion.Header>
        <Accordion.Body  style={{backgroundColor:'#5091fb'}}>
          {props.theAnime.score}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header >Release year</Accordion.Header>
        <Accordion.Body  style={{backgroundColor:'#5091fb'}}>
          {props.theAnime.year}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header >Synopsis</Accordion.Header>
        <Accordion.Body  style={{backgroundColor:'#5091fb'}}>
          {props.theAnime.synopsis}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Background</Accordion.Header>
        <Accordion.Body  style={{backgroundColor:'#5091fb'}}>
          {props.theAnime.background}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        
      </Card.Body>
    </Card >
  );
}

export default AnimeDetailsCard;
