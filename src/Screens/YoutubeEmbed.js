import React from "react";
import { useParams } from "react-router-dom";

const YoutubeEmbed = ({ movies }) => {
  const params = useParams();
  console.log(params);
  const movie = movies.filter((el) => el.id == params.id)[0];
  console.log(movie);

  return (
    <div>
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={movies.trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div className="movie-details">
        <img src="" alt="" />
        <div className="details">
          <h1 style={{ color: "white" }}>{movie.name}</h1>
          <p>description</p>
        </div>
      </div>
      ;
    </div>
  );
};

export default YoutubeEmbed;
