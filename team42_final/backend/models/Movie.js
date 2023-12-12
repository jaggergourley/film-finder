// backend/models/Movie.js

const mongoose = require("mongoose");

// Define the schema for the Movie model
const movieSchema = new mongoose.Schema({
  imdb_title_id: String, // Unique identifier for the movie from IMDb
  title: String,
  year: Number,
  genre: String,
  duration: Number, // Duration in minutes
  director: String,
  actors: String, // Comma-separated list of actors
  description: String,
  rating: Number, // IMDb rating of the movie
  poster: String, // URL to poster image
});

// Create a model from the schema
const Movie = mongoose.model("Movie", movieSchema);

// Export the model to be used in other parts of the application
module.exports = Movie;
