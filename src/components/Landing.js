import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/App.css";
import PersonCard from "../cards/PersonCard";

function Landing() {
  const API_URL = "https://api.themoviedb.org/3";
  const [people, setPeople] = useState([]);

  const fetchPerson = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/person/popular`, {
      params: {
        api_key: process.env.REACT_APP_SIEKR_API_KEY,
      },
    });

    setPeople(results);
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  const renderPeople = () =>
    people.map((person) => <PersonCard key={person.id} person={person} />);

  return (
    <div>
      <h1>Landing Page</h1>
      <div className="container">{renderPeople()}</div>
    </div>
  );
}

export default Landing;
