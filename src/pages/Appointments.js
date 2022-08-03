import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "../styles/SearchCard.css";
import { Link } from "react-router-dom";

export default function Appointments() {
  return (
    <div>
      <h2 className="text-primary text-5xl font-extrabold mt-10 mb-10 text-center">
        Appointments from Students
      </h2>
      <div>
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="incoming" title="Upcoming Appointments">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div>
                    <div className="card-body box-shadow white p-3 mb-5">
                      <div className="d-flex row">
                        <div className="col-2">
                          <div>
                            <img
                              className="circle"
                              src="img/vianne.jpeg"
                              alt="mentee"
                            ></img>
                          </div>
                        </div>
                        <div className="col-8">
                          <h3 className="mentor-name">Vianne Buinguyen</h3>
                          <p className="job-title">
                            Informatics Student at University of Washington
                          </p>
                          <p>Everett, WA</p>
                          <div className="col-12 d-flex mb-1 items-center">
                            <i class="fa-regular fa-calendar confirmation-icon" />
                            <p>August 4, 2022 at 2:00PM-2:30PM</p>
                          </div>
                          <div className="col-12 d-flex mb-1 items-center">
                            <i class="fas fa-earth-americas confirmation-icon" />
                            <p> Pacific Time - US &amp; Canada</p>
                          </div>
                          <div className="col-12 d-flex mb-1 items-center">
                            <i class="fa-solid fa-location-dot mb-3  confirmation-icon"></i>
                            <a href="/" className="mb-3 link-primary">
                              Microsoft Campus
                            </a>
                          </div>
                        </div>
                        <div className="col-2 profile-btn">
                          <Link to="/menteeProfile">
                            <button className="btn btn-primary">
                              View Profile
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="previous" title="Previous Appointments">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div>
                    <div className="card-body box-shadow white p-3 mb-3">
                      <div className="d-flex row">
                        <div className="col-2">
                          <div>
                            <img
                              className="circle"
                              src="img/weston.jpg"
                              alt="mentee"
                            ></img>
                          </div>
                        </div>
                        <div className="col-8">
                          <h3 className="mentor-name">Weston Press</h3>
                          <p className="job-title">
                            Business Student at Tulane University
                          </p>
                          <p>New Orleans, LA</p>
                          <p></p>
                          <div className="col-12 d-flex mb-1 items-center">
                            <i class="fa-regular fa-calendar confirmation-icon" />
                            <p>July 31, 2022 at 4:00PM-5:00PM</p>
                          </div>
                          <div className="col-12 d-flex mb-1 items-center">
                            <i class="fas fa-earth-americas confirmation-icon" />
                            <p> Pacific Time - US &amp; Canada</p>
                          </div>
                          <div className="col-12 d-flex mb-1 items-center">
                            <i class="fa-solid fa-location-dot mb-3  confirmation-icon"></i>
                            <a href="/" className="mb-3 link-primary">
                              Skype Meeting Link
                            </a>
                          </div>
                        </div>
                        <div className="col-2 profile-btn">
                          <Link to="/menteeProfile">
                            <button className="btn btn-primary">
                              View Profile
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <div className="card-body box-shadow white p-3 mb-5">
                      <div className="d-flex row">
                        <div className="col-2">
                          <div>
                            <img
                              className="circle"
                              src="img/mentee_avatar1.jpg"
                              alt="mentee"
                            ></img>
                          </div>
                        </div>
                        <div className="col-8">
                          <h3 className="mentor-name">Kevin Nguyen</h3>
                          <p className="job-title">
                            Human Factors Engineering Student at Tufts
                            University
                          </p>
                          <p>Boston, MA</p>
                          <div className="col-12 d-flex mb-1 items-center">
                            <i class="fa-regular fa-calendar confirmation-icon" />
                            <p>July 29, 2022 at 12:15PM-12:30PM</p>
                          </div>
                          <div className="col-12 d-flex mb-1 items-center">
                            <i class="fas fa-earth-americas confirmation-icon" />
                            <p> Pacific Time - US &amp; Canada</p>
                          </div>
                          <div className="col-12 d-flex mb-1 items-center">
                            <i class="fa-solid fa-location-dot mb-3  confirmation-icon"></i>
                            <a href="/" className="mb-3 link-primary">
                              Zoom Meeting Link
                            </a>
                          </div>
                        </div>
                        <div className="col-2 profile-btn">
                          <Link to="/menteeProfile">
                            <button className="btn btn-primary">
                              View Profile
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
