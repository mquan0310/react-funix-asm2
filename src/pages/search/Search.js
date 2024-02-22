import React, { useState } from "react";
import NavBar from "../browse/NavBar";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "5b5883f8c06163d408b7fe5146c471ab";

function Search() {
  const [searchResults, setSearchResults] = useState([]);

  const searchFilms = async (term) => {
    try {
      const search = await axios.get(
        `${API_URL}/search/movie?language=en-US&api_key=${API_KEY}&query=${term}`
      );
      const res = search?.data?.results;
      console.log("Đây là res", res);
      if (res && res.length > 0) {
        setSearchResults(res);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  };

  const handleSearch = (term) => {
    searchFilms(term);
  };

  const resetSearch = () => {
    // Đặt lại trạng thái trang Search khi nhấn nút RESET
    setSearchResults([]);
  };

  return (
    <div>
      <NavBar />
      <SearchForm onSearch={handleSearch} onResetSearch={resetSearch} />
      <ResultList results={searchResults} />
    </div>
  );
}

export default Search;
