// src/App.js

import React from "react";
import FeaturedMovies from "./components/FeaturedMovies";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <header className="jumbotron">
        <h1 className="display-4">Featured Movies</h1>
        <p className="lead">Check out the most popular movies.</p>
      </header>
      <FeaturedMovies />
    </div>
  );
};

export default App;
