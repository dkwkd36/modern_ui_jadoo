import React from "react";
import "./book.css";
import { yellow, greece, green, orange } from "./imports";

const Book = () => {
  return (
    <div className="jadoo__book section__padding">
      <div className="jadoo__book-content">
        <div className="jadoo__book-heading">
          <h3>Easy and Fast</h3>
          <h1>Book your next trip in 3 easy steps</h1>
        </div>
        <div className="jadoo__book-steps">
          <div className="jadoo__book-step">
            <div className="jadoo__book-step__step-image">
              <img src={yellow} alt="yellow" />
            </div>
            <div className="jadoo__book-step__step-content">
              <h4>Choose Destination</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="jadoo__book-step">
            <div className="jadoo__book-step__step-image">
              <img src={orange} alt="orange" />
            </div>
            <div className="jadoo__book-step__step-content">
              <h4>Make Payment</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="jadoo__book-step">
            <div className="jadoo__book-step__step-image">
              <img src={green} alt="green" />
            </div>
            <div className="jadoo__book-step__step-content">
              <h4>Reach Airport on Selected Date</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="jadoo__book-image">
        <img src={greece} alt="Greece" />
      </div>
    </div>
  );
};

export default Book;
