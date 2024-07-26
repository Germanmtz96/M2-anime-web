import React from 'react'
import Card from 'react-bootstrap/Card';

function AnimeCard(props) {
    
  return (

  <Card className="all-animes-card" style={{ width: '10rem', margin: '10px' , backgroundColor: '#89b4fb' }} >

    <Card.Img className="all-animes-img" variant="top" src={props.eachAnime.images.jpg.image_url} style={{ height:'200px'}} />
    <Card.Title className='all-animes-title' style={{ height:'44px', overflow:'hidden', textDecoration:'none'}}>{props.eachAnime.title}</Card.Title> 


  </Card>



  )
}

export default AnimeCard