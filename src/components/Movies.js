import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/movies", { method: "get" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie, id) => (
          <Movie key={id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
