// src/components/LikedMovies.js

import React, { useContext } from "react";
import { LikedMoviesContext } from "../contexts/LikedMoviesContext";
import MovieCard from "./MovieCard";

const LikedMovies = () => {
  const { likedMovies } = useContext(LikedMoviesContext);

  // CSS for the movie grid, similar to the Browse component
  const movieGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    padding: "20px",
  };

  return (
    <div>
      <h2>Liked Movies</h2>
      <div style={movieGridStyle}>
        {likedMovies.length > 0 ? (
          likedMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))
        ) : (
          <p>No liked movies yet.</p>
        )}
      </div>
    </div>
  );
};

export default LikedMovies;
