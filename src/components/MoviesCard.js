import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const MoviesCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movies/${movie.id}`}>
        <div className="movie_card" id="tomb">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={movie.posterurl} />
              <h1>{movie.name}</h1>
              <h4>2018, Roar Uthaug</h4>
            </div>

            <div className="movie_desc">
              <p className="text">{movie.description}</p>
            </div>
            <div className="rate">
              <ReactStars
                value={movie.rating}
                edit={false}
                count={5}
                size={24}
                activeColor="#ffd700"
              />{" "}
            </div>
          </div>
          <div
            className="blur_back tomb_back"
            style={{ background: `url(${movie.backurl})` }}
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default MoviesCard;
