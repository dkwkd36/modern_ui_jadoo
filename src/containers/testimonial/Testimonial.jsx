import React, { useRef, useState } from "react";
import "./testimonial.css";
import testimonial from "../../assets/testimonial.png";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const Testimonial = () => {
  const [position, setPosition] = useState(0);
  const imageRef = useRef(null);
  const upArrow = () => {
    if (position < 0) {
      setPosition(position + imageRef.current.height);
    }
  };
  const downArrow = () => {
    if (position > -(imageRef.current.height * 2)) {
      setPosition(position - imageRef.current.height);
    }
  };

  return (
    <div className="jadoo__testimonial section__padding">
      <div className="jadoo__testimonial-heading">
        <h3>Testimonials</h3>
        <h1>What people say about Us.</h1>
      </div>
      <div className="jadoo__testimonial-container">
        <div
          className="jadoo__testimonial-slide"
          style={{ top: `${position}px` }}
        >
          <div className="jadoo__testimonial-card">
            <img src={testimonial} alt="testimonial" ref={imageRef} />
          </div>
          <div className="jadoo__testimonial-card">
            <img src={testimonial} alt="testimonial" />
          </div>
          <div className="jadoo__testimonial-card">
            <img src={testimonial} alt="testimonial" />
          </div>
        </div>
        <div className="jadoo__testimonial-sidebar">
          <BsChevronUp
            onClick={upArrow}
            style={position === 0 ? { color: "#BCB7C2" } : { color: "#3E2E4D" }}
          />
          <BsChevronDown
            onClick={downArrow}
            style={
              position === -800 ? { color: "#BCB7C2" } : { color: "#3E2E4D" }
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
