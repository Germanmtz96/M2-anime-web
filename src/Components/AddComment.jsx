import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function AddComment(props) {
  // props = id={params.id} handleAdd()  

  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");
  const navigate = useNavigate
  

  function handleName(event) {
    setName(event.target.value);
  }
  function handleScore(event) {
    setScore(event.target.value);
  }
  function handleComment(event) {
    setComment(event.target.value);
  }

  const handleSubmit=async (event)=> {
    event.preventDefault();
    await postComment();
    props.handleAdd();
    props.getCommentArr();

  }
  const postComment = async () => {
    const newComment = {
      mal_id: Number(props.id),
      id: Math.floor(Math.random() * 1000000),
      name,
      score,
      comment,
    };
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/comments/`, newComment);
    } catch (error) {
      console.log(error);
      navigate("/error")
    }
  };

  return (
      <Form onSubmit={handleSubmit} className="formularioAddComment" style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems: 'center', flexWrap: 'wrap', marginTop:'20px', width:'98%'}}>
      <Form.Group className="mb-3" controlId="formNameAdd">
        <Form.Label >User</Form.Label>
        <Form.Control onChange={handleName} type="text" name="name" value={name} placeholder="Enter name" style={{width:'150px', marginRight:'70px'}}/>
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formScoreAdd">
        <Form.Label>Score</Form.Label>
        <Form.Control onChange={handleScore} min="0" max="10" type="number" name="score" value={score} placeholder="Enter Score" style={{width:'70px'}}/>
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formCommentAdd">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" className="textarea" rows={3} onChange={handleComment} type="text" name="comment" value={comment} placeholder="Enter Comment"/>
      </Form.Group>
        
        <Button variant="outline-info" type="submit" style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb', marginBottom:'40px', marginLeft:'10px'}}>Submit edit</Button >
      </Form>
  );
}

export default AddComment;
