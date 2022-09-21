import React from "react";
import MovieCard from "../cards/MovieCard";
import PersonCard from "../cards/PersonCard";
//import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

/**
 * Invokes category slider containing cards of sought after category
 */
const CategorySlider = ({ movies, credits, category, role }) => {
  console.log(credits);
  return (
    <section className="cat--slider">
      {credits.map((credit) => (
        <PersonCard
          key={credit.id}
          movie={credit.movieTitle}
          person={
            role === "crew"
              ? credit.crew.find(({ job }) => job === category)
              : credit.cast[0]
          }
        />
      ))}
    </section>
  );
};

export default CategorySlider;

/*

<section className="cat--slider">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} /> //Send down the movie
      ))}
    </section>
*/
