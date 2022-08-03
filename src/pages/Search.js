import React, { useState } from "react";
import "../styles/Search.css";
import Form from "react-bootstrap/Form";
import { MentorCardList } from "../components/SearchCard";

function Search(props) {
  //state for search input
  const [input, setInput] = useState("");

  //set input when user types in search bar
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  //call handleSearch when user clicks search
  const handleClick = (event) => {
    event.preventDefault();
    props.handleSearch(input);
  };

  return (
    <div>
      <h2 className="search-heading text-primary text-5xl font-extrabold mt-10 mb-10 text-center">
        Search for Mentors
      </h2>

      <div className="search-div mb-10">
        <Form className="d-flex w-75">
          <Form.Control
            type="search"
            placeholder="Search by name, company, job title, career topics, or location"
            className="me-2"
            aria-label="Search"
            onChange={handleInput}
          />
          <button className="btn btn-primary" onClick={handleClick}>
            <i class="fas fa-search"></i>
          </button>
        </Form>
      </div>

      <div>
        <MentorCardList mentorsList={props.mentorsList} />
      </div>
    </div>
  );
}

export default Search;
