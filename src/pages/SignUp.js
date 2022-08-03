import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../img/onboarding_background.jpg";
import { UserAuth } from "../contexts/AuthContext";
import Lottie from "react-lottie";
import student from "../lotties/mentor.json";

function SignUp() {
  const backgroundImageStyle = {
    backgroundImage: `url(${signUpImg})`,
    backgroundSize: "cover",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: student,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/selection");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-6/12 flex justify-center flex-col items-start">
        <Container className="px-12">
          <h2 className=" mt-16 text-6xl font-extrabold text-center text-primary">
            Get Started
          </h2>
          <Form className="mt-16" onSubmit={handleSubmit}>
            {/* <Form.Group className="mb-4" controlId="formBasicName">
              <Form.Control
                type="name"
                placeholder="Enter full name"
                className="bg-transparent border-none shadow-none"
              />
              <hr className="border-4 border-primary opacity-100" />
            </Form.Group> */}

            <Form.Group className="mb-4" controlId="formBasicEmail">
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none shadow-none"
              />
              <hr className="border-4 border-primary opacity-100" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-none shadow-none"
              />
              <hr className="border-4 border-primary opacity-100" />
            </Form.Group>
            <div className="d-grid">
              <Button className="bg-primary" size="lg" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
          <div className="text-center mt-2 text-xl">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary">
              Sign In
            </Link>
          </div>
        </Container>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          className="mt-2"
        />
      </div>

      <div className="w-6/12" style={backgroundImageStyle}></div>
    </div>
  );
}

export default SignUp;
