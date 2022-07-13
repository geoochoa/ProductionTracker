import React from "react";

const MovieCard = ({ movie }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={"person-card"}>
      {movie.poster_path ? (
        <img
          className={"person--photo"}
          src={`${IMG_PATH}${movie.poster_path}`}
          alt=""
        />
      ) : (
        <div className="movie--placeholder">No Image Found</div>
      )}
      <h5 className={"person--name"}>{movie.title}</h5>
    </div>
  );
};

export default MovieCard;
