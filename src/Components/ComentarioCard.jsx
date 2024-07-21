import React, { useState } from 'react'
import EditComment from '../Components/EditComment'

function ComentarioCard() {
  const [editIsVisible, setEditIsVisible] = useState(false)

  function handleEditButtom (){
    setEditIsVisible(!editIsVisible)
  } 

  return (
    <div className='comment'>
      ComentarioCard
      <button onClick={handleEditButtom}>Edit</button>
      {editIsVisible  && <EditComment/>}
    </div>
  )
}

export default ComentarioCard