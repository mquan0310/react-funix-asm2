import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import MovieList from "./MovieList";

function Browse() {
  return (
    <div className="text-white">
      <NavBar />
      <Banner />
      <MovieList />
    </div>
  );
}

export default Browse;
