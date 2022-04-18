import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <h1 className="text-center m-5">Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
