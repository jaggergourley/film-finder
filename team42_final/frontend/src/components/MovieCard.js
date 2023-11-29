// src/components/MovieCard.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={movie.Poster_Link}
        className="card-img-top"
        alt={movie.Series_Title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.Series_Title}</h5>
        <p className="card-text">{movie.Overview}</p>
        {/* Add more movie details */}
      </div>
    </div>
  );
};

export default MovieCard;
