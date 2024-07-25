import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddComment(props) {
  // props = id={params.id} handleAdd()  

  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

  

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
      await axios.post(`http://localhost:5005/comments/`, newComment);
    } catch (error) {
      console.log(error);
    }
  };

  return (
<<<<<<< HEAD
      <Form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems: 'center', flexWrap: 'wrap', marginTop:'20px', width:'98%'}}>
      <Form.Group className="mb-3" controlId="formNameAdd">
        <Form.Label >Usuario</Form.Label>
        <Form.Control onChange={handleName} type="text" name="name" value={name} placeholder="Enter name" style={{width:'240px', marginRight:'94px'}}/>
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formScoreAdd">
        <Form.Label>Score</Form.Label>
        <Form.Control onChange={handleScore} min="0" max="10" type="number" name="score" value={score} placeholder="Enter Score" style={{width:'45px'}}/>
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formCommentAdd">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleComment} type="text" name="comment" value={comment} placeholder="Enter Comment" style={{width:'380px'}}/>
      </Form.Group>
        
        <Button variant="outline-info" type="submit" style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb', marginBottom:'40px'}}>Submmit edit</Button >
      </Form>
=======
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          placeholder="	Name"
        />

        <input
          placeholder="Score"
          type="number"
          min="0"
          max="10"
          name="score"
          value={score}
          onChange={handleScore}
        />
        <input
          placeholder="Comment"
          type="text"
          name="comment"
          value={comment}
          onChange={handleComment}
        />
        <button type="submit">Submmit comment</button>
      </form>
    </div>
>>>>>>> huanye
  );
}

export default AddComment;
