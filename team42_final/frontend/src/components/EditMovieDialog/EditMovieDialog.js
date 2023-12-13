// src/components/EditMovieDialog/EditMovieDialog.js
/*
  EditMovieDialog component allows users to edit the details of an existing movie.
  It is invoked from the MovieDialog component and uses a form to capture user inputs.
*/

import React, { useState } from "react";
import axios from "axios";
import "./EditMovieDialog.css";

const EditMovieDialog = ({ movie, onClose, onUpdated, onSuccessfulUpdate }) => {
  // State to manage the edited movie data and feedback message
  const [editedMovie, setEditedMovie] = useState({ ...movie });
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // Function to update the edited movie data as it changes
  const handleChange = (e) => {
    setEditedMovie({ ...editedMovie, [e.target.name]: e.target.value });
  };

  // Handles form submission to update the movie. Utilizes PUT request and updates parent component state.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a PUT request to update the movie
      const response = await axios.put(
        `http://localhost:5000/movies/${movie._id}`,
        editedMovie
      );
      setFeedbackMessage("Movie updated successfully!");
      // Trigger the onUpdated callback with the updated movie data
      onUpdated(response.data);
      // Close the MovieDialog after successful update
      onSuccessfulUpdate();
    } catch (error) {
      console.error("Error updating movie", error);
      setFeedbackMessage("Failed to update movie.");
    }
  };

  // Renders a modal dialog with a form for editing movie details.
  return (
    <div className="edit-movie-dialog-backdrop">
      <div className="edit-movie-dialog-content">
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={editedMovie.title}
            onChange={handleChange}
            placeholder="Title"
          />

          {/* Description */}
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={editedMovie.description}
            onChange={handleChange}
            placeholder="Description"
          />

          {/* Director */}
          <label htmlFor="director">Director</label>
          <input
            type="text"
            name="director"
            value={editedMovie.director}
            onChange={handleChange}
            placeholder="Director"
          />

          {/* Actors */}
          <label htmlFor="actors">Actors</label>
          <input
            type="text"
            name="actors"
            value={editedMovie.actors}
            onChange={handleChange}
            placeholder="Actors"
          />

          {/* Year */}
          <label htmlFor="year">Year</label>
          <input
            type="number"
            name="year"
            value={editedMovie.year}
            onChange={handleChange}
            placeholder="Year"
          />

          {/* Genre */}
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            value={editedMovie.genre}
            onChange={handleChange}
            placeholder="Genre"
          />

          {/* Duration */}
          <label htmlFor="duration">Duration (minutes)</label>
          <input
            type="number"
            name="duration"
            value={editedMovie.duration}
            onChange={handleChange}
            placeholder="Duration (in minutes)"
          />

          {/* Rating */}
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            value={editedMovie.rating}
            onChange={handleChange}
            placeholder="Rating"
          />

          {/* Poster URL */}
          <label htmlFor="poster">Poster URL</label>
          <input
            type="text"
            name="poster"
            value={editedMovie.poster}
            onChange={handleChange}
            placeholder="Poster URL"
          />

          {/* Buttons for updating and canceling */}
          <button type="submit">Update Movie</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
        {/* Display feedback message after form submission */}
        {feedbackMessage && <p>{feedbackMessage}</p>}
      </div>
    </div>
  );
};

export default EditMovieDialog;
