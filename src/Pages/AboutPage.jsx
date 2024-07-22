import React from 'react'

import Card from 'react-bootstrap/Card';

function AboutPage() {
  return (
    <>
      <p>Made by: Joe Mama & Gobling Disnuts</p>
      <a href="https://github.com/Germanmtz96/M2-anime-web">Github del Proyecto</a>
      <div id="cards-about">
    <Card  id='about' style={{ width: '12rem' }}>
      <Card.Img variant="top" src="./src/assets/foto-german.jpg" />
      <Card.Body>
      <Card.Title>Germán Martínez</Card.Title>
      <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="https://github.com/Germanmtz96">Github</Card.Link>
        <Card.Link href="https://www.linkedin.com/in/germ%C3%A1n-mart%C3%ADnez-sanch%C3%A9z-a095a4318/">LinkedIn</Card.Link>
      </Card.Body>
    </Card >
    <Card  id='about' style={{ width: '12rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <Card.Title>Huanye</Card.Title>
      <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Github</Card.Link>
        <Card.Link href="#">LinkedIn</Card.Link>
      </Card.Body>
    </Card >
    </div>
    </>
  )
}

export default AboutPage