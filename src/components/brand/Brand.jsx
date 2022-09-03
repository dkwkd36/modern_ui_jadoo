import React from "react";
import { alitalia, qantas, expedia, jetstar, axon } from "./imports";
import "./brand.css";

const Brand = () => {
  return (
    <div className="jadoo__brand section__padding">
      <div>
        <img src={axon} alt="axon" />
      </div>
      <div>
        <img src={jetstar} alt="jetstar" />
      </div>
      <div>
        <img src={expedia} alt="expedia" />
      </div>
      <div>
        <img src={qantas} alt="qantas" />
      </div>
      <div>
        <img src={alitalia} alt="alitalia" />
      </div>
    </div>
  );
};

export default Brand;
