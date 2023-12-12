// src/contexts/LikedMoviesContext.js

import React, { createContext, useState } from "react";

// Create a context for managing liked movies
export const LikedMoviesContext = createContext();

// Provide a context provider to wrap components that need access to liked movies
export const LikedMoviesProvider = ({ children }) => {
  // State to store the liked movies list
  const [likedMovies, setLikedMovies] = useState([]);

  // Function to add a movie to the liked movies list
  const likeMovie = (movie) => {
    setLikedMovies((prevMovies) => [...prevMovies, movie]);
  };

  // Function to remove a movie from the liked movies list
  const unlikeMovie = (movieId) => {
    setLikedMovies((prevMovies) => prevMovies.filter((m) => m._id !== movieId));
  };

  // Function to update a movie in the liked movies list
  const updateLikedMovie = (updatedMovie) => {
    setLikedMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie._id === updatedMovie._id ? updatedMovie : movie
      )
    );
  };

  // Provide the liked movies state and functions to child components
  return (
    <LikedMoviesContext.Provider
      value={{ likedMovies, likeMovie, unlikeMovie, updateLikedMovie }}
    >
      {children}
    </LikedMoviesContext.Provider>
  );
};
