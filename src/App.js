import React from "react";
import "./App.css";

import { Navbar, Brand } from "./components";
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
      <Brand />
    </div>
  );
};

export default App;
