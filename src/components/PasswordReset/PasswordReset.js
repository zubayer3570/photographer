import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordReset = () => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const handleReset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    toast("Reset email Sent!");
  };
  return (
    <div className="form-container">
      <Form className="form" onSubmit={handleReset}>
        <h2 className="text-center">Reset password</h2>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Reset Password
        </Button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default PasswordReset;
