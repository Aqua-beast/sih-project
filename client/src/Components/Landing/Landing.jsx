import React from "react";
import "./Landing.css";

import pointing__img from "../../assets/a.jpg";

const servicesData = [
  {
    title: "Service 1",
    description:
      "This is a description of Service 1. You can provide details about what this service includes and its benefits.",
  },
  {
    title: "Service 2",
    description:
      "Service 2 is another offering from our company. Explain what makes it unique and how it can help your customers.",
  },
  {
    title: "Service 3",
    description:
      "Service 3 is designed to meet specific needs. Describe its features and how it addresses customer requirements.",
  },
  {
    title: "Service 4",
    description:
      "Service 4 is designed to meet specific needs. Describe its features and how it addresses customer requirements.",
  },
];

const Landing = () => {
  return (
    <div className="container services">
      <h1 className="serices__heading">Services we offer.</h1>

      <div className="service__img">
        <img src={pointing__img} alt="image" />
      </div>

      <div className="service__box">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="service__button">
        <button className="button">
            Join Now 
             <i class="ri-corner-up-right-fill"></i>
             </button>
      </div>
    </div>
  );
};

export default Landing;
