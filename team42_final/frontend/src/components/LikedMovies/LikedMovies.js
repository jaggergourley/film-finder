// src/components/LikedMovies/LikedMovies.js

import React, { useContext, useState } from "react";
import { LikedMoviesContext } from "../../contexts/LikedMoviesContext";
import MovieCard from "../MovieCard/MovieCard";
import MovieDialog from "../MovieDialog/MovieDialog";
import "./LikedMovies.css";

// Component to display movies that a user has liked
const LikedMovies = () => {
  // Accessing likedMovies and unlikeMovie function from the context
  const { likedMovies, unlikeMovie } = useContext(LikedMoviesContext);
  // State to keep track of which movie is currently selected for detailed view
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Handles the event when a movie card is clicked
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  // Closes the movie dialog by resetting the selected movie to null
  const handleClose = () => {
    setSelectedMovie(null);
  };

  // Handles the deletion of a movie from the liked list and closes the dialog
  const handleDelete = (movieId) => {
    unlikeMovie(movieId); // Removes the movie from the liked movies list
    handleClose(); // Closes the dialog after deletion
  };

  return (
    <div>
      <h2>Liked Movies</h2> {/* Heading for the Liked Movies section */}
      <div className="movie-grid">
        {/* Conditionally render movies or a message if no movies are liked */}
        {likedMovies.length > 0 ? (
          likedMovies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onClick={() => handleMovieClick(movie)} // Assign onClick event to each movie card
            />
          ))
        ) : (
          <p>No liked movies yet.</p> // Message displayed when there are no liked movies
        )}
      </div>
      {/* Render MovieDialog if a movie is selected */}
      {selectedMovie && (
        <MovieDialog
          movie={selectedMovie}
          onClose={handleClose} // Function to close the dialog
          onDelete={handleDelete} // Function to handle movie deletion
        />
      )}
    </div>
  );
};

export default LikedMovies;
