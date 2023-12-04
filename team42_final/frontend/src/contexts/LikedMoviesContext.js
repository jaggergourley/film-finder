// src/contexts/LikedMoviesContext.js

import React, { createContext, useState } from "react";

// Context to manage liked movies state and actions
export const LikedMoviesContext = createContext();

// LikedMoviesProvider component to provide liked movies state and actions to its children
export const LikedMoviesProvider = ({ children }) => {
  // State to manage the list of liked movies
  const [likedMovies, setLikedMovies] = useState([]);

  // Function to add a movie to the liked movies list
  const likeMovie = (movie) => {
    setLikedMovies((prevMovies) => [...prevMovies, movie]);
  };

  // Function to remove a movie from the liked movies list
  const unlikeMovie = (movieId) => {
    setLikedMovies((prevMovies) => prevMovies.filter((m) => m._id !== movieId));
  };

  // Provide the likedMovies state and action functions to child components
  return (
    <LikedMoviesContext.Provider
      value={{ likedMovies, likeMovie, unlikeMovie }}
    >
      {children}
    </LikedMoviesContext.Provider>
  );
};
