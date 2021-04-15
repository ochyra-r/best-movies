import React, { useState } from "react";

const Movie = ({ movie }) => {
  const [openDesc, setOpenDesc] = useState(false);
  const [openTrailer, setOpenTrailer] = useState(false);

  const handleStoryline = () => {
    setOpenDesc(!openDesc);
  };
  const handleTrailer = () => {
    setOpenTrailer(!openTrailer);
  };

  return (
    <div className="movies__list--item">
      <h3 className="title">{movie.title}</h3>
      <img className="cover" src={movie.cover} alt={movie.title} />
      <div className="story">
        <p className="story__toggler" onClick={() => handleStoryline()}>
          Storyline <span>+</span>
        </p>
        <p className={openDesc ? "story__content show" : "story__content"}>
          {movie.storyline}
        </p>
      </div>
      <div className="video">
        <p className="video__toggler" onClick={() => handleTrailer()}>
          Trailer <span>+</span>
        </p>
        <video
          className={openTrailer ? "video__trailer show" : "video__trailer"}
          src={movie.trailer}
          controls
          muted
        ></video>
      </div>
    </div>
  );
};

export default Movie;
