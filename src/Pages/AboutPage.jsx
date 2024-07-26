import React from 'react'

import Card from 'react-bootstrap/Card';
import german from '../assets/foto-german.jpg'
import luffy from '../assets/luffy.jpg'
function AboutPage() {
  return (
    <>
    <Card style={{width:'96%', margin:'10px'}}>
    <Card.Body >
      <Card.Text className='title-about-proyect'>Welcome to SearchAnime, your ultimate portal for discovering and exploring the fascinating world of anime. With a deep passion for anime and technology, we have created this platform so that fans can easily find detailed and updated information about their favorite series. SearchAnime offers an intuitive search engine and a vast database for you to enjoy your otaku experience to the fullest.</Card.Text>

    </Card.Body>
    </Card>
      <a className='title-about-proyect' href="https://github.com/Germanmtz96/M2-anime-web">Github del Proyecto</a>
      <div id="cards-about">
    <Card  className='about' style={{ width: '14rem' , backgroundColor: '#89b4fb', marginLeft:'10px',marginTop:'20px'}}>
      <Card.Img variant="top" src={german} />
      <Card.Body>
      <Card.Title className='title-about'>Germán Martínez</Card.Title>
      <Card.Text>
      I am passionate and committed to my work, always seeking to learn and improve with every project.
        </Card.Text>
        <Card.Link className='title-about' href="https://github.com/Germanmtz96">Github</Card.Link>
        <Card.Link className='title-about' href="https://www.linkedin.com/in/germ%C3%A1n-mart%C3%ADnez-sanch%C3%A9z-a095a4318/">LinkedIn</Card.Link>
      </Card.Body>
    </Card >
    <Card  className='about' style={{ width: '14rem' , backgroundColor: '#89b4fb',marginLeft:'10px',marginRight:'10px',marginTop:'20px'}}>
      <Card.Img variant="top" src={luffy}
 />
      <Card.Body>
      <Card.Title className='title-about'>Huanye</Card.Title>
      <Card.Text>
      Developer based in Spain. Obsessed with making interactive and artistic pages.
        </Card.Text>
        <Card.Link className='title-about' href="https://github.com/Huanye98?tab=repositories">Github</Card.Link>
        <Card.Link className='title-about' href="https://www.linkedin.com/in/huanye-zhu-016792222/">LinkedIn</Card.Link>
      </Card.Body>
    </Card >
    </div>
    </>
  )
}

export default AboutPage