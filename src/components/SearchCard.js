import React from "react";
import "../styles/SearchCard.css";
import { Link } from "react-router-dom";

export function MentorCard(props) {
  return (
    <div className="col-12">
      <div>
        <div className="card-body box-shadow white p-3 mb-5">
          <div className="d-flex row">
            <div className="col-2">
              <div>
                <img
                  className="circle"
                  src={props.mentor.Image}
                  alt="mentor"
                ></img>
              </div>
            </div>
            <div className="col-8">
              <h3 className="mentor-name">{props.mentor.Name}</h3>
              <p className="job-title">{props.mentor.Header}</p>
              <p>{props.mentor.Location}</p>
              <ul>
                <li>Career topics: {props.mentor.Career_Topics}</li>
                <li>Availability: {props.mentor.Meeting_Days}</li>
                <li>
                  Contact information: {props.mentor.Email} |{" "}
                  {props.mentor.Phone}
                </li>
              </ul>
            </div>
            <div className="col-2 profile-btn">
              <Link to="/mentorProfile">
                <button className="btn btn-primary">View Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MentorCardList(props) {
  let mentorItems = props.mentorsList.map((mentor) => {
    let component = <MentorCard key={mentor.Name} mentor={mentor} />;
    return component;
  });

  return (
    <div className="container">
      <div className="row">{mentorItems}</div>
    </div>
  );
}
