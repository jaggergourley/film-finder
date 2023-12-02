// src/components/MovieCard.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie }) => {
  // Inline CSS for card styling
  const cardStyle = {
    width: "18rem",
    backgroundColor: "#1e1e1e", // Dark background color
    color: "#dcdcdc", // Light text color
    border: "none",
    marginBottom: "1rem",
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={movie.poster} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
