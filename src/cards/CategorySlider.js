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
          person={
            role === "crew"
              ? credit.crew.find(({ job }) => job === category)
              : credit.cast.find(({ job }) => job === category)
          }
        />
      ))}
    </section>
  );
};

export default CategorySlider;

//filter out done here
//trying to access credits.cast/crew to display sought after category
/*
<section className="cat--slider">
      {credits.map((role) => (
        <PersonCard key={role.id} person={role.crew.filter(({ job }) => job === category)} />
      ))}
</section>



<section className="cat--slider">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} /> //Send down the movie
      ))}
    </section>
*/

//ML to find text of poster?
