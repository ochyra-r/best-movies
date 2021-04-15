import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import { getCategory } from "../features/categorySlice";
import { useSelector } from "react-redux";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const activeCat = useSelector(getCategory);

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

  let moviesToDisplay = movies;

  moviesToDisplay = moviesToDisplay.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  moviesToDisplay = moviesToDisplay.filter((movie) => {
    const categories = movie.categories;
    let inCategory = false;
    categories.forEach((cat) => {
      if (cat === activeCat) {
        inCategory = true;
      }
    });
    if (!activeCat) {
      inCategory = true;
    }
    return inCategory;
  });

  return (
    <div className="movies mt-3 mt-md-0">
      <h3 className="movies__title">Movies</h3>
      <div className="movies__search">
        <input
          type="text"
          value={search}
          placeholder="Search movie"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="movies__list">
        {moviesToDisplay.map((movie, id) => (
          <Movie key={id} movie={movie} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
