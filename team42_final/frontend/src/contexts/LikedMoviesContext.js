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

  return (
    <LikedMoviesContext.Provider
      value={{ likedMovies, likeMovie, unlikeMovie }}
    >
      {children}
    </LikedMoviesContext.Provider>
  );
};
