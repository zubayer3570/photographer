import { Button } from "react-bootstrap";
import React from "react";
import "./Service.css";
import { useNavigate } from "react-router-dom";

const Service = (props) => {
  const navigate = useNavigate();
  return (
    <div className="service">
      <img src={props.service.img} alt="" />
      <h3>{props.service.name}</h3>
      <p>{props.service.description}</p>
      <Button onClick={() => navigate("/checkout")} variant="primary">
        CheckOut
      </Button>
    </div>
  );
};

export default Service;
