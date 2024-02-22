import React, { useState } from "react";
import SearchIcon from "../browse/SearchIcon";

const SearchForm = ({ onSearch, onResetSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search) {
      alert("Vui lòng nhập từ khóa!");
      return;
    }

    // Gọi hàm callback onSearch khi form được submit
    onSearch(search);
  };

  const handleReset = () => {
    // Đặt lại giá trị trường search và gọi hàm callback onResetSearch
    setSearch("");
    onResetSearch();
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form className="bg-white w-50 mt-5 " onSubmit={handleSearch}>
        <div className="d-flex border-bottom border-info border-4 justify-content-center">
          <input
            type="search"
            className="w-100 border-0 p-2 fs-5"
            style={{ outline: "none" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon />
        </div>
        <div className="py-5 d-flex gap-2 justify-content-end me-5">
          <button
            type="button"
            className="btn btn-outline-line border-0 fw-semibold px-3"
            onClick={handleReset}
          >
            RESET
          </button>
          <button type="submit" className="btn btn-info text-white fw-semibold">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
