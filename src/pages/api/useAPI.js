import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const API_KEY = "5b5883f8c06163d408b7fe5146c471ab";

const requests = {
  fetchtmdb: `https://api.themoviedb.org/3`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

const useAPI = () => {
  const { id } = useParams();
  // const [error, setError] = useState(null);
  const [originalMovies, setOriginalMovies] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);
  const [topRateMovies, setTopRateMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [documentMovies, setDocumentMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          originalResults,
          trendResults,
          topRateResults,
          actionResults,
          comedyResults,
          horrorResults,
          romanceResults,
          documentResults,
        ] = await Promise.all([
          axios.get(`${requests.fetchtmdb}${requests.fetchNetflixOriginals}`),
          axios.get(`${requests.fetchtmdb}${requests.fetchTrending}`),
          axios.get(`${requests.fetchtmdb}${requests.fetchTopRated}`),
          axios.get(`${requests.fetchtmdb}${requests.fetchActionMovies}`),
          axios.get(`${requests.fetchtmdb}${requests.fetchComedyMovies}`),
          axios.get(`${requests.fetchtmdb}${requests.fetchHorrorMovies}`),
          axios.get(`${requests.fetchtmdb}${requests.fetchRomanceMovies}`),
          axios.get(`${requests.fetchtmdb}${requests.fetchDocumentaries}`),
        ]);

        //Lưu dữ liệu vào State

        setOriginalMovies(originalResults.data.results);
        setTrendMovies(trendResults.data.results);
        setTopRateMovies(topRateResults.data.results);
        setActionMovies(actionResults.data.results);
        setComedyMovies(comedyResults.data.results);
        setHorrorMovies(horrorResults.data.results);
        setRomanceMovies(romanceResults.data.results);
        setDocumentMovies(documentResults.data.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  //Lấy Trailer phim
  const [trailerMovies, setTrailerMovies] = useState([]);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${requests.fetchtmdb}/movie/${id}/videos?api_key=${API_KEY}`
        );
        setTrailerMovies(response.data.results[0]);
      } catch (error) {
        console.error("error", error.message);
      }
    };
    fetchData();
  }, [id]);

  return {
    originalMovies,
    trendMovies,
    topRateMovies,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentMovies,
    trailerMovies,
  };
};

export { useAPI as default, API_KEY };
