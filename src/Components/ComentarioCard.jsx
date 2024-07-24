import React, { useState } from "react";
import EditComment from "../Components/EditComment";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Modal } from "bootstrap";

function ComentarioCard(props) {
  const [editIsVisible, setEditIsVisible] = useState(false);

  function handleEditButtom() {
    setEditIsVisible(!editIsVisible);
  }
  const handleDelete = async () => {
    await deleteComment();
    props.getCommentArr();
  };

  const deleteComment = async () => {
    const commentId = props.selectedComment.id;
    await axios.delete(`http://localhost:5005/comments/${commentId}`);
  };

  if (deleteComment === true) {
    return null;
  }
  console.log(props.selectedComment.mal_id);
  return (
    <div className="comment">
      {/* edit */}
      <button onClick={handleEditButtom}>Edit</button>
      {editIsVisible && (
        <EditComment
          commentArr={props.commentArr}
          selectedComment={props.selectedComment}
          id={props.id}
          getCommentArr={props.getCommentArr}
          handleEditButtom={handleEditButtom}
        />
      )}
      {/* delete */}
      <button onClick={handleDelete}>Delete</button>
      {/* delete modal */}

      {/* coment content*/}
      <div id="single-comment">
        <p>Name: {props.selectedComment.name}</p>
        <p>Score: {props.selectedComment.score}</p>
        <p id="comment-comment">Comment: {props.selectedComment.comment}</p>
      </div>
    </div>
  );
}

export default ComentarioCard;
