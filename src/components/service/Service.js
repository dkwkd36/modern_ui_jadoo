import React from "react";
import "./service.css";

const Service = ({ image, title, text }) => (
  <div className="jadoo__services-container__service">
    <div className="jadoo__services-container__service-image">
      <img src={image} alt="Service" />
    </div>
    <div className="jadoo__services-container__service-content">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default Service;
