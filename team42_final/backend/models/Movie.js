// Movie.js

const mongoose = require("mongoose");

// Create Schema
const movieSchema = new mongoose.Schema({
  imdb_title_id: String,
  title: String,
  year: Number,
  genre: String,
  duration: Number,
  director: String,
  actors: String,
  description: String,
  rating: Number,
  poster: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
