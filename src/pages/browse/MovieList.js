import { Link } from "react-router-dom";
import useAPI from "../api/useAPI";

//*từng bộ phim một
const MovieItem = ({ movie, title, id, onShowTrailer }) => {
  //?link ảnh theo chiều dọc nếu là original khác thì chiều ngang
  console.log(999, movie);
  const imagePath =
    title === "Original"
      ? `https://image.tmdb.org/t/p/w200${movie?.poster_path}`
      : `https://image.tmdb.org/t/p/w200${movie?.backdrop_path}`;

  return (
    <Link
      to={`/${id}`}
      onClick={() => {
        //mới đầu cần sủ dụng <Link> truy cập vào <MovieDetail/>
        if (!onShowTrailer) return;
        onShowTrailer(id);
        return;
      }}
      state={{
        overview: movie?.overview,
        release_date: movie?.release_date,
        title: movie?.title,
        vote_average: movie?.vote_average,
        vote_count: movie?.vote_count,
        name: movie?.name,
      }}
    >
      <li>
        <img src={imagePath} alt={movie?.original_title || ""} className="scaleImg" />
      </li>
    </Link>
  );
};

//từng thể loại phim một
export const ListItem = (props) => {
  return (
    <li className="m-5">
      <h3>{props.title}</h3>

      <ul className="list-unstyled d-flex gap-4 custom-scroll">
        {props.requests.map((movie) => (
          <MovieItem
            movie={movie}
            title={props.title}
            key={movie.id}
            id={movie.id}
            onShowTrailer={props.onShowTrailer}
          />
        ))}
      </ul>
    </li>
  );
};

//tất cả các thể loại phim

const MovieList = ({ onShowTrailer }) => {
  const {
    originalMovies,
    topRateMovies,
    trendMovies,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentMovies,
  } = useAPI();

  const movieCategories = [
    { title: "Original", requests: originalMovies },
    { title: "Xu hướng", requests: trendMovies },
    { title: "Xếp hạng cao", requests: topRateMovies },
    { title: "Hành động", requests: actionMovies },
    { title: "Hài kịch", requests: comedyMovies },
    { title: "Kinh dị", requests: horrorMovies },
    { title: "Lãng mạn", requests: romanceMovies },
    { title: "Tài liệu", requests: documentMovies },
  ];

  return (
    <ul className="list-unstyled">
      {movieCategories.map((category) => (
        <ListItem
          key={category.title}
          title={category.title}
          requests={category.requests}
          onShowTrailer={onShowTrailer}
        />
      ))}
    </ul>
  );
};

export default MovieList;
