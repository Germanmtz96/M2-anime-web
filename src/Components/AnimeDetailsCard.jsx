import React, { useState } from "react";

function AnimeDetailsCard(props) {
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  function handleMore() {
    setIsMoreVisible(!isMoreVisible);
  }

  return (
    <div className="anime-details">
      <img src={props.theAnime.images.jpg.image_url} alt="" />
      <h3>Name: {props.theAnime.title} </h3>
      <button onClick={handleMore}>More details</button>
      {isMoreVisible && (
        <article >
          <p>Episodes: {props.theAnime.episodes} </p>
          <p>Score: {props.theAnime.score} </p>
          <p>Release year: {props.theAnime.year} </p>
          <p>Synopsis: {props.theAnime.synopsis}</p>
          <p>Background: {props.theAnime.background}</p>
        </article>
      )}
    </div>
  );
}

export default AnimeDetailsCard;
