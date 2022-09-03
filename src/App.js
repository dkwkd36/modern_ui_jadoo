import React from "react";
import "./App.css";

import { Navbar, Brand, CTA } from "./components";
import {
  Header,
  Services,
  Destination,
  Book,
  Testimonial,
  Footer,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Destination />
      <Book />
      <Testimonial />
      <Brand />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
