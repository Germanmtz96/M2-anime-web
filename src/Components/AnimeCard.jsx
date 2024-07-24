import React from 'react'
import Card from 'react-bootstrap/Card';

function AnimeCard(props) {
    
  return (

  <Card style={{ width: '10rem', margin: '10px' , backgroundColor: '#89b4fb' }} >

    <Card.Img variant="top" src={props.eachAnime.images.jpg.image_url} style={{ height:'200px'}} />
    <Card.Title style={{ height:'44px', overflow:'hidden'}}>{props.eachAnime.title}</Card.Title> 


  </Card>



  )
}

export default AnimeCard