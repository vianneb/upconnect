import React from "react";
import "../styles/MentorCompleteProfilePage3.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function mentorcompleteProfile3() {
  return (
    <div>
      <div className="profile-header">
        <h2>Complete your Profile</h2>
      </div>
      <div className="progressBar2">
        <ProgressBar animated now={80} />
      </div>
      <div className="progressPercentage">88% completed</div>

      <div className="form-headingPage3">
        <h2>Meeting Availability</h2>
      </div>
      <form>
        <div class="row whole_row">
          <div class="col cols">
            <div className="h3_headers">
              <h3>What is your preferred way of connecting with a mentee?</h3>
            </div>
            <select class="form-control" required>
              <option>Select all that apply...</option>
              <option>In-person</option>
              <option>Virtual</option>
              <option>Chatting over email or text only</option>
            </select>
          </div>
          <div class="col cols">
            <div className="h3_headers">
              <h3>What is your preferred meeting length?</h3>
            </div>
            <select class="form-control" required>
              <option>Select all that apply...</option>
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
            </select>
          </div>
        </div>
        <div class="row manage">
          <div className="h3_headers3">
            <h3>What days and times are you available to meet with a mentee?(Timezones in UTC) </h3>
          </div>
          <div class="col">
            <div class="row">
              <div class="custom-control custom-checkbox checkbox_withLabel">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label
                  class="custom-control-label checkbox_label"
                  for="customCheck1"
                >
                  Monday
                </label>
              </div>
            </div>
            <div class="row allrow">
              <div class="custom-control custom-checkbox checkbox_withLabel">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label
                  class="custom-control-label checkbox_label"
                  for="customCheck1"
                >
                  Tuesday
                </label>
              </div>
            </div>
            <div class="row allrow">
              <div class="custom-control custom-checkbox checkbox_withLabel">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label
                  class="custom-control-label checkbox_label"
                  for="customCheck1"
                >
                  Wednesday
                </label>
              </div>
            </div>
            <div class="row allrow">
              <div class="custom-control custom-checkbox checkbox_withLabel">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label
                  class="custom-control-label checkbox_label"
                  for="customCheck1"
                >
                  Thursday
                </label>
              </div>
            </div>
            <div class="row allrow">
              <div class="custom-control custom-checkbox checkbox_withLabel">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label
                  class="custom-control-label checkbox_label"
                  for="customCheck1"
                >
                  Friday
                </label>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="col">
              <div class="row">
                <select class="form-control" required>
                  <option> Choose your start time </option>
                  <option>12:00 pm </option>
                  <option>12:15 pm</option>
                  <option>12:30 pm</option>
                  <option>12:45 pm</option>
                  <option>1:00 pm</option>
                  <option>1:15 pm</option>
                  <option>1:30 pm</option>
                  <option>2:00 pm</option>
                </select>
              </div>
              <div class="row allrow1">
                <select class="form-control" required>
                  <option>Choose your start time </option>
                  <option>12:00 pm </option>
                  <option>12:15 pm</option>
                  <option>12:30 pm</option>
                  <option>12:45 pm</option>
                  <option>1:00 pm</option>
                  <option>1:15 pm</option>
                  <option>1:30 pm</option>
                  <option>2:00 pm</option>
                </select>
              </div>
              <div class="row allrow1">
                <select class="form-control" required>
                  <option>Choose your start time </option>
                  <option>12:00 pm </option>
                  <option>12:15 pm</option>
                  <option>12:30 pm</option>
                  <option>12:45 pm</option>
                  <option>1:00 pm</option>
                  <option>1:15 pm</option>
                  <option>1:30 pm</option>
                  <option>2:00 pm</option>
                </select>
              </div>
              <div class="row allrow1">
                <select class="form-control" required>
                  <option>Choose your start time </option>
                  <option>12:00 pm </option>
                  <option>12:15 pm</option>
                  <option>12:30 pm</option>
                  <option>12:45 pm</option>
                  <option>1:00 pm</option>
                  <option>1:15 pm</option>
                  <option>1:30 pm</option>
                  <option>2:00 pm</option>
                </select>
              </div>
              <div class="row allrow1">
                <select class="form-control" required>
                  <option>Choose your start time </option>
                  <option>12:00 pm </option>
                  <option>12:15 pm</option>
                  <option>12:30 pm</option>
                  <option>12:45 pm</option>
                  <option>1:00 pm</option>
                  <option>1:15 pm</option>
                  <option>1:30 pm</option>
                  <option>2:00 pm</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <select class="form-control" required>
                <option>Choose your end time</option>
                <option>12:00 pm </option>
                <option>12:15 pm</option>
                <option>12:30 pm</option>
                <option>12:45 pm</option>
                <option>1:00 pm</option>
                <option>1:15 pm</option>
                <option>1:30 pm</option>
                <option>2:00 pm</option>
              </select>
            </div>
            <div class="row allrow1">
              <select class="form-control" required>
                <option>Choose your end time</option>
                <option>12:00 pm </option>
                <option>12:15 pm</option>
                <option>12:30 pm</option>
                <option>12:45 pm</option>
                <option>1:00 pm</option>
                <option>1:15 pm</option>
                <option>1:30 pm</option>
                <option>2:00 pm</option>
              </select>
            </div>
            <div class="row allrow1">
              <select class="form-control" required>
                <option>Choose your end time</option>
                <option>12:00 pm </option>
                <option>12:15 pm</option>
                <option>12:30 pm</option>
                <option>12:45 pm</option>
                <option>1:00 pm</option>
                <option>1:15 pm</option>
                <option>1:30 pm</option>
                <option>2:00 pm</option>
              </select>
            </div>
            <div class="row allrow1">
              <select class="form-control" required>
                <option>Choose your end time</option>
                <option>12:00 pm </option>
                <option>12:15 pm</option>
                <option>12:30 pm</option>
                <option>12:45 pm</option>
                <option>1:00 pm</option>
                <option>1:15 pm</option>
                <option>1:30 pm</option>
                <option>2:00 pm</option>
              </select>
            </div>
            <div class="row allrow allrow1">
              <select class="form-control" required>
                <option>Choose your end time</option>
                <option>12:00 pm </option>
                <option>12:15 pm</option>
                <option>12:30 pm</option>
                <option>12:45 pm</option>
                <option>1:00 pm</option>
                <option>1:15 pm</option>
                <option>1:30 pm</option>
                <option>2:00 pm</option>
              </select>
            </div>
          </div>
        </div>
        <Link to="/MentorProfile">
          <button class="next-button" type="submit">
            Finish
          </button>
        </Link>
      </form>
    </div>
  );
}
export default mentorcompleteProfile3;
