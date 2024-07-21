import React, { useState } from 'react'
import EditComment from '../Components/EditComment'

function ComentarioCard() {
  const [editIsVisible, setEditIsVisible] = useState(false)
  const [deleteComment, setDeleteComment] = useState(false)


  function handleEditButtom (){
    setEditIsVisible(!editIsVisible)
  } 
  const handleDelete =()=>{
    alert("do you really want to delete  this comment?")
    
    setDeleteComment(true)
  }

  if (deleteComment === true){
    return null
  }

  return (
    <div className='comment'>
      ComentarioCard
      <button onClick={handleEditButtom}>Edit</button>
      {editIsVisible  && <EditComment/>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ComentarioCard