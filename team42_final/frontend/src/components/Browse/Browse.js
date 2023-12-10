// src/components/Browse/Browse.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import MovieDialog from "../MovieDialog/MovieDialog";
import "./Browse.css";

// Browse component for displaying movie listings
const Browse = () => {
  // State to store the list of movies
  const [movies, setMovies] = useState([]);

  // State for sorting criteria, with default values
  const [sortCriteria, setSortCriteria] = useState({ field: "", order: "" });

  // Fetch movies whenever sortCriteria changes
  useEffect(() => {
    fetchSortedMovies();
  }, [sortCriteria]);

  // Function to fetch movies with sorting parameters
  const fetchSortedMovies = async () => {
    try {
      // Send a GET request with sort parameters
      const response = await axios.get("http://localhost:5000/movies", {
        params: { sortBy: sortCriteria.field, order: sortCriteria.order },
      });
      setMovies(response.data); // Update state with fetched movies
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  // State for currently selected movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Function to open the dialog with movie details
  const openDialog = (movie) => {
    setSelectedMovie(movie);
  };

  // Function to close the movie details dialog
  const closeDialog = () => {
    setSelectedMovie(null);
  };

  // Function to update sorting criteria based on user selection
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortCriteria({
      field: value.split("-")[0],
      order: value.split("-")[1],
    });
  };

  // Function to handle movie deletion
  const handleDelete = async (movieId) => {
    try {
      await axios.delete(`http://localhost:5000/movies/${movieId}`);
      // Update the movies state by filtering out the deleted movie
      setMovies(movies.filter((movie) => movie._id !== movieId));
    } catch (error) {
      console.error("Error deleting movie", error);
    }
  };

  // Function to handle movie update
  const handleMovieUpdate = (updatedMovie) => {
    // Update the movies array with the updated movie data
    setMovies(
      movies.map((movie) =>
        movie._id === updatedMovie._id ? updatedMovie : movie
      )
    );
  };

  // Render the Browse component
  return (
    <div>
      {/* Dropdown for sorting movies */}
      <div>
        <select className="dropdown" onChange={handleSortChange}>
          {/* Sorting options */}
          <option value="">Sort By</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          <option value="year-asc">Year (Oldest First)</option>
          <option value="year-desc">Year (Newest First)</option>
          <option value="duration-asc">Runtime (Shortest First)</option>
          <option value="duration-desc">Runtime (Longest First)</option>
          <option value="rating-asc">Rating (Lowest First)</option>
          <option value="rating-desc">Rating (Highest First)</option>
        </select>
      </div>
      {/* Movie grid display */}
      <div className="movie-grid">
        {/* Map through movies and render MovieCards */}
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} onClick={openDialog} />
        ))}
        {/* Conditionally render MovieDialog if a movie is selected */}
        {selectedMovie && (
          <MovieDialog
            movie={selectedMovie}
            onClose={closeDialog}
            onDelete={handleDelete}
            onUpdate={handleMovieUpdate} // Pass the update handler to MovieDialog
          />
        )}
      </div>
    </div>
  );
};

export default Browse;
