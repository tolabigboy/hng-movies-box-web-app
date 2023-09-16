import React, { useEffect, useState } from "react";

import Card from "./Card";
import { data } from "autoprefixer";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcxY2YzYjFhZWE0Zjk5ZTEzNDQ2MmY2ZDVkZjIyOCIsInN1YiI6IjY1MDNkOWJkZWZlYTdhMDEzN2QzZTU0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dtPiIZrTz5GZmNA7rYz5FW-XiIRsKOfUUjBZ1kp5FVU",
    },
  };
  const fetchAllMovies = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const data = await res.json();
      setIsLoading(false);
      setMovies(data.results);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    fetchAllMovies();
  }, []);
  return (
    <div className="wrapper">
      <h2 className=" text-[#000]font-bold text-[36px] my-[1.5rem]">
        Featured Movie{" "}
      </h2>
      <div className="cards ">
        {movies.slice(0, 10).map((movie) => {
          return <Card key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedMovies;
