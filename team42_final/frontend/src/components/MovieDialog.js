// src/components/MovieDialog.js

import React from "react";

const MovieDialog = ({ movie, onClose, onDelete }) => {
  if (!movie) return null;

  const handleDelete = () => {
    onDelete(movie._id);
    onClose(); // Close dialog after delete
  };

  // Function to format duration from minutes to hour:minute format
  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  };

  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Darker backdrop
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const contentStyle = {
    backgroundColor: "#1e1e1e", // Match app background
    color: "#dcdcdc", // Match app text color
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
    width: "60%", // Adjust the width as needed
    maxHeight: "80vh", // Adjust the height as needed
    overflowY: "auto", // Enable scroll for overflow content
    display: "flex", // Add flex display
    alignItems: "center", // Align items vertically
  };

  const imageStyle = {
    width: "30%", // Adjust the width of the image
    marginRight: "20px", // Add some space between the image and text
  };

  const infoStyle = {
    width: "70%", // Adjust the width of the text area
  };

  const buttonStyle = {
    margin: "10px",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={backdropStyle}>
      <div style={contentStyle}>
        <img src={movie.poster} alt={movie.title} style={imageStyle} />
        <div style={infoStyle}>
          <h2>{movie.title}</h2>
          <p>
            <strong>Director:</strong> {movie.director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.actors}
          </p>
          <p>
            <strong>Year:</strong> {movie.year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Duration:</strong> {formatDuration(movie.duration)}
          </p>
          <p>
            <strong>Rating:</strong> {movie.rating}/10
          </p>
          <p>
            <strong>Description:</strong> {movie.description}
          </p>
          <button
            onClick={handleDelete}
            style={{
              ...buttonStyle,
              backgroundColor: "#dc3545",
              color: "#fff",
            }} // Red color for delete
            className="btn btn-danger"
          >
            Delete Movie
          </button>
          <button
            onClick={onClose}
            style={{
              ...buttonStyle,
              backgroundColor: "#6c757d",
              color: "#fff",
            }} // Grey color for close
            className="btn btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDialog;
