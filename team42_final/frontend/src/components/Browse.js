// src/components/Browse.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import MovieDialog from "./MovieDialog";

const Browse = () => {
  const [movies, setMovies] = useState([]);
  // Initialize sortCriteria as an object with field and order
  const [sortCriteria, setSortCriteria] = useState({ field: "", order: "" });

  useEffect(() => {
    fetchSortedMovies();
  }, [sortCriteria]);

  const fetchSortedMovies = async () => {
    try {
      // Update the request to include sorting field and order
      const response = await axios.get("http://localhost:5000/movies", {
        params: { sortBy: sortCriteria.field, order: sortCriteria.order },
      });
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  const [selectedMovie, setSelectedMovie] = useState(null);

  const openDialog = (movie) => {
    setSelectedMovie(movie);
  };

  const closeDialog = () => {
    setSelectedMovie(null);
  };

  // Function to handle sorting criteria change
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortCriteria({
      field: value.split("-")[0],
      order: value.split("-")[1],
    });
  };

  const handleDelete = async (movieId) => {
    try {
      await axios.delete(`http://localhost:5000/movies/${movieId}`);
      // Remove deleted movie from state
      setMovies(movies.filter((movie) => movie._id !== movieId));
    } catch (error) {
      console.error("Error deleting movie", error);
    }
  };

  // CSS for the movie grid
  const movieGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    padding: "20px",
  };

  // Inline CSS for the dropdown menu styling
  const dropdownStyle = {
    padding: "10px 15px",
    backgroundColor: "#2e2e2e", // Dark background color
    color: "#dcdcdc", // Light text color
    borderRadius: "5px",
    border: "1px solid #444", // Subtle border color
    outline: "none",
    margin: "10px 0",
    width: "200px", // Set a fixed width
  };

  return (
    <div>
      <div>
        <select style={dropdownStyle} onChange={handleSortChange}>
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
      <div style={movieGridStyle}>
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} onClick={openDialog} />
        ))}
        {selectedMovie && (
          <MovieDialog
            movie={selectedMovie}
            onClose={closeDialog}
            onDelete={handleDelete} // Pass handleDelete as onDelete
          />
        )}
      </div>
    </div>
  );
};

export default Browse;

// const genres = [
//   "Action",
//   "Adventure",
//   "Animation",
//   "Biography",
//   "Crime",
//   "Comedy",
//   "Drama",
//   "Family",
//   "Fantasy",
//   "Film-Noir",
//   "History",
//   "Horror",
//   "Music",
//   "Musical",
//   "Mystery",
//   "Romance",
//   "Sci-Fi",
//   "Thriller",
//   "Western",
//   "War",
// ];
