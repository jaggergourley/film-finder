// src/components/MovieCard/MovieCard.js

// Import React and context hook
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LikedMoviesContext } from "../../contexts/LikedMoviesContext";
import "./MovieCard.css";

// MovieCard component for displaying individual movie details
const MovieCard = ({ movie, onClick }) => {
  // Destructure necessary functions and state from context
  const { likeMovie, unlikeMovie, likedMovies } =
    useContext(LikedMoviesContext);
  // Check if the current movie is liked
  const isLiked = likedMovies.some((m) => m._id === movie._id);

  // Handle like/unlike action
  const handleLike = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling to parent elements
    if (isLiked) {
      unlikeMovie(movie._id); // Unlike the movie if it's already liked
    } else {
      likeMovie(movie); // Like the movie if it's not liked yet
    }
  };

  // Render the movie card
  return (
    <div className="card movie-card" onClick={() => onClick(movie)}>
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
      {/* Like/Unlike button with dynamic styling and text */}
      <button onClick={handleLike} className={isLiked ? "unlike" : "like"}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default MovieCard;
