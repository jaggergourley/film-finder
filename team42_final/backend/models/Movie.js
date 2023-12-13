// backend/models/Movie.js
// This file defines the Movie model schema using Mongoose, structuring how movie data is stored in MongoDB.

const mongoose = require("mongoose");

// Define the schema for the Movie model with relevant fields
const movieSchema = new mongoose.Schema({
  imdb_title_id: String, // Unique identifier for the movie from IMDb, stored as a string
  title: String, // Title of the movie
  year: Number, // Release year of the movie
  genre: String, // Genre(s) of the movie, can be multiple separated by comma
  duration: Number, // Duration of the movie in minutes
  director: String, // Director's full name
  actors: String, // List of main actors' names, separated by commas
  description: String, // Brief description or plot of the movie
  rating: Number, // IMDb rating, typically on a 1-10 scale
  poster: String, // URL to a poster image for the movie
});

// Compile the schema into a model which can perform CRUD operations on the 'movies' collection
const Movie = mongoose.model("Movie", movieSchema);

// Export the model for use in API endpoints
module.exports = Movie;
