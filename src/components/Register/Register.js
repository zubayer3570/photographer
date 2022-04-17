import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import googleSignInBtn from "../../images/icon/btn_google_signin_dark_pressed_web.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <Form className="form" onSubmit={handleSubmit}>
        <h2 className="text-center">Please Register</h2>
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
      <Link style={{ textDecoration: "none", display: "inline" }} to="/login">
        Already have an Account?
      </Link>
    </div>
  );
};

export default Register;
