import React from 'react'

function AnimeCard(props) {
  return (
    <div className='anime-card'>
      
    <img src={props.eachAnime.images.jpg.image_url}/>
    <h2>{props.eachAnime.title}</h2>
    </div>
  )
}

export default AnimeCard