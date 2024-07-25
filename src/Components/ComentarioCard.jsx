import React, { useState } from "react";
import EditComment from "../Components/EditComment";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Modal } from "bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Button from 'react-bootstrap/Button';

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
  
  return (
<<<<<<< HEAD
    <div className="comment" >
      
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <Button
              variant="outline-info"
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </Button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <Button
              variant="outline-info"
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </Button>
              <Button variant="outline-info" type="button" className="btn btn-primary">
                Save changes
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Card style={{ width: '24rem' ,  backgroundColor: '#89b4fb',width:'100%'}}>
      <Card.Header >
      <Button variant="outline-info" onClick={handleEditButtom} style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb', marginRight:'5px', marginTop: '10px'}}>Edit</Button>
=======
    <div className="comment">
      {/* edit */}
      <button onClick={handleEditButtom}>Edit</button>
>>>>>>> huanye
      {editIsVisible && (
        <EditComment
          commentArr={props.commentArr}
          selectedComment={props.selectedComment}
          id={props.id}
          getCommentArr={props.getCommentArr}
          handleEditButtom={handleEditButtom}
        />
      )}
<<<<<<< HEAD
      <Button variant="outline-info" onClick={handleDelete} style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb', marginTop: '10px'}}>Delete</Button>
      </Card.Header>
      <ListGroup variant="flush">
      <ListGroup.Item style={{backgroundColor: '#c2d8fb' , border:' 1px solid #5091fb'}}>Name: {props.selectedComment.name}</ListGroup.Item>
      <ListGroup.Item style={{backgroundColor: '#c2d8fb' , border:' 1px solid #5091fb'}}>Score: {props.selectedComment.score}</ListGroup.Item>
      <ListGroup.Item style={{backgroundColor: '#c2d8fb' , border:' 1px solid #5091fb'}}>Comment: {props.selectedComment.comment}</ListGroup.Item>
      </ListGroup>
      </Card>
=======
      {/* delete */}
      <button onClick={handleDelete}>Delete</button>
      {/* delete modal */}

      {/* coment content*/}
      <div id="single-comment">
        <p>Name: {props.selectedComment.name}</p>
        <p>Score: {props.selectedComment.score}</p>
        <p id="comment-comment">Comment: {props.selectedComment.comment}</p>
      </div>
>>>>>>> huanye
    </div>
  );
}

export default ComentarioCard;
