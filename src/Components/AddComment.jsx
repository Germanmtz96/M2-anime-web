import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function AddComment(props) {
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

  function handleSubmit(event) {
    event.preventDefault()
    postComment()
  }
  const postComment = async ()=>{
    const newComment = {
      mal_id: Number(props.id),
      id: Math.floor(Math.random*1000000),
      name,
      score,
      comment,
    };
    try {
      await axios.post(`http://localhost:5005/comments/`,newComment)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <label>Score:</label>
        <input
          type="number"
          name="score"
          value={score}
          onChange={handleScore}
        />
        <label>Comment:</label>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={handleComment}
        />
        <button type="submit">Submmit edit</button>
      </form>
    </div>
  );
}

export default AddComment;
