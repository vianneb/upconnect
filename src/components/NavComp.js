import React, { useEffect, useState } from "react";
import "../styles/NavComp.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { UserAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

function NavComp() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const userID = doc(db, "users", `${user?.email}`);
  const [menteeStatus, setMenteeStatus] = useState(false);
  const [mentorStatus, setMentorStatus] = useState(false);

  useEffect(() => {
    onSnapshot(userID, (doc) => {
      setMenteeStatus(doc.data()?.isMentee);
      setMentorStatus(doc.data()?.isMentor);
    });
  });

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You've been logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <Navbar className="shadow-lg bg-white rounded" sticky="top" expand="lg">
        <Navbar.Brand
          className="nav-logo flex ml-4 items-center gap-1"
          as={Link}
          to="/"
        >
          <img src={logo} alt="logo" className="logo-img" />
          UpConnect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user && menteeStatus && (
              <Nav.Link className="nav-item" as={Link} to="/search">
                Search
              </Nav.Link>
            )}
            {!mentorStatus && (
              <Nav.Link className="nav-item" as={Link} to="/resources">
                Resources
              </Nav.Link>
            )}
            {user && menteeStatus && (
              <Nav.Link className="nav-item" as={Link} to="/map">
                Map
              </Nav.Link>
            )}
            {!user && (
              <Nav.Link className="nav-item" as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            )}
            {!user && (
              <Nav.Link className="nav-item" as={Link} to="/signin">
                Sign In
              </Nav.Link>
            )}
            {user && mentorStatus && (
              <div className="flex">
                <Nav.Link className="nav-item" as={Link} to="/mentorfeedback">
                  Feedback
                </Nav.Link>
              </div>
            )}

            {user && mentorStatus && (
              <div className="flex">
                <Nav.Link className="nav-item" as={Link} to="/appointments">
                  Appointments
                </Nav.Link>
              </div>
            )}

            {user && mentorStatus && (
              <div className="flex">
                <Nav.Link className="nav-item" as={Link} to="/mentorProfile">
                  Profile
                </Nav.Link>
              </div>
            )}

            {user && menteeStatus && (
              <Nav.Link className="nav-item" as={Link} to="/menteeProfile">
                Profile
              </Nav.Link>
            )}
            {user && (
              <Nav.Link onClick={handleLogout} className="nav-item">
                Sign Out
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavComp;
