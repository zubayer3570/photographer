import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import googleSignInBtn from "../../images/icon/btn_google_signin_dark_pressed_web.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const [updateProfile] = useUpdateProfile(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/");
  };
  return (
    <div className="form-container">
      <Form className="form" onSubmit={handleSubmit}>
        <h2 className="text-center">Please Register</h2>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Your Name" />
        </Form.Group>
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
            label="Accepts terms and conditions"
          />
        </Form.Group>
        <Button disabled={!agreed} variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <img onClick={() => signInWithGoogle()} src={googleSignInBtn} alt="" />
      <Link
        style={{
          textDecoration: "none",
          display: "inline",
          marginBottom: "50px",
        }}
        to="/login"
      >
        Already have an Account?
      </Link>
    </div>
  );
};

export default Register;
