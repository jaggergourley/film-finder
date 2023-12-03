// backend/node_modules/index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Movie = require("./models/Movie"); // Import the Movie model

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/team42db");

// Endpoint with sorting functionality
app.get("/movies", async (req, res) => {
  try {
    let query = Movie.find();

    // // Add filters for genre, title, director, and actor
    // if (req.query.genre) {
    //   query = query.where("genre").equals(req.query.genre);
    // }
    // if (req.query.title) {
    //   query = query.where("title").regex(new RegExp(req.query.title, "i"));
    // }
    // if (req.query.director) {
    //   query = query
    //     .where("director")
    //     .regex(new RegExp(req.query.director, "i"));
    // }
    // if (req.query.actor) {
    //   query = query.where("actors").regex(new RegExp(req.query.actor, "i"));
    // }

    // Sorting
    if (req.query.sortBy && req.query.order) {
      const sortField = req.query.sortBy;
      const sortOrder = req.query.order === "desc" ? -1 : 1; // 'desc' for descending, otherwise ascending
      query = query.sort({ [sortField]: sortOrder });
    }

    const movies = await query.exec();
    res.json(movies);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get a single movie by ID
app.get("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).send("Movie not found.");
    res.json(movie);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Create a new movie
app.post("/movies", async (req, res) => {
  const movie = new Movie(req.body);
  try {
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update a movie by ID
app.put("/movies/:id", async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMovie) return res.status(404).send("Movie not found.");
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a movie by ID
app.delete("/movies/:id", async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) return res.status(404).send("Movie not found.");
    res.json({ message: "Movie successfully deleted", deletedMovie });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
