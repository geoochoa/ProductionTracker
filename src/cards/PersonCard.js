import React from "react";

/**
 * Card to display given category
 */
const PersonCard = ({ person, movie }) => {
  //console.log(person);
  const IMG_PATH = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={"person--card"}>
      {person && person.profile_path ? (
        <img
          className={"person--photo"}
          src={`${IMG_PATH}${person.profile_path}`}
          alt=""
        />
      ) : (
        <div className={"movie--placeholder"}>No Image Found</div>
      )}

      <h5 className={"person--name"}>
        {person ? (
          person.name
        ) : (
          <div className={"person--name"}>No Name Found</div>
        )}
      </h5>
      <h5 className={"person--name"}>
        {movie ? movie : <div className={"person--name"}>No Name Found</div>}
      </h5>
    </div>
  );
};

export default PersonCard;
//
