// src/components/FeaturedMovies/FeaturedMovies.js
/*
This component displays a selection of movies prominently on the homepage.
It randomly selects a subset of movies to feature, offering users a varied experience each time they visit. 
*/

// Import necessary dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeaturedMovies.css";

// Functional component to display featured movies
const FeaturedMovies = () => {
  // State to store an array of featured movies
  const [featuredMovies, setFeaturedMovies] = useState([]);

  // Fetches movies from the server and sets a random subset as featured.
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Send a GET request to fetch all movies from the server
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

  // Function to randomly pick a set number of movies from the fetched list.
  const getRandomMovies = (movies, count) => {
    // Randomly shuffles the array and picks the first 'count' elements
    return [...movies].sort(() => 0.5 - Math.random()).slice(0, count);
  };

  // Render the component with a grid layout showcasing the featured movies.
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
