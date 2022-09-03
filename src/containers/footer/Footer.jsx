import React from "react";
import "./footer.css";
import { facebook, instagram, twitter, googleplay, playstore } from "./imports";

const Footer = () => {
  return (
    <div className="jadoo__footer section__padding">
      <div className="jadoo__footer-heading">
        <h1>Jadoo.</h1>
        <p>Book your trip in minute, get full Control for much longer.</p>
      </div>
      <div className="jadoo__footer-links">
        <div className="jadoo__footer-links__div">
          <h4>Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Mobile</p>
        </div>
        <div className="jadoo__footer-links__div">
          <h4>Contact</h4>
          <p>Help/FAQ</p>
          <p>Press</p>
          <p>Affilates</p>
        </div>
        <div className="jadoo__footer-links__div">
          <h4>More</h4>
          <p>Airlinefees</p>
          <p>Airline</p>
          <p>Low fare tips</p>
        </div>
      </div>
      <div className="jadoo__footer-social-app">
        <div className="jadoo__footer-social">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
        <h3>Discover our app</h3>
        <div className="jadoo__footer-app">
          <img src={googleplay} alt="googleplay" />
          <img src={playstore} alt="playstore" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
