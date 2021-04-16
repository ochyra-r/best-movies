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
      <div className="cover-story">
        <img className="cover" src={movie.cover} alt={movie.title} />
        <div className="story clearfix">
          <p className="story__toggler" onClick={() => handleStoryline()}>
            Storyline{" "}
            {!openDesc ? (
              <span>
                <i className="bi bi-caret-down"></i>
              </span>
            ) : (
              <span>
                <i className="bi bi-caret-up"></i>
              </span>
            )}
          </p>
          <p className={openDesc ? "story__content show" : "story__content"}>
            {movie.storyline}
          </p>
        </div>
      </div>
      <div className="video">
        <p className="video__toggler" onClick={() => handleTrailer()}>
          Trailer{" "}
          {!openTrailer ? (
            <span>
              <i className="bi bi-play-btn-fill"></i>
            </span>
          ) : (
            <span>
              <i className="bi bi-stop-btn-fill"></i>
            </span>
          )}
        </p>
      </div>
      {!movie.trailer ? (
        <p className={openTrailer ? "video__trailer show" : "video__trailer"}>
          Sorry, There is no trailer for this movie
        </p>
      ) : (
        <video
          className={openTrailer ? "video__trailer show" : "video__trailer"}
          src={movie.trailer}
          controls
          muted
        ></video>
      )}
    </div>
  );
};

export default Movie;
