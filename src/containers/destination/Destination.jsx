import React from "react";
import "./destination.css";
import { Destination1, Destination2, Destination3 } from "./imports";

const Destination = () => {
  return (
    <div className="jadoo__destination section__padding">
      <div className="jadoo__destination-heading">
        <h3>Top Selling</h3>
        <h1>Top Destinations</h1>
      </div>
      <div className="jadoo__destination-container">
        <div className="jadoo__destination-card">
          <img src={Destination1} alt="Destination" />
        </div>
        <div className="jadoo__destination-card">
          <img src={Destination2} alt="Destination" />
        </div>
        <div className="jadoo__destination-card">
          <img src={Destination3} alt="Destination" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
