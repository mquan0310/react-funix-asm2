import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useAPI from "../api/useAPI";

const SearchIcon = () => {
  const { originalMovies } = useAPI();
  console.log(999, originalMovies);
  return (
    <FontAwesomeIcon
      icon={faSearch}
      className="fs-1 mt-2 mr-2 "
      style={{ color: "#dee2e6" }}
    />
  );
};

export default SearchIcon;
