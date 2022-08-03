import React from "react";
import "../styles/MentorCompleteProfilePage2.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

function mentorcompleteProfile2() {
  return (
    <div>
      <div className="profile-header">
        <h2>Complete your Profile</h2>
      </div>
      <div className="progressBar">
        <ProgressBar animated now={33} />
      </div>
      <div className="progressPercentage">33% completed</div>
      <form className="whole_form">
        <div className="form-heading">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col">
            <div className="h3_headers">
              <h3>Company</h3>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your company's name"
            />
          </div>
          <div class="col">
            <div className="h3_headers">
              <h3>Job Title</h3>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your Job Title"
            />
          </div>
        </div>
        <div className="row">
          <div class="col">
            <div className="form-heading">
              <h2>Hobbies and Extracurrirculars</h2>
            </div>
            <div className="h3_headers">
              <h3>
                Tell us about your hobbies and extracurricular involvement.
              </h3>
            </div>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              cols="2"
              required
            ></textarea>
          </div>
        </div>
        <div className="form-heading">
          <h2>Goals</h2>
        </div>
        <div class="row">
          <div class="col">
            <div className="h3_headers">
              <h3>List the topics of expertise you want to share. </h3>
            </div>
            <textarea
              type="text"
              class="form-control"
              //   placeholder="School name"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div className="h3_headers">
              <h3>Why do you want to be a mentor? </h3>
            </div>
            <textarea
              type="text"
              class="form-control"
              //   placeholder="School name"
              required
            />
          </div>
        </div>
        <Link to="/mentorcompleteProfile3">
          <button class="next-button" type="submit">
            Next
          </button>
        </Link>
      </form>
    </div>
  );
}
export default mentorcompleteProfile2;
