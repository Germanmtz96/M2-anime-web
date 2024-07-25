import React, { useState } from "react";
import EditComment from "../Components/EditComment";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ComentarioCard(props) {
  const [editIsVisible, setEditIsVisible] = useState(false);

  const [openModal, setOpenModal] = useState(false)

  function handleEditButtom() {
    setEditIsVisible(!editIsVisible);
  }
  function handleDeleteButtom(){
    setOpenModal(!openModal)
  }
  const handleDelete = async () => {
    await deleteComment();
    props.getCommentArr();
  };

  const deleteComment = async () => {
    const commentId = props.selectedComment.id;
    await axios.delete(`${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`);
  };

  if (deleteComment === true) {
    return null;
  }
  
  return (
    <div className="comment" >
      
     
     
      <Card style={{ width: '24rem' ,  backgroundColor: '#89b4fb',width:'100%'}}>
      <Card.Header >
      <Button variant="outline-info" onClick={handleEditButtom} style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb', marginRight:'5px', marginTop: '10px'}}>Edit</Button>
      {editIsVisible && (
        <EditComment
          commentArr={props.commentArr}
          selectedComment={props.selectedComment}
          id={props.id}
          getCommentArr={props.getCommentArr}
          handleEditButtom={handleEditButtom}
        />
      )}
      <Button variant="outline-info" onClick={handleDeleteButtom} style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb', marginTop: '10px'}}>Delete</Button>
      {openModal && (<div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={handleDeleteButtom}>
          <Modal.Title>Delete comment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete this comment?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteButtom}>No</Button>
          <Button variant="primary" onClick={handleDelete}>Yes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>)}
      </Card.Header>
      <ListGroup variant="flush">
      <ListGroup.Item style={{backgroundColor: '#c2d8fb' , border:' 1px solid #5091fb'}}>Name: {props.selectedComment.name}</ListGroup.Item>
      <ListGroup.Item style={{backgroundColor: '#c2d8fb' , border:' 1px solid #5091fb'}}>Score: {props.selectedComment.score}</ListGroup.Item>
      <ListGroup.Item style={{backgroundColor: '#c2d8fb' , border:' 1px solid #5091fb'}}>Comment: {props.selectedComment.comment}</ListGroup.Item>
      </ListGroup>
      </Card>
    </div>
  );
}

export default ComentarioCard;
