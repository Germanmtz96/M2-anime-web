import React, { useState } from 'react'

function AnimeDetailsCard() {

  const [isMoreVisible,setIsMoreVisible] = useState(false)

  function handleMore (){
    setIsMoreVisible(!isMoreVisible)
  }

  return (
    <div className='anime-details'>
      AnimeDetailsCard
    <img src="" alt="" />
    <h3>Name: </h3>
    <p>Score: </p>


      <button onClick={handleMore}>More details</button>
      {isMoreVisible && <article>
        <p>Characters: </p>
        <p>Studio: </p>
        <p>Release date: </p>
      </article>}
      
    </div>
  )
}

export default AnimeDetailsCard