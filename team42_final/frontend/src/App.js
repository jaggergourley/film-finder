// src/App.js
// Main component that sets up routing and global context providers for the FilmFinder application.

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LikedMoviesProvider } from "./contexts/LikedMoviesContext";
import Navbar from "./components/Navbar/Navbar";
import FeaturedMovies from "./components/FeaturedMovies/FeaturedMovies";
import Browse from "./components/Browse/Browse";
import Search from "./components/Search/Search";
import LikedMovies from "./components/LikedMovies/LikedMovies";
import AddMovie from "./components/AddMovie/AddMovie";
import StudentInfo from "./components/StudentInfo/StudentInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  // The app component, wrapped with LikedMoviesProvider for state management

  return (
    <LikedMoviesProvider>
      <Router>
        <div className="App">
          <Navbar /> {/* Navigation bar for the app */}
          <Routes>
            {/* Route for the home page */}
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
                  <FeaturedMovies />{" "}
                  {/* Component to display featured movies */}
                </>
              }
            />

            {/* Other routes for different sections of the app */}
            <Route path="/browse" element={<Browse />} />
            <Route path="/search" element={<Search />} />
            <Route path="/liked-movies" element={<LikedMovies />} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/student-info" element={<StudentInfo />} />
          </Routes>
        </div>
      </Router>
    </LikedMoviesProvider>
  );
};

export default App;
