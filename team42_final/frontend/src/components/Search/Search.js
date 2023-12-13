// src/components/Search/Search.js
/*
Search component allows users to find movies based on various criteria such as title, director, actor, and genre. 
It manages the search form inputs and displays the search results using MovieCard components.
*/

import React, { useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import MovieDialog from "../MovieDialog/MovieDialog";
import "./Search.css";

// List of genres for the genre dropdown
const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Crime",
  "Comedy",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Western",
  "War",
];

const Search = () => {
  // State variables for form inputs and search results
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [actor, setActor] = useState("");
  const [genre, setGenre] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Function to handle the search form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetching movies based on search criteria
      const response = await axios.get("http://localhost:5000/movies", {
        params: { title, director, actor, genre },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching movies", error);
    }
  };

  // Function to handle opening the movie dialog
  const openDialog = (movie) => {
    setSelectedMovie(movie);
  };

  // Function to handle closing the movie dialog
  const closeDialog = () => {
    setSelectedMovie(null);
  };

  // Function to handle the deletion of a movie
  const handleDelete = async (movieId) => {
    try {
      await axios.delete(`http://localhost:5000/movies/${movieId}`);
      setSearchResults(searchResults.filter((movie) => movie._id !== movieId));
    } catch (error) {
      console.error("Error deleting movie", error);
    }
  };

  // Function to update the state when a movie is updated
  const handleMovieUpdate = (updatedMovie) => {
    setSearchResults(
      searchResults.map((movie) =>
        movie._id === updatedMovie._id ? updatedMovie : movie
      )
    );
  };

  // Renders the search form and the results grid.
  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        {/* Title input field */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="search-input"
        />
        {/* Director input field */}
        <input
          type="text"
          name="director"
          placeholder="Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          className="search-input"
        />
        {/* Actor input field */}
        <input
          type="text"
          name="actor"
          placeholder="Actor"
          value={actor}
          onChange={(e) => setActor(e.target.value)}
          className="search-input"
        />
        {/* Genre select field */}
        <select
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="search-select"
        >
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {searchResults.length > 0 ? (
          // Map through search results and render MovieCards
          searchResults.map((movie) => (
            <MovieCard key={movie._id} movie={movie} onClick={openDialog} />
          ))
        ) : (
          // Message displayed when there are no search results or before the first search
          <p>
            {searchResults.length === 0 &&
              "No matching search results or no search made yet."}
          </p>
        )}
        {/* MovieDialog for selected movie details */}
        {selectedMovie && (
          <MovieDialog
            movie={selectedMovie}
            onClose={closeDialog}
            onDelete={() => handleDelete(selectedMovie._id)}
            onUpdate={handleMovieUpdate} // Pass the update handler to MovieDialog
          />
        )}
      </div>
    </div>
  );
};

export default Search;
