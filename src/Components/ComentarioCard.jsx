import React, { useState } from "react";
import EditComment from "../Components/EditComment";
import axios from "axios";


function ComentarioCard(props) {
  const [editIsVisible, setEditIsVisible] = useState(false);


  function handleEditButtom() {
    setEditIsVisible(!editIsVisible);
  }
  const handleDelete = () => {
    deleteComment()
  };
  
  const deleteComment = async()=>{
    const commentId = props.selectedComment.id
    await axios.delete(`http://localhost:5005/comments/${commentId}`,)
  }

  if (deleteComment === true) {
    return null;
  }
  console.log(props.selectedComment.mal_id)
  return (
    <div className="comment">
      <button onClick={handleEditButtom}>Edit</button>
      {editIsVisible && (
        <EditComment
          commentArr={props.commentArr}
          selectedComment={props.selectedComment}
          id={props.id}
        />
      )}
      <button onClick={handleDelete}>Delete</button>
      <p>Name: {props.selectedComment.name}</p>
      <p>Score: {props.selectedComment.score}</p>
      <p>Comment: {props.selectedComment.comment}</p>
    </div>
  );
}

export default ComentarioCard;
