import axios from "axios";
import React, { useEffect, useState } from "react";

function EditComment(props) {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    editComment()
   
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
    <div className="edit-comment">
      EditComment
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

export default EditComment;
