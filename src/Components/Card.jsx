import React from "react";
import img from "../assets/defaultPoster.png";
import { Link } from "react-router-dom";

const Card = ({ id, title, release_date, poster_path }) => {
  const posterImg = `http://image.tmdb.org/t/p/w154${poster_path}`;
  return (
    <>
      <Link to={`/movies/${id}`} className="card">
        <div>
          <img
            className="w-[100%] h-[370px]"
            data-testid="movie-poster"
            src={poster_path ? posterImg : img}
            alt=""
          />
        </div>
        <div>
          <p className="movieYear">{release_date}</p>
        </div>
        <h3 data-testid="movie-title">{title}</h3>

        <div className="movieType">
          <p data-testid="movie-release-date">Action, Adventure, Horror</p>
        </div>
      </Link>
    </>
  );
};

export default Card;
