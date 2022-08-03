import React from "react";
import "../styles/CompleteProfilePage1.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

function completeProfile1() {
  return (
    <div>
      <div className="profile-header text-primary">
        <h2>Complete your Profile</h2>
      </div>
      <div className="progressBar">
        <ProgressBar now={0} />
        <div className="progressPercentage">0% completed</div>
      </div>
      <form className="whole_form">
        <div className="form-heading">
          <h2>Personal Information</h2>
        </div>
        <div class="row">
          <div class="col">
            <div className="h3_headers">
              <h3>Full name</h3>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>
        <div className="row">
          <div class="col">
            <div className="h3_headers">
              <h3>Preferred Email</h3>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Email address"
              required
            />
          </div>
          <div class="col">
            <div className="h3_headers">
              <h3>Preferred Phone Number</h3>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>
        <div className="row">
          <div class="col">
            <div className="h3_headers">
              <h3>City and State</h3>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="e.g. Seattle, WA"
              required
            />
          </div>
          <div class="col">
            <div className="h3_headers">
              <h3>Personal Links</h3>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="e.g. LinkedIn, GitHub, etc."
            />
          </div>
        </div>
        <div className="row">
          <div class="col">
            <div className="h3_headers">
              <h3>Tell us about yourself.</h3>
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
          <h2>Education</h2>
        </div>
        <div class="row">
          <div class="col">
            <div className="h3_headers">
              <h3>School</h3>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="School name"
              required
            />
          </div>
          <div class="col">
            <div className="h3_headers">
              <h3>Major</h3>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your major"
              required
            />
          </div>
        </div>
        <Link to="/completeProfile2">
          <button class="next-button bg-primary" type="submit">
            Next
          </button>
        </Link>
      </form>
    </div>
  );
}
export default completeProfile1;
