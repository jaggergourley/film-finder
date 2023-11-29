// Movie.js

const mongoose = require("mongoose");

// Create Schema
const movieSchema = new mongoose.Schema({
  Poster_Link: String,
  Series_Title: String,
  Released_Year: Number,
  Certificate: String,
  Runtime: String,
  Genre: String,
  IMDB_Rating: Number,
  Overview: String,
  Director: String,
  Star1: String,
  Star2: String,
  Star3: String,
  Star4: String,
});

// Create Model
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
