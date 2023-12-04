// src/components/FeaturedMovies/FeaturedMovies.js

// Import necessary dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeaturedMovies.css";

// Functional component to display featured movies
const FeaturedMovies = () => {
  // State to store an array of featured movies
  const [featuredMovies, setFeaturedMovies] = useState([]);

  // Fetch and set featured movies on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/movies");
        // Select a random subset of movies to feature
        const randomMovies = getRandomMovies(response.data, 5);
        setFeaturedMovies(randomMovies);
      } catch (error) {
        console.error("Error fetching movies", error);
      }
    };
    fetchMovies();
  }, []);

  // Function to randomly select a subset of movies
  const getRandomMovies = (movies, count) => {
    // Randomly shuffles the array and picks the first 'count' elements
    return [...movies].sort(() => 0.5 - Math.random()).slice(0, count);
  };

  // Render the grid of featured movies
  return (
    <div className="grid-container">
      {/* Map through featuredMovies and render each movie */}
      {featuredMovies.map((movie) => (
        <div key={movie._id} className="movie-card">
          {/* Movie poster image */}
          <img src={movie.poster} alt={movie.title} className="movie-image" />
          {/* Movie title and description */}
          <div className="text-content">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedMovies;
