import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import useAPI from "../api/useAPI";
import styled from "styled-components";

const DivMargin = styled.div`
  margin-bottom: 500px;
  color: #fff;
`;

const MovieDetail = () => {
  //*lấy id theo phim khi người dung ấn click.
  const { id } = useParams(); //id (để truyền vào url ->api)
  const { title, name, vote_average, release_date, vote_count, overview } =
    useLocation().state; //dư liệu khác  về trailter
  const { trailerMovies } = useAPI(); //key youtube
  const [showTrailer, setShowTrailer] = useState(true);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  //render info trailer
  const showTrailerHandler = (movieId) => {
    if (+id === movieId) {
      setShowTrailer(!showTrailer);
    } else {
      setShowTrailer(true);
    }
  };

  return (
    <DivMargin>
      <NavBar />
      {showTrailer && (
        <div className="row bg-black w-100 m-0 py-4 px-2 position-fixed bottom-0 z-2">
          <div className="col">
            <h2 className="fw-bold border-bottom border-white pb-3">{title || name}</h2>

            <p className="fw-medium fs-5 mb-0 mt-3">Release Date: {release_date}</p>
            <p className="fw-medium fs-5">
              vote:{vote_average}/{vote_count}
            </p>

            <p>{overview}</p>
          </div>

          <div className="col">
            <YouTube videoId={trailerMovies?.key} opts={opts} />
          </div>
        </div>
      )}
      <MovieList onShowTrailer={showTrailerHandler} />
    </DivMargin>
  );
};

export default MovieDetail;
