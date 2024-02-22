import React from "react";
import useAPI from "../api/useAPI";
import Button from "react-bootstrap/Button";
import classes from "./Banner.module.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const { originalMovies } = useAPI();

  //*tạo vị trí ngẫu nhiên  element phim
  const imgIndex = Math.abs(Math.floor(Math.random() * originalMovies.length - 1));
  const movieRandom = originalMovies[imgIndex];

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${movieRandom?.backdrop_path}`}
        alt={movieRandom?.original_name}
        className={classes.imgBanner}
      />

      <div className={classes.divSize}>
        <h2>{movieRandom?.name}</h2>
        <div className="mt-5 fs-6 ">
          <Link to={`/${movieRandom?.id}`}>
            <Button variant="dark" className="border-0 opacity-75">
              Play
            </Button>
          </Link>
          <Button variant="dark" className="border-0 opacity-75 ms-2">
            My List
          </Button>
        </div>
        <p className="mt-4">{movieRandom?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
