import React from "react";
import MoviesCard from "./MoviesCard";
const MoviesList = ({ movies, text }) => {
  return (
    <div>
      <div className="list">
        {movies
          .filter((el) => el.name.toLowerCase().includes(text.toLowerCase()))
          .map((el) => (
            <MoviesCard movie={el} />
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
