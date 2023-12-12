// src/components/AddMovie/AddMovie.js

import React, { useState } from "react";
import axios from "axios";
import "./AddMovie.css";

const AddMovie = () => {
  // State to manage form inputs and feedback message
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    director: "",
    actors: "",
    year: "",
    genre: "",
    duration: "",
    rating: "",
    poster: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // Function to update the form inputs as they change
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to add a new movie
      await axios.post(`http://localhost:5000/movies`, newMovie);
      setFeedbackMessage("Movie added successfully!");
      // Reset the form after submission
      setNewMovie({
        title: "",
        description: "",
        director: "",
        actors: "",
        year: "",
        genre: "",
        duration: "",
        rating: "",
        poster: "",
      });
    } catch (error) {
      console.error("Error adding movie", error);
      setFeedbackMessage("Failed to add movie.");
    }
  };

  return (
    <div className="add-movie-container">
      <h1>Add New Movie</h1>
      <form onSubmit={handleSubmit}>
        {/* Title input field */}
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
          placeholder="Title"
        />

        {/* Description input field */}
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={newMovie.description}
          onChange={handleChange}
          placeholder="Description"
        />

        {/* Director input field */}
        <label htmlFor="director">Director</label>
        <input
          type="text"
          name="director"
          value={newMovie.director}
          onChange={handleChange}
          placeholder="Director"
        />

        {/* Actors input field */}
        <label htmlFor="actors">Actors</label>
        <input
          type="text"
          name="actors"
          value={newMovie.actors}
          onChange={handleChange}
          placeholder="Actors"
        />

        {/* Year input field */}
        <label htmlFor="year">Year</label>
        <input
          type="number"
          name="year"
          value={newMovie.year}
          onChange={handleChange}
          placeholder="Year"
        />

        {/* Genre input field */}
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          name="genre"
          value={newMovie.genre}
          onChange={handleChange}
          placeholder="Genre"
        />

        {/* Duration input field */}
        <label htmlFor="duration">Duration (minutes)</label>
        <input
          type="number"
          name="duration"
          value={newMovie.duration}
          onChange={handleChange}
          placeholder="Duration (in minutes)"
        />

        {/* Rating input field */}
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          step="0.1"
          name="rating"
          value={newMovie.rating}
          onChange={handleChange}
          placeholder="Rating"
        />

        {/* Poster URL input field */}
        <label htmlFor="poster">Poster URL</label>
        <input
          type="text"
          name="poster"
          value={newMovie.poster}
          onChange={handleChange}
          placeholder="Poster URL"
        />

        {/* Button to submit the form */}
        <button type="submit">Add Movie</button>
      </form>

      {/* Display feedback message after form submission */}
      {feedbackMessage && <p>{feedbackMessage}</p>}
    </div>
  );
};

export default AddMovie;
