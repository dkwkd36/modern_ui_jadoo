import React from "react";
import "./App.css";

import { Navbar } from "./components";
import { Header, Services, Destination, Book, Testimonial } from "./containers";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Destination />
      <Book />
      <Testimonial />
    </div>
  );
};

export default App;
