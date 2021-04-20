import React, { useEffect, useState } from "react";
import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://secure-meadow-94796.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <section className="services">
      <div className="common-title">
        <p>Services</p>

        <h1>
          WHAT WE’RE OFFERING<span className="dot-color">.</span>
        </h1>
      </div>

      <div className="container service-main">
        <div className="row">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
