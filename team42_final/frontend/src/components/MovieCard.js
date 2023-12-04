// src/components/MovieCard.js

import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LikedMoviesContext } from "../contexts/LikedMoviesContext";

const MovieCard = ({ movie, onClick }) => {
  const { likeMovie, unlikeMovie, likedMovies } =
    useContext(LikedMoviesContext);
  const isLiked = likedMovies.some((m) => m._id === movie._id);

  // Inline CSS for card styling
  const cardStyle = {
    width: "18rem",
    backgroundColor: "#1e1e1e", // Dark background color
    color: "#dcdcdc", // Light text color
    border: "1px solid #555", // Subtle outline
    marginBottom: "1rem",
    cursor: "pointer", // Change cursor to indicate it's clickable
    borderRadius: "5px", // Add rounded corners
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)", // Add a subtle shadow
    position: "relative", // Needed for absolute positioning of the button
  };

  const buttonStyle = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    backgroundColor: isLiked ? "#ff4757" : "#2ed573", // Red for unlike, Green for like
    color: "white",
    border: "none",
    borderRadius: "20px",
    padding: "5px 10px",
    cursor: "pointer",
    outline: "none",
  };

  const handleLike = (e) => {
    e.stopPropagation(); // Prevent triggering the card's onClick
    if (isLiked) {
      unlikeMovie(movie._id);
    } else {
      likeMovie(movie);
    }
  };

  // // Function to format duration from minutes to hour:minute format
  // const formatDuration = (duration) => {
  //   const hours = Math.floor(duration / 60);
  //   const minutes = duration % 60;
  //   return `${hours}h ${minutes}m`;
  // };

  return (
    <div className="card" style={cardStyle} onClick={() => onClick(movie)}>
      <img src={movie.poster} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          <strong>Description:</strong> {movie.description}
        </p>
        <p className="card-text">
          <strong>Rating:</strong> {movie.rating}/10
        </p>
      </div>
      <button onClick={handleLike} style={buttonStyle}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default MovieCard;
