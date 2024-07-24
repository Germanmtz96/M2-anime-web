import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

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
        <button type="submit">Submmit edit</button>
      </form>
    </div>
  );
}

export default AddComment;
