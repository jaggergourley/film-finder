// src/components/Navbar/Navbar.js

import React from "react";
import { Link } from "react-router-dom";

// Functional component for the navigation bar
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        FilmFinder
      </Link>
      {/* Container for the navigation items */}
      <div className="collapse navbar-collapse">
        {/* Navigation list */}
        <ul className="navbar-nav mr-auto">
          {/* Individual navigation items with links */}
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/browse">
              Browse
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/liked-movies">
              Liked Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/student-info">
              Student Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
