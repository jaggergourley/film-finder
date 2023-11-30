// src/components/MovieCard.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={movie.poster} // Using the poster URL from your movie data
        className="card-img-top"
        alt={movie.title} // Using the title for the alt text
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        {/* You can add more movie details here */}
      </div>
    </div>
  );
};

export default MovieCard;
