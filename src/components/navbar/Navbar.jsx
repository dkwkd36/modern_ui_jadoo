import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { FaChevronDown } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./navbar.css";

const Links = () => (
  <>
    <p>Desitnations</p>
    <p>Hotels</p>
    <p>Flights</p>
    <p>Bookings</p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="jadoo__navbar">
      <div className="jadoo__navbar-logo">
        <img src={logo} alt="Jadoo" />
      </div>
      <div className="jadoo__navbar-links">
        <Links />
      </div>
      <div className="jadoo__navbar-sign">
        <p>Login</p>
        <button>Sign up</button>
        <p>
          EN <FaChevronDown />
        </p>
      </div>
      <div className="jadoo__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#212832"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#212832"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="jadoo__navbar-menu__container">
            <div className="jadoo__navbar-menu__container-links">
              <Links />
            </div>
            <div className="jadoo__navbar-menu__container-sign">
              <p>Login</p>
              <p>Sign up</p>
              <p>
                EN <FaChevronDown />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
