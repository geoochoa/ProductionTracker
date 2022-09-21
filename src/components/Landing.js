import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/App.css";
//import MovieCard from "../cards/MovieCard";
import CategorySlider from "../cards/CategorySlider";

function Landing() {
  const API_URL = "https://api.themoviedb.org/3";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";
  //const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [credits, setCredits] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  //const [searchKey, setSearchKey] = useState("");
  //const [directors, setDirectors] = useState({});
  //const [dps, setDps] = useState({});
  //const [writers, setWriters] = useState({});

  const fetchMovies = async (searchKey) => {
    const chosenMovie = Math.floor(Math.random() * 20);
    const type = searchKey ? "search" : "discover";
    const sortedBy = "popularity.desc";
    const { data } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: process.env.REACT_APP_SIEKR_API_KEY,
        query: searchKey,
        sort_by: sortedBy,
      },
    });

    const movieIDS = [20]; //Get all movie ID's
    for (let i = 0; i < data.results.length; i += 1) {
      var currMovie = data.results[i];
      movieIDS[i] = currMovie.id;
    }

    fetchCredits(movieIDS, data.results);
    setMovies(data.results);
    setSelectedMovie(data.results[chosenMovie]);
  };

  /**
   * Get credits of movies and store into state
   * Director
   * Cinematographer
   * Actors
   * Writers
   * Sound
   */
  const fetchCredits = async (movieIDS, selectedMovies) => {
    var credits = [20];
    for (let i = 0; i < movieIDS.length; i += 1) {
      //20 API calls
      var currID = movieIDS[i];

      const { data } = await axios.get(`${API_URL}/movie/${currID}/credits`, {
        params: {
          api_key: process.env.REACT_APP_SIEKR_API_KEY,
        },
      });
      data["movieTitle"] = selectedMovies[i].title;
      credits[i] = data;
    }

    setCredits(credits);
    processCredits(credits);
  };

  const processCredits = (credits) => {
    var people = {};

    for (let i = 0; i < credits.length; i += 1) {
      //console.log(credits[i]);
    }

    people = credits[0].crew.filter(({ job }) => job === "Director");
    //console.log(people);
  };

  useEffect(() => {
    fetchMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //const renderMovies = () =>
  //  movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  const renderCategory = (selectedCategory, selectedRole) => (
    <CategorySlider
      movies={movies}
      credits={credits}
      category={selectedCategory}
      role={selectedRole}
    />
  );

  /*
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };
  */

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

      <h2 className="cat--title">Trending Directors</h2>
      <div>{renderCategory("Director", "crew")}</div>
      <h2 className="cat--title">Trending Cinematographers</h2>
      <div>{renderCategory("Director of Photography", "crew")}</div>
      <h2 className="cat--title">Trending Actors</h2>
      <div>{renderCategory("Acting", "cast")}</div>
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

/**
 * 
 fetch(`https://api.themoviedb.org/3/movie/<<movieID>>/credits?api_key=<<your_api_key>>`)
            .then(response => response.json())
            .then((jsonData)=>jsonData.crew.filter(({job})=> job ==='Director'))
 */
