// src/components/MovieCard.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie, onClick }) => {
  // Inline CSS for card styling
  const cardStyle = {
    width: "18rem",
    backgroundColor: "#1e1e1e", // Dark background color
    color: "#dcdcdc", // Light text color
    border: "1px solid #555", // Subtle outline
    marginBottom: "1rem",
    cursor: "pointer", // Change cursor to indicate it's clickable
    borderRadius: "5px", // Optional: Add rounded corners
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)", // Optional: Add a subtle shadow
  };

  // Function to format duration from minutes to hour:minute format
  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="card" style={cardStyle} onClick={() => onClick(movie)}>
      <img src={movie.poster} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          <strong>Description:</strong> {movie.description}
        </p>
        <p className="card-text">
          <strong>Genre:</strong> {movie.genre}
        </p>
        <p className="card-text">
          <strong>Rating:</strong> {movie.rating}/10
        </p>
        <p className="card-text">
          <strong>Year:</strong> {movie.year}
        </p>
        <p className="card-text">
          <strong>Runtime:</strong> {formatDuration(movie.duration)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
