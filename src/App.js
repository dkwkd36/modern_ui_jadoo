import React from "react";
import "./App.css";

import { Navbar } from "./components";
import { Header, Services, Destination, Book } from "./containers";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Destination />
      <Book />
    </div>
  );
};

export default App;
