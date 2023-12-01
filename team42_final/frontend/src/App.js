// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FeaturedMovies from "./components/FeaturedMovies";
import Browse from "./components/Browse";
import LikedMovies from "./components/LikedMovies";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Inline CSS for the dark mode background on the entire app
  const appStyle = {
    backgroundColor: "#1e1e1e", // Lighter dark mode background color
    color: "#dcdcdc", // Softer gray text color
    minHeight: "100vh", // Full viewport height
  };

  return (
    <Router>
      <div className="App" style={appStyle}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="jumbotron">
                  <h1 className="display-4">Featured Movies</h1>
                  <p className="lead">
                    Check out some of the greatest movies of all time!
                  </p>
                </header>
                <FeaturedMovies />
              </>
            }
          />
          <Route path="/browse" element={<Browse />} />
          <Route path="/liked-movies" element={<LikedMovies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
