// backend/node_modules/index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Movie = require("./models/Movie"); // Import the Movie model for database operations

const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing for all routes
app.use(express.json()); // Parse JSON bodies in requests

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/team42db", {});

// Endpoint to retrieve all movies with optional sorting
app.get("/movies", async (req, res) => {
  try {
    let query = Movie.find(); // Start with a query to find all movies

    // Check if sorting parameters are provided in the request
    if (req.query.sortBy && req.query.order) {
      const sortField = req.query.sortBy;
      const sortOrder = req.query.order === "desc" ? -1 : 1; // Use -1 for descending order, 1 for ascending
      query = query.sort({ [sortField]: sortOrder }); // Apply sorting to the query
    }

    const movies = await query.exec();
    res.json(movies); // Send the resulting list of movies
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint to retrieve a single movie by its ID
app.get("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id); // Find the movie by ID
    if (!movie) {
      return res.status(404).send("Movie not found."); // If no movie is found, return 404
    }
    res.json(movie); // Send the found movie
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint to create a new movie
app.post("/movies", async (req, res) => {
  const movie = new Movie(req.body); // Create a new movie from request body
  try {
    const savedMovie = await movie.save(); // Save the new movie to the database
    res.status(201).json(savedMovie); // Respond with the saved movie
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Endpoint to update an existing movie by ID
app.put("/movies/:id", async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document instead of the original
    );
    if (!updatedMovie) {
      return res.status(404).send("Movie not found."); // If no movie is found for update, return 404
    }
    res.json(updatedMovie); // Send the updated movie
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Endpoint to delete a movie by ID
app.delete("/movies/:id", async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) {
      return res.status(404).send("Movie not found."); // If no movie is found for deletion, return 404
    }
    res.json({ message: "Movie successfully deleted", deletedMovie }); // Confirm deletion
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
