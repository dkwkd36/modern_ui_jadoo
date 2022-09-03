import React from "react";
import "./cta.css";
import icon from "../../assets/icon.png";

const CTA = () => {
  return (
    <div className="jadoo__cta section__padding">
      <div className="jadoo__cta-content">
        <img src={icon} alt="icon" />
        <h1>
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h1>
        <div className="jadoo__cta-content__input">
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
