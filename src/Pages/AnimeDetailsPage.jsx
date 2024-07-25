import React from "react";
import AnimeDetailsCard from "../Components/AnimeDetailsCard";
import ComentarioCard from "../Components/ComentarioCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddComment from "../Components/AddComment";
import Button from 'react-bootstrap/Button';
import Recommendations from "../Components/Recommendations";

function AnimeDetailsPage() {
  const [theAnime, setTheAnime] = useState(null);
  const [commentArr, setCommentArr] = useState(null);
  const [recommendationArr, setRecommendationArr] = useState(null);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [recommendations, setRecommendations] = useState(false);
  const params = useParams();

  useEffect(() => {
    getAnime();
    getCommentArr();
  }, [params.id]);

  function handleAdd() {
    setFormIsOpen(!formIsOpen);
  }

  function handleRecommendation() {
    setRecommendations(!recommendations)
  }

  const getAnime = async () => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${params.id}`);
      setTheAnime(response.data.data);
      const response2 = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}/recommendations`)
      setRecommendationArr(response2.data.data)
      console.log(response2.data.data)
      console.log(recommendationArr)
    } catch (error) {
      console.log(error);
    }
  };
  const getCommentArr = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/comments`);
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
  if(recommendationArr === null){
    return <h3>Loading recomendations ...</h3>;
  }
  



  return (
    <div id="anime-details-container" style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center', width:'98%'}}>
      <AnimeDetailsCard theAnime={theAnime} />

      <Button variant="outline-info" onClick={handleAdd} style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb', marginLeft:'10px'}}>Add comment</Button >
      {formIsOpen && (
        <AddComment
          id={params.id}
          handleAdd={handleAdd}
          setCommentArr={setCommentArr}
          getCommentArr={getCommentArr}
        />
      )}
<<<<<<< HEAD

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
        <Button onClick={handleRecommendation} style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb', marginLeft:'10px', marginTop:'20px'}}>Recommendations</Button>
        {recommendations &&(
          <Recommendations 
          recommendationArr={recommendationArr}
          />
        )}
=======
      <div id="lista-comentarios">
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
>>>>>>> huanye
    </div>
  );
}

export default AnimeDetailsPage;
