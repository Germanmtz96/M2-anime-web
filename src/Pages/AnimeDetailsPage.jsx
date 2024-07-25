import React from "react";
import AnimeDetailsCard from "../Components/AnimeDetailsCard";
import ComentarioCard from "../Components/ComentarioCard";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AddComment from "../Components/AddComment";
import Button from "react-bootstrap/Button";
import Recommendations from "../Components/Recommendations";
import { BounceLoader } from "react-spinners";
function AnimeDetailsPage() {
  const [theAnime, setTheAnime] = useState(null);
  const [commentArr, setCommentArr] = useState(null);
  const [recommendationArr, setRecommendationArr] = useState(null);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [recommendations, setRecommendations] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getAnime();
    getCommentArr();
  }, [params.id]);

  function handleAdd() {
    setFormIsOpen(!formIsOpen);
  }

  function handleRecommendation() {
    setRecommendations(!recommendations);
  }

  const getAnime = async () => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${params.id}`
      );
      setTheAnime(response.data.data);
      const response2 = await axios.get(
        `https://api.jikan.moe/v4/anime/${params.id}/recommendations`
      );
      setRecommendationArr(response2.data.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };
  const getCommentArr = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/comments`
      );
      setCommentArr(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  if (theAnime === null || commentArr === null || recommendationArr === null) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <BounceLoader className="spinner" size={150} aria-label="Loading Spinner" />
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div
      id="anime-details-container"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap:'wrap',
        textAlign: "center",
        justifyContent: "start",
        width: "100%",
      }}
    >
      <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
      <AnimeDetailsCard theAnime={theAnime} />
      <Button
      className="details-btn"
        onClick={handleRecommendation}
        style={{
          backgroundColor: "#c2d8fb",
          color: "black",
          border: "1px solid #5091fb",
          marginLeft: "14px",
          marginBottom:'20px'
        }}
      >
        Recommendations
      </Button>
      {recommendations && (
        <Recommendations recommendationArr={recommendationArr} />
      )}
      </div>
      <div className="caja-comentarios">
      <Button
      className="details-btn"
        variant="outline-info"
        onClick={handleAdd}
        style={{
          backgroundColor: "#c2d8fb",
          color: "black",
          border: "1px solid #5091fb",
          marginLeft: "10px",
        }}
      >
        Add comment
      </Button>
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
    </div>
  );
}

export default AnimeDetailsPage;
