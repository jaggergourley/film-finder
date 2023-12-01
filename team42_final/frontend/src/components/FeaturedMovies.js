// src/components/FeaturedMovies.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const FeaturedMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/movies");
        const randomMovies = getRandomMovies(response.data, 5);
        setFeaturedMovies(randomMovies);
      } catch (error) {
        console.error("Error fetching movies", error);
      }
    };
    fetchMovies();
  }, []);

  const getRandomMovies = (movies, count) => {
    return [...movies].sort(() => 0.5 - Math.random()).slice(0, count);
  };

  // Inline CSS for grid container styling
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#1e1e1e", // Dark mode background color
  };

  // Inline CSS for image styling
  const imageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  };

  // Inline CSS for text styling on a dark background
  const textStyle = {
    color: "#dcdcdc", // White text color
    textAlign: "left", // Align text to the left
    margin: "0.5rem", // Margin around text for better spacing
  };

  return (
    <div style={gridContainerStyle}>
      {featuredMovies.map((movie) => (
        <div key={movie._id}>
          <img style={imageStyle} src={movie.poster} alt={movie.title} />
          <div style={textStyle}>
            {" "}
            {/* Apply textStyle here */}
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedMovies;
