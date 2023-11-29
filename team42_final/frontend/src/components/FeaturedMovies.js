// src/components/FeaturedMovies.js

import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/movies");
        setMovies(response.data); // Assuming backend sends the movie data as an array
      } catch (error) {
        console.error("Error fetching movies", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-sm-4 mb-3" key={movie._id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
