import React from "react";
import traveller from "../../assets/Traveller.png";
import { BsFillPlayFill } from "react-icons/bs";
import "./header.css";

const Header = () => {
  return (
    <div className="jadoo__header section__padding">
      <div className="jadoo__header-content">
        <h3>Best Destinations around the world</h3>
        <h1>Travel, enjoy and live a new and full life</h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="jadoo__header-buttons">
          <button>Find out more</button>
          <button>
            <BsFillPlayFill />
          </button>
          <p>Play Demo</p>
        </div>
      </div>
      <div className="jadoo__header-image">
        <img src={traveller} alt="traveller" />
      </div>
    </div>
  );
};

export default Header;
