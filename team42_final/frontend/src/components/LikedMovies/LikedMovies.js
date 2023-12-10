// src/components/LikedMovies/LikedMovies.js

import React, { useContext, useState } from "react";
import axios from "axios";
import { LikedMoviesContext } from "../../contexts/LikedMoviesContext";
import MovieCard from "../MovieCard/MovieCard";
import MovieDialog from "../MovieDialog/MovieDialog";
import "./LikedMovies.css";

const LikedMovies = () => {
  const { likedMovies, unlikeMovie, updateLikedMovie } =
    useContext(LikedMoviesContext); // Assuming updateLikedMovie is added to the context
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  const handleDelete = async (movieId) => {
    try {
      // Send DELETE request to the server
      await axios.delete(`http://localhost:5000/movies/${movieId}`);
      // Remove the movie from the liked movies list
      unlikeMovie(movieId);
    } catch (error) {
      console.error("Error deleting movie from the server", error);
    }
    handleClose();
  };

  const handleMovieUpdate = (updatedMovie) => {
    updateLikedMovie(updatedMovie); // Update the movie in the context
  };

  return (
    <div>
      <h2>Liked Movies</h2>
      <div className="movie-grid">
        {likedMovies.length > 0 ? (
          likedMovies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onClick={() => handleMovieClick(movie)}
            />
          ))
        ) : (
          <p>No liked movies yet.</p>
        )}
      </div>
      {selectedMovie && (
        <MovieDialog
          movie={selectedMovie}
          onClose={handleClose}
          onDelete={handleDelete}
          onUpdate={handleMovieUpdate}
        />
      )}
    </div>
  );
};

export default LikedMovies;
