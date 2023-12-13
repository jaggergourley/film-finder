// src/components/LikedMovies/LikedMovies.js
/*
LikedMovies component allows users to view and manage their favorite movies.
It interacts with the LikedMoviesContext to access and modify the user's liked movies. 
*/

import React, { useContext, useState } from "react";
import axios from "axios";
import { LikedMoviesContext } from "../../contexts/LikedMoviesContext";
import MovieCard from "../MovieCard/MovieCard";
import MovieDialog from "../MovieDialog/MovieDialog";
import "./LikedMovies.css";

const LikedMovies = () => {
  // Use the LikedMoviesContext to access likedMovies state and update functions
  const { likedMovies, unlikeMovie, updateLikedMovie } =
    useContext(LikedMoviesContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Opens a dialog with movie details when a movie is clicked.
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  // Handles the closing of the MovieDialog, ensuring the UI remains responsive.
  const handleClose = () => {
    setSelectedMovie(null);
  };

  // Manages the deletion of a liked movie, both in the context and on the server.
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

  // Updates the liked movie list when a movie's details are changed.
  const handleMovieUpdate = (updatedMovie) => {
    updateLikedMovie(updatedMovie); // Update the movie in the context
  };

  // Renders the component, displaying the list of liked movies.
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
