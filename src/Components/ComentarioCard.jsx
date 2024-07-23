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
      <button onClick={handleDelete}>Delete</button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <p>Name: {props.selectedComment.name}</p>
      <p>Score: {props.selectedComment.score}</p>
      <p>Comment: {props.selectedComment.comment}</p>
    </div>
  );
}

export default ComentarioCard;
