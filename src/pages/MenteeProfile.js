import "../styles/MenteeProfile.css";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profileBg from "../img/profile_background.jpg";
import mentee1 from "../img/mentee_avatar2.jpg";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { UserAuth } from "../contexts/AuthContext";
import React from "react";

function MenteeProfile() {
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

  const handleDelete = () => {
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
            src="img/Vianne.jpeg"
            className="mentorProfile p-2"
            alt="mentor"
          />
          <div className="text-white font-medium ml-2">
            <h1 className="text-6xl text-white mb-2 mt-4">Vianne Buinguyen</h1>
            <h3 className="text-white text-2xl">
              Informatics Student at University of Washington
            </h3>
            <h3 className="text-white text-2xl">Everett, WA</h3>
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
                  {menteeStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  Hello! My name is Vianne, a rising junior studying informatics
                  at the University of Washington. I'm interested in learning
                  about product management.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-graduation-cap"></i>EDUCATION
                  </div>
                  {menteeStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  <h2 className="topicHeader">SCHOOL</h2>
                  <p>University of Washington</p>
                  <h2 className="topicHeader mt-3">MAJOR</h2>
                  <p>Informatics</p>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-briefcase"></i> EXPERIENCE
                  </div>
                  {menteeStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  <h2 className="topicHeader">COMPANY</h2>
                  <p>Microsoft</p>
                  <h2 className="topicHeader mt-3">TITLE</h2>
                  <p>New Technologist Intern</p>
                  <p className="timePeriod">
                    <i className="fa-solid fa-calendar "></i> June 2022 - August
                    2022
                  </p>
                </Card.Text>
              </Card.Body>
            </Card> */}

            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-calendar"></i> AVAILABILITY
                  </div>
                  {menteeStatus && (
                    <i
                      className="fa-solid fa-pencil text-black hover:border-2"
                      onClick={handleDelete}
                    ></i>
                  )}
                </Card.Title>
                <Card.Text>
                  <h2 className="topicHeader">MEETING TIMES</h2>
                  <div className="flex flex-col w-7/12 gap-2 justify-start mt-2">
                    {changeIcon ? (
                      <Badge className="text-dark outline me-2" bg="light">
                        <i className="fa-solid fa-x"></i> Tuesday 9:00am-5:00pm
                      </Badge>
                    ) : (
                      <Badge className="text-dark outline me-2" bg="light">
                        Tuesday 9:00am-5:00pm
                      </Badge>
                    )}
                    {changeIcon ? (
                      <Badge className="text-dark outline me-2" bg="light">
                        <i className="fa-solid fa-x"></i> Saturday 9:00am-5:00pm
                      </Badge>
                    ) : (
                      <Badge className="text-dark outline me-2" bg="light">
                        Saturday 9:00am-5:00pm
                      </Badge>
                    )}
                  </div>

                  <h2 className="topicHeader mt-3">MEETING METHOD</h2>
                  <div>
                    {changeIcon ? (
                      <Badge className="text-dark outline me-2" bg="light">
                        <i className="fa-solid fa-x"></i> In-person
                      </Badge>
                    ) : (
                      <Badge className="text-dark outline me-2" bg="light">
                        In-person
                      </Badge>
                    )}
                  </div>
                  <h2 className="topicHeader mt-3">MEETING LENGTH</h2>
                  <div>
                    {changeIcon ? (
                      <Badge className="text-dark outline me-2" bg="light">
                        <i className="fa-solid fa-x"></i> 30 Minutes
                      </Badge>
                    ) : (
                      <Badge className="text-dark outline me-2" bg="light">
                        30 Minutes
                      </Badge>
                    )}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-puzzle-piece"></i> HOBBIES
                  </div>
                  {menteeStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  Looking at SpongeBob memes and playing with my puppy, Koda.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-message"></i> TOPICS OF INTEREST
                  </div>
                  {menteeStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  How to get an internship, how to pass a PM interview
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-bullseye"></i> DESIRED OUTCOMES
                  </div>
                  {menteeStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  I'm looking for a mentor who can spend the next several months
                  helping me learn about the product management field and
                  prepare for interviews. My goal is to land my dream internship
                  for Summer 2023, so I can feel as accomplished as my peers.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-4 " style={{ width: "26rem" }}>
              <Card.Body>
                <Card.Title className="text-primary flex justify-between">
                  <div>
                    <i class="fa-solid fa-phone"></i> CONTACT
                  </div>
                  {menteeStatus && (
                    <i className="fa-solid fa-pencil text-black hover:border-2"></i>
                  )}
                </Card.Title>
                <Card.Text>
                  <h2 className="topicHeader">PHONE</h2>
                  <a href="/" className="link-primary">
                    425-931-4139
                  </a>
                  <h2 className="topicHeader mt-3">EMAIL</h2>
                  <a href="/" className="link-primary">
                    vianne2002@gmail.com
                  </a>
                  <h2 className="topicHeader mt-3">LINKEDIN</h2>
                  <a
                    className="link-primary"
                    href="https://linkedin.com/in/vianneb"
                  >
                    https://linkedin.com/in/vianneb
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

export default MenteeProfile;
