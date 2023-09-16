import React, { useEffect, useState } from "react";
import Card from "./Card";

const Modal = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

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
        `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`,
        options
      );
      const data = await res.json();
      setIsLoading(false);
      setMovies(data.results);
    } catch (error) {
      return error;
    }
  };
  console.log(movies);
  useEffect(() => {
    fetchAllMovies();
  }, [title]);
  if (isLoading) {
    return (
      <div
        className="wrapper modal bg-white  w-[80%] h-[570px] overflow-scroll absolute top-[5rem] right-0 left-0 shadow-xl
   shadow-black p-4"
      >
        <div className="cards">
          <div className="loading"></div>
        </div>
      </div>
    );
  }
  if (movies.length === 0) {
    return (
      <div
        className="wrapper modal bg-white b w-[80%] h-[570px] overflow-scroll absolute top-[5rem] right-0 left-0 shadow-xl
     shadow-black p-4"
      >
        <div className="cards">
          <p className="text-[#be123c] text-lg">No results found...</p>
        </div>
      </div>
    );
  }
  return (
    <div
      className="wrapper modal bg-white b w-[80%] h-[570px] overflow-scroll absolute top-[5rem] right-0 left-0 shadow-xl
     shadow-black p-4"
    >
      <div className="cards">
        {movies?.map((movie) => {
          return <Card key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default Modal;
