// src/components/MovieCard.js

import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.Poster_Link} alt={movie.Series_Title} />
      <h3>{movie.Series_Title}</h3>
      {/* Add more movie details */}
    </div>
  );
};

export default MovieCard;
