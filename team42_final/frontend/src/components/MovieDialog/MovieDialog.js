// src/components/MovieDialog/MovieDialog.js

// Import React and the component's CSS file
import React from "react";
import "./MovieDialog.css";

// MovieDialog component for displaying detailed movie information in a dialog
const MovieDialog = ({ movie, onClose, onDelete }) => {
  // Return null if no movie is provided
  if (!movie) return null;

  // Handle delete action and close the dialog afterwards
  const handleDelete = () => {
    onDelete(movie._id);
    onClose();
  };

  // Convert duration from minutes to hour:minute format
  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  };

  // Render the dialog with movie details
  return (
    <div className="movie-dialog-backdrop">
      <div className="movie-dialog-content">
        {/* Movie poster */}
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-dialog-image"
        />
        {/* Movie information */}
        <div className="movie-dialog-info">
          {/* Display movie title and details */}
          <h2>{movie.title}</h2>
          {/* Other movie attributes */}
          <p>
            <strong>Description:</strong> {movie.description}
          </p>
          <p>
            <strong>Director:</strong> {movie.director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.actors}
          </p>
          <p>
            <strong>Year:</strong> {movie.year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Duration:</strong> {formatDuration(movie.duration)}
          </p>
          <p>
            <strong>Rating:</strong> {movie.rating}/10
          </p>
          {/* Buttons for delete and close actions */}
          <button onClick={handleDelete} className="movie-dialog-button delete">
            Delete Movie
          </button>
          <button onClick={onClose} className="movie-dialog-button close">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDialog;
