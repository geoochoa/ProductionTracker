import React from "react";

const PersonCard = ({ person }) => {
  return (
    <div className={"person-card"}>
      <h5>{person.name}</h5>
    </div>
  );
};

export default PersonCard;
