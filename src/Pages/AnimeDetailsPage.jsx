import React from 'react'
import ComentarioCard from "../Components/ComentarioCard"

import AnimeDetailsCard from "../Components/AnimeDetailsCard"


function AnimeDetailsPage() {
  return (
    <div className='anime-details'>
      <AnimeDetailsCard/>
      <ComentarioCard/>
    </div>
  )
}

export default AnimeDetailsPage