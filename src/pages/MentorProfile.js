import "../styles/MentorProfile.css";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profileBg from "../img/profile_background.jpg";
import { Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import React from "react";

function MentorProfile() {
  const { user, logout } = UserAuth();
  const userID = doc(db, "users", `${user?.email}`);
  const [menteeStatus, setMenteeStatus] = useState(false);
  const [mentorStatus, setMentorStatus] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);

  useEffect(() => {
    onSnapshot(userID, (doc) => {
      setMenteeStatus(doc.data()?.isMentee);
      setMentorStatus(doc.data()?.isMentor);
    });
  });

  const handleChange = () => {
    setChangeIcon(!changeIcon);
  };

  const profileBackground = {
    backgroundImage: `url(${profileBg})`,
    backgroundSize: "cover",
  };
  return (
    <div>
      <div className="bg-center" style={profileBackground}>
        <div className="flex ml-10">
          <img
            src="img/nataisia.jpeg"
            className="mentorProfile p-2"
            alt="mentor"
          />
          <div className="text-white font-medium ml-2">
            <h1 className="text-6xl text-white mb-2 mt-4">Nataisia Hambidge</h1>
            <h3 className="text-white text-2xl">
              Program Manager at Microsoft
            </h3>
            <h3 className="text-white text-2xl">Redmond, WA</h3>
          </div>
        </div>
      </div>

      <Container>
        <Row>
          <Col>
            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-user"></i> ABOUT ME
                  </div>
                  {mentorStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  Hello! I’m Nataisia, a program manager at Microsoft working on
                  the Microsoft Edge Consumer team. I work with designers and
                  engineers to make sure Edge users have the most seamless and
                  delightful experience.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-briefcase"></i> EXPERIENCE
                  </div>
                  {mentorStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  <h2 className="topicHeader">COMPANY</h2>
                  <p>Microsoft</p>
                  <h2 className="topicHeader">TITLE</h2>
                  <p>Program Manager</p>
                  <p className="timePeriod">
                    <i className="fa-solid fa-calendar "></i> September 2021 -
                    Present
                  </p>
                  <h2 className="topicHeader mt-3">COMPANY</h2>
                  <p>Microsoft</p>
                  <h2 className="topicHeader">TITLE</h2>
                  <p>New Technologist Intern</p>
                  <p className="timePeriod">
                    <i className="fa-solid fa-calendar "></i> June 2020 - August
                    2020
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-user"></i> ABOUT ME
                  </div>
                  {mentorStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  I love cooking and baking! I spend a lot of my free time
                  scrolling through Pinterest for recipes. I also love spending
                  time in the outdoors. You can catch me hiking or kayaking on
                  the weekends with my friends.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-calendar"></i> AVAILABILITY
                  </div>
                  {mentorStatus && (
                    <i
                      className="fa-solid fa-pencil text-black hover:border-2"
                      onClick={handleChange}
                    ></i>
                  )}
                </Card.Title>
                <Card.Text>
                  <h2 className="topicHeader">MEETING TIMES</h2>
                  <div className="flex flex-col w-7/12 gap-2 justify-start mt-2">
                    {changeIcon ? (
                      <Badge className="text-dark outline" bg="light">
                        <i className="fa-solid fa-x"></i> Tuesday 9:00am-5:00pm
                      </Badge>
                    ) : (
                      <Badge className="text-dark outline" bg="light">
                        Tuesday 9:00am-5:00pm
                      </Badge>
                    )}
                    {changeIcon ? (
                      <Badge className="text-dark outline" bg="light">
                        <i className="fa-solid fa-x"></i> Thursday 9:00am-5:00pm
                      </Badge>
                    ) : (
                      <Badge className="text-dark outline" bg="light">
                        Thursday 9:00am-5:00pm
                      </Badge>
                    )}
                  </div>

                  <h2 className="topicHeader mt-3">MEETING METHOD</h2>
                  <div>
                    {changeIcon ? (
                      <Badge className="text-dark outline" bg="light">
                        <i className="fa-solid fa-x"></i> Virtual
                      </Badge>
                    ) : (
                      <Badge className="text-dark outline" bg="light">
                        Virtual
                      </Badge>
                    )}
                    {changeIcon ? (
                      <Badge className="text-dark outline" bg="light">
                        <i className="fa-solid fa-x"></i> In-person
                      </Badge>
                    ) : (
                      <Badge className="text-dark outline" bg="light">
                        In-person
                      </Badge>
                    )}
                  </div>
                  <h2 className="topicHeader mt-3">MEETING LENGTH</h2>
                  <div>
                    {changeIcon ? (
                      <Badge className="text-dark outline me-2" bg="light">
                        <i className="fa-solid fa-x"></i> 15 Minutes
                      </Badge>
                    ) : (
                      <Badge className="text-dark outline me-2" bg="light">
                        15 Minutes
                      </Badge>
                    )}
                    {changeIcon ? (
                      <Badge className="text-dark outline" bg="light">
                        <i className="fa-solid fa-x"></i> 30 Minutes
                      </Badge>
                    ) : (
                      <Badge className="text-dark outline" bg="light">
                        30 Minutes
                      </Badge>
                    )}
                    {changeIcon ? (
                      <Badge className="text-dark outline" bg="light">
                        <i className="fa-solid fa-x"></i> 1 hour
                      </Badge>
                    ) : (
                      <Badge className="text-dark outline" bg="light">
                        1 hour
                      </Badge>
                    )}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            {menteeStatus && (
              <Link to="/appointment">
                <button className="m-4 btn btn-primary">
                  Schedule Appointment
                </button>
              </Link>
            )}
          </Col>
          <Col>
            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-graduation-cap"></i>EDUCATION
                  </div>
                  {mentorStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  <h2 className="topicHeader ">SCHOOL</h2>
                  <p>University of Washington</p>
                  <h2 className="topicHeader mt-3">DEGREE</h2>
                  <p>
                    Bachelor of Science in Human Centered Design and Engineering
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-message"></i> TOPIC OF EXPERTISE
                  </div>
                  {mentorStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  Product management, navigating career opportunities in college
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-bullseye"></i> WHY I WANT TO MENTOR
                  </div>
                  {mentorStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  I love to help and provide value to students in any way I can!
                  As an undergrad, I struggled a lot with figuring out what I
                  wanted to do. Now as a full-time employee, I want to help
                  students who might be in the same situation.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-phone"></i> CONTACT
                  </div>
                  {mentorStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  <h2 className="topicHeader">PHONE</h2>
                  <a href="/" className="link-primary">
                    206-413-0870
                  </a>
                  <h2 className="topicHeader mt-3">EMAIL</h2>
                  <a href="/" className="link-primary">
                    nataisia@microsoft.com
                  </a>
                  <h2 className="topicHeader mt-3">LINKEDIN</h2>
                  <a href="/" className="link-primary">
                    https://linkedin.com/in/nataisia
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MentorProfile;
