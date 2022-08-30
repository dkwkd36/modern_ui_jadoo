import React from "react";
import "./services.css";
import Service from "../../components/service/Service";
import { service1, service2, service3, service4 } from "./imports";
const servicesData = [
  {
    image: service1,
    title: "Calculated Weather",
    text: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    image: service2,
    title: "Best Flights",
    text: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    image: service3,
    title: "Local Events",
    text:
      "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    image: service4,
    title: "Customization",
    text: "We deliver outsourced aviation services for  military customers.",
  },
];

const Services = () => {
  return (
    <div className="jadoo__services section__padding">
      <div className="jadoo__services-heading">
        <p>CATEGORY</p>
        <h1>We Offer Best Services</h1>
      </div>
      <div className="jadoo__services-container">
        {servicesData.map((item, index) => (
          <Service
            image={item.image}
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
