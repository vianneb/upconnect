import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import Lottie from "react-lottie";
import student from "../lotties/student.json";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { logIn } = UserAuth();

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
      await logIn(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col justify-content items-center w-6/12">
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          className="mt-2"
        />
        <Container className="">
          <h2 className=" mt-8 text-6xl font-extrabold text-center text-primary">
            Welcome Back
          </h2>
          <Form className="mt-16" onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group className="mb-4" controlId="formBasicEmail">
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
              <Button
                className="bg-primary hover:shadow-sm hover:shadow-primary"
                size="lg"
                type="submit"
              >
                Sign In
              </Button>
            </div>
          </Form>
          <div className="text-center mt-2 text-xl">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign Up
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default SignIn;
