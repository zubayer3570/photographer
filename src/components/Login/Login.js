import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Form, Button } from "react-bootstrap";
import googleSignInBtn from "../../images/icon/btn_google_signin_dark_pressed_web.png";
import "./Login.css";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <Form className="form" onSubmit={handleSubmit}>
        <h2 className="text-center">Please Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <img src={googleSignInBtn} alt="" />
      <Link
        style={{ textDecoration: "none", display: "inline" }}
        to="/register"
      >
        Register Now!
      </Link>
    </div>
  );
};

export default Login;
