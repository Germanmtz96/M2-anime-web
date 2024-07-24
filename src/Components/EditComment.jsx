import axios from "axios";
import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditComment(props) {
  const [name, setName] = useState(props.selectedComment.name);
  const [score, setScore] = useState(props.selectedComment.score);
  const [comment, setComment] = useState(props.selectedComment.comment);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await editComment()
    props.getCommentArr()
    props.handleEditButtom()
   
  }
    const editComment = async ()=>{
      const editedComment = {
        mal_id: Number(props.selectedComment.mal_id),
        id: props.selectedComment.id,
        name,
        score,
        comment,
      };
    try {
      await axios.put(`http://localhost:5005/comments/${props.selectedComment.id}`, editedComment);
    } catch (error) {
      console.log(error);
    }
    }

  function handleName(event) {
    setName(event.target.value);
  }
  function handleScore(event) {
    setScore(event.target.value);
  }
  function handleComment(event) {
    setComment(event.target.value);
  }
    return (
    <div className="edit-comment" >
      <Form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems: 'center', flexWrap: 'wrap', marginTop:'20px', width:'98%'}}>

      <Form.Group className="mb-3" controlId="formNameEdit">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={handleName} style={{width:'180px', marginRight:'94px'}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formScoreEdit">
        <Form.Label>Score</Form.Label>
        <Form.Control min="0" max="10" type="number" name="score" value={score} onChange={handleScore} style={{width:'45px'}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCommentEdit">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" name="comment" value={comment} onChange={handleComment} style={{width:'320px'}}/>
        </Form.Group>
        <Button variant="outline-info" type="submit" style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>Submmit edit</Button>
      </Form>
    </div>
  );
}

export default EditComment;
