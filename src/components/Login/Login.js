import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Form, Button } from "react-bootstrap";
import googleSignInBtn from "../../images/icon/btn_google_signin_dark_pressed_web.png";
import "./Login.css";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  // used email-password and google sign in
  const [agreed, setAgreed] = useState(false);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  let errorElement;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    if (error) {
      errorElement = <p className="text-danger">Error: {error.message}</p>;
      console.log(error.message);
    }
    if (user) {
      navigate(from, { replace: true });
    }
  };
  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate(from, { replace: true });
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
          <Form.Check
            onClick={() => setAgreed(!agreed)}
            type="checkbox"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        {errorElement}
        <Button disabled={!agreed} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <img onClick={handleGoogleSignIn} src={googleSignInBtn} alt="" />
      <Link
        style={{ textDecoration: "none", display: "inline" }}
        to="/register"
      >
        Register Now!
      </Link>
      <Link
        style={{ textDecoration: "none", display: "inline" }}
        to="/reset-password"
      >
        Forgotten Password?
      </Link>
    </div>
  );
};

export default Login;
