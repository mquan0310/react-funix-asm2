import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import MovieDetail from "./pages//browse/MovieDetail";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  let: 0;
  background: #000;
  width: 100%;
  height: 100%;
  z-index: -10;
`;

function App() {
  const [showMovieDetail, setShowMovieDetail] = useState(false);

  const handleOverlayClick = () => {
    // Khi overlay được click, thay đổi trạng thái hiển thị thông tin phim
    setShowMovieDetail(!showMovieDetail);
  };

  return (
    <BrowserRouter>
      <Overlay showOverlay={showMovieDetail} onClick={handleOverlayClick} />
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/:id" element={<MovieDetail />} /> */}
        <Route
          path="/:id"
          element={<MovieDetail show={showMovieDetail} setShow={setShowMovieDetail} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
