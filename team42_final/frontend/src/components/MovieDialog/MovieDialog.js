// src/components/MovieDialog/MovieDialog.js
/*
MovieDialog provides a detailed view of a selected movie. 
It includes options for editing, deleting, or closing the dialog, enhancing the user experience with interactive capabilities.
*/

import React, { useState } from "react";
import EditMovieDialog from "../EditMovieDialog/EditMovieDialog";
import "./MovieDialog.css";

const MovieDialog = ({ movie, onClose, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(movie);

  // Return null if no movie is provided
  if (!movie) return null;

  // Handle the various actions like delete, edit, and update within the dialog.
  const handleDelete = () => {
    onDelete(movie._id);
    onClose();
  };

  // Function to open the edit dialog
  const openEditDialog = () => {
    setIsEditing(true);
  };

  // Function to close the edit dialog
  const closeEditDialog = () => {
    setIsEditing(false);
  };

  // Function to handle movie update
  const handleMovieUpdated = (updatedMovie) => {
    setCurrentMovie(updatedMovie); // Update the current movie
    setIsEditing(false); // Close edit dialog
  };

  // Convert duration from minutes to hour:minute format
  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  };

  // Render the dialog with comprehensive movie details, along with interactive buttons.
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
          {/* Buttons for edit, delete, close actions */}
          <button onClick={openEditDialog} className="movie-dialog-button edit">
            Edit Movie
          </button>
          <button onClick={handleDelete} className="movie-dialog-button delete">
            Delete Movie
          </button>
          <button onClick={onClose} className="movie-dialog-button close">
            Close
          </button>
          {/* Render EditMovieDialog when editing is true */}
          {isEditing && (
            <EditMovieDialog
              movie={currentMovie}
              onClose={closeEditDialog}
              onUpdated={(updatedMovie) => {
                handleMovieUpdated(updatedMovie);
                onUpdate(updatedMovie); // Propagate the update to the parent component
              }}
              onSuccessfulUpdate={onClose} // Close the MovieDialog on successful update
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDialog;
