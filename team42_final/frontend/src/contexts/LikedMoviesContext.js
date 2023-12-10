// src/contexts/LikedMoviesContext.js

import React, { createContext, useState } from "react";

export const LikedMoviesContext = createContext();

export const LikedMoviesProvider = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState([]);

  const likeMovie = (movie) => {
    setLikedMovies((prevMovies) => [...prevMovies, movie]);
  };

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

  return (
    <LikedMoviesContext.Provider
      value={{ likedMovies, likeMovie, unlikeMovie, updateLikedMovie }}
    >
      {children}
    </LikedMoviesContext.Provider>
  );
};
