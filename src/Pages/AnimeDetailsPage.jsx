import React from "react";
import AnimeDetailsCard from "../Components/AnimeDetailsCard";
import ComentarioCard from "../Components/ComentarioCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddComment from "../Components/AddComment";

function AnimeDetailsPage() {
  const [theAnime, setTheAnime] = useState(null);
  const [commentArr, setCommentArr] = useState(null);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const params = useParams();

  useEffect(() => {
    getAnime();
    getCommentArr();
  }, [params.id]);

  function handleAdd() {
    setFormIsOpen(!formIsOpen);
  }
  const getAnime = async () => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${params.id}`
      );
      setTheAnime(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCommentArr = async () => {
    try {
      const response = await axios.get("http://localhost:5005/comments");
      setCommentArr(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (theAnime === null) {
    return <h3> Loading ... </h3>;
  }
  if (commentArr === null) {
    return <h3>Loading comments ...</h3>;
  }
  console.log(commentArr);

  return (
    <div className="anime-details">
      <AnimeDetailsCard theAnime={theAnime} />

      <button onClick={handleAdd}>Add comment</button>
      {formIsOpen && (
        <AddComment
          id={params.id}
          handleAdd={handleAdd}
          setCommentArr={setCommentArr}
          getCommentArr={getCommentArr}
        />
      )}

      {commentArr
        .filter((eachComment) => eachComment.mal_id === parseInt(params.id))
        .map((selectedComment) => {
          return (
            <ComentarioCard
              key={selectedComment.id}
              selectedComment={selectedComment}
              commentArr={commentArr}
              id={params.id}
              getCommentArr={getCommentArr}
            />
          );
        })}
    </div>
  );
}

export default AnimeDetailsPage;
