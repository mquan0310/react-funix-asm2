import React from "react";

const SearchItem = ({ movie }) => {
  return (
    <li>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
        className="scaleImg"
        alt=""
      />
    </li>
  );
};

const ResultsList = ({ results }) => {
  console.log("Results", results);
  return (
    <div>
      <h2>Search Results:</h2>
      <ul className="list-unstyled d-flex flex-wrap">
        {results ? (
          results.map((movie) => (
            <SearchItem
              key={movie.id}
              movie={movie}
              id={movie.id}
              poster_path={movie?.poster_path}
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </div>
  );
};

export default ResultsList;
