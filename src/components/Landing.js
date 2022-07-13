import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/App.css";
import MovieCard from "../cards/MovieCard";

function Landing() {
  const API_URL = "https://api.themoviedb.org/3";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280/";
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchKey, setSearchKey] = useState("");

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const { data } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: process.env.REACT_APP_SIEKR_API_KEY,
        query: searchKey,
      },
    });

    setMovie(data.results[0]);
    setMovies(data.results);
    setSelectedMovie(data.results[0]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () =>
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };
  //For search, on click of search, make search bar appear

  return (
    <div>
      <div
        className="poster"
        style={{
          backgroundImage: `url(${BACKDROP_PATH}${selectedMovie.backdrop_path})`,
        }}
      >
        <div className="center-max-size">
          <div className="poster-content">
            <h1>{selectedMovie.title}</h1>
            {selectedMovie.overview ? <p>{selectedMovie.overview}</p> : null}
          </div>
        </div>
      </div>

      <div className="container">{renderMovies()}</div>
    </div>
  );
}

export default Landing;

/**
 *       <form onSubmit={searchMovies}>
        <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
        <button type={"submit"}>Search</button>
      </form>
 */
