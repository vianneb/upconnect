import React from "react";
import "../styles/CompleteProfilePage3.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function completeProfile3() {
  return (
    <div>
      <div className="profile-header text-primary">
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
              <h3>What is your preferred way of connecting with a mentor?</h3>
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
            <h3>What topics do you want to discuss with a mentor? </h3>
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
                  Saturday
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
                  Sunday
                </label>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="col">
              <div class="row">
                <select class="form-control">
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
                <select class="form-control">
                  <option>Choose your start time </option>
                  <option>7:00 am </option>
                  <option>7:15 am</option>
                  <option>7:30 am</option>
                  <option>7:45 am</option>
                  <option>8:00 am</option>
                  <option>8:15 am</option>
                  <option>8:30 am</option>
                  <option>8:45 am</option>
                  <option>9:00 am</option>
                  <option>9:15 am</option>
                  <option>9:30 am</option>
                  <option>9:45 am</option>
                  <option>10:00 am</option>
                  <option>10:15 am</option>
                  <option>10:30 am</option>
                  <option>10:45 am</option>
                  <option>11:00 am</option>
                  <option>11:15 am</option>
                  <option>11:30 am</option>
                  <option>11:45 am</option>
                  <option>12:00 pm</option>
                  <option>12:15 pm</option>
                  <option>12:30 pm</option>
                  <option>12:45 pm</option>
                  <option>1:00 pm</option>
                  <option>12:15 pm</option>
                  <option>12:30 pm</option>
                  <option>12:45 pm</option>
                  <option>1:00 pm</option>
                  <option>1:15 pm</option>
                  <option>1:30 pm</option>
                  <option>1:45 pm</option>
                  <option>2:00 pm</option>
                  <option>2:15 pm</option>
                  <option>2:30 pm</option>
                  <option>2:45 pm</option>
                  <option>3:00 pm</option>
                  <option>3:15 pm</option>
                  <option>3:30 pm</option>
                  <option>3:45 pm</option>
                  <option>4:00 pm </option>
                  <option>4:15 pm</option>
                  <option>4:30 pm</option>
                  <option>4:45 pm</option>
                  <option>5:00 pm</option>
                  <option>5:15 pm</option>
                  <option>5:30 pm</option>
                  <option>5:45 pm</option>
                  <option>6:00 pm</option>
                  <option>6:15 pm</option>
                  <option>6:30 pm</option>
                  <option>6:45 pm</option>
                  <option>7:00 pm</option>
                </select>
              </div>
              <div class="row allrow1">
                <select class="form-control">
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
                <select class="form-control">
                  <option>Choose your start time </option>
                  <option>4:00 pm </option>
                  <option>4:15 pm</option>
                  <option>4:30 pm</option>
                  <option>4:45 pm</option>
                  <option>5:00 pm</option>
                  <option>5:15 pm</option>
                  <option>5:30 pm</option>
                  <option>5:45 pm</option>
                  <option>6:00 pm</option>
                  <option>6:15 pm</option>
                  <option>6:30 pm</option>
                  <option>6:45 pm</option>
                  <option>7:00 pm</option>
                </select>
              </div>
              <div class="row allrow1">
                <select class="form-control">
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
                <select class="form-control">
                  <option>Choose your start time</option>
                  <option>7:00 am </option>
                  <option>7:15 am</option>
                  <option>7:30 am</option>
                  <option>7:45 am</option>
                  <option>8:00 am</option>
                  <option>8:15 am</option>
                  <option>8:30 am</option>
                  <option>8:45 am</option>
                  <option>9:00 am</option>
                  <option>9:15 am</option>
                  <option>9:30 am</option>
                  <option>9:45 am</option>
                  <option>10:00 am</option>
                  <option>10:15 am</option>
                  <option>10:30 am</option>
                  <option>10:45 am</option>
                  <option>11:00 am</option>
                  <option>11:15 am</option>
                  <option>11:30 am</option>
                  <option>11:45 am</option>
                  <option>12:00 pm</option>
                  <option>12:15 pm</option>
                  <option>12:30 pm</option>
                  <option>12:45 pm</option>
                  <option>1:00 pm</option>
                  <option>12:15 pm</option>
                  <option>12:30 pm</option>
                  <option>12:45 pm</option>
                  <option>1:00 pm</option>
                  <option>1:15 pm</option>
                  <option>1:30 pm</option>
                  <option>1:45 pm</option>
                  <option>2:00 pm</option>
                  <option>2:15 pm</option>
                  <option>2:30 pm</option>
                  <option>2:45 pm</option>
                  <option>3:00 pm</option>
                  <option>3:15 pm</option>
                  <option>3:30 pm</option>
                  <option>3:45 pm</option>
                  <option>4:00 pm </option>
                  <option>4:15 pm</option>
                  <option>4:30 pm</option>
                  <option>4:45 pm</option>
                  <option>5:00 pm</option>
                  <option>5:15 pm</option>
                  <option>5:30 pm</option>
                  <option>5:45 pm</option>
                  <option>6:00 pm</option>
                  <option>6:15 pm</option>
                  <option>6:30 pm</option>
                  <option>6:45 pm</option>
                  <option>7:00 pm</option>
                </select>
              </div>
              <div class="row allrow1">
                <select class="form-control">
                  <option>Choose your start time</option>
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
              <select class="form-control">
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
              <select class="form-control">
                <option>Choose your end time</option>
                <option>7:00 am </option>
                <option>7:15 am</option>
                <option>7:30 am</option>
                <option>7:45 am</option>
                <option>8:00 am</option>
                <option>8:15 am</option>
                <option>8:30 am</option>
                <option>8:45 am</option>
                <option>9:00 am</option>
                <option>9:15 am</option>
                <option>9:30 am</option>
                <option>9:45 am</option>
                <option>10:00 am</option>
                <option>10:15 am</option>
                <option>10:30 am</option>
                <option>10:45 am</option>
                <option>11:00 am</option>
                <option>11:15 am</option>
                <option>11:30 am</option>
                <option>11:45 am</option>
                <option>12:00 pm</option>
                <option>12:15 pm</option>
                <option>12:30 pm</option>
                <option>12:45 pm</option>
                <option>1:00 pm</option>
                <option>12:15 pm</option>
                <option>12:30 pm</option>
                <option>12:45 pm</option>
                <option>1:00 pm</option>
                <option>1:15 pm</option>
                <option>1:30 pm</option>
                <option>1:45 pm</option>
                <option>2:00 pm</option>
                <option>2:15 pm</option>
                <option>2:30 pm</option>
                <option>2:45 pm</option>
                <option>3:00 pm</option>
                <option>3:15 pm</option>
                <option>3:30 pm</option>
                <option>3:45 pm</option>
                <option>4:00 pm </option>
                <option>4:15 pm</option>
                <option>4:30 pm</option>
                <option>4:45 pm</option>
                <option>5:00 pm</option>
                <option>5:15 pm</option>
                <option>5:30 pm</option>
                <option>5:45 pm</option>
                <option>6:00 pm</option>
                <option>6:15 pm</option>
                <option>6:30 pm</option>
                <option>6:45 pm</option>
                <option>7:00 pm</option>
              </select>
            </div>
            <div class="row allrow1">
              <select class="form-control">
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
              <select class="form-control">
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
              <select class="form-control">
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
              <select class="form-control">
                <option>Choose your end time</option>
                <option>7:00 am </option>
                <option>7:15 am</option>
                <option>7:30 am</option>
                <option>7:45 am</option>
                <option>8:00 am</option>
                <option>8:15 am</option>
                <option>8:30 am</option>
                <option>8:45 am</option>
                <option>9:00 am</option>
                <option>9:15 am</option>
                <option>9:30 am</option>
                <option>9:45 am</option>
                <option>10:00 am</option>
                <option>10:15 am</option>
                <option>10:30 am</option>
                <option>10:45 am</option>
                <option>11:00 am</option>
                <option>11:15 am</option>
                <option>11:30 am</option>
                <option>11:45 am</option>
                <option>12:00 pm</option>
                <option>12:15 pm</option>
                <option>12:30 pm</option>
                <option>12:45 pm</option>
                <option>1:00 pm</option>
                <option>12:15 pm</option>
                <option>12:30 pm</option>
                <option>12:45 pm</option>
                <option>1:00 pm</option>
                <option>1:15 pm</option>
                <option>1:30 pm</option>
                <option>1:45 pm</option>
                <option>2:00 pm</option>
                <option>2:15 pm</option>
                <option>2:30 pm</option>
                <option>2:45 pm</option>
                <option>3:00 pm</option>
                <option>3:15 pm</option>
                <option>3:30 pm</option>
                <option>3:45 pm</option>
                <option>4:00 pm </option>
                <option>4:15 pm</option>
                <option>4:30 pm</option>
                <option>4:45 pm</option>
                <option>5:00 pm</option>
                <option>5:15 pm</option>
                <option>5:30 pm</option>
                <option>5:45 pm</option>
                <option>6:00 pm</option>
                <option>6:15 pm</option>
                <option>6:30 pm</option>
                <option>6:45 pm</option>
                <option>7:00 pm</option>
              </select>
            </div>

            <div class="row allrow allrow1">
              <select class="form-control">
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
        <Link to="/menteeProfile">
          <button class="next-button bg-primary" type="submit">
            Finish
          </button>
        </Link>
      </form>
    </div>
  );
}
export default completeProfile3;
