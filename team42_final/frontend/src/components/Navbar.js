// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        FilmFinder
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
