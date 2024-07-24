import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UltimosComentarios() {
const [comentarioArr, setComentarioArr]= useState(null)

useEffect(()=>{
  getComentarioArr()
},[])


const getComentarioArr = async ()=>{
  const response = await axios.get("http://localhost:5005/comments")
  setComentarioArr(response.data)
  setComentarioArr(comentarioArr.toSpliced(0,5))
  console.log(comentarioArr)
}


if (comentarioArr === null){
  return <p>"Loading ..."</p>
}  
  return (
    <div>
      {comentarioArr.map(e=>{
        return(
          <div id={e.id}>
            <p>Anime title: {e.title}</p>
            <p>Commenter: {e.name}</p>
            <p>score given: {e.score}</p>
            <p>comment: {e.comment}</p>
          </div>

        )
      })}

    </div>
  )
}

export default UltimosComentarios