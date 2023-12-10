// src/components/EditMovieDialog/EditMovieDialog.js

import React, { useState } from "react";
import axios from "axios";
import "./EditMovieDialog.css";

const EditMovieDialog = ({ movie, onClose, onUpdated, onSuccessfulUpdate }) => {
  const [editedMovie, setEditedMovie] = useState({ ...movie });
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    setEditedMovie({ ...editedMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/movies/${movie._id}`,
        editedMovie
      );
      setFeedbackMessage("Movie updated successfully!");
      onUpdated(response.data);
      onSuccessfulUpdate(); // Close the MovieDialog
    } catch (error) {
      console.error("Error updating movie", error);
      setFeedbackMessage("Failed to update movie.");
    }
  };

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

          <button type="submit">Update Movie</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
        {feedbackMessage && <p>{feedbackMessage}</p>}
      </div>
    </div>
  );
};

export default EditMovieDialog;
