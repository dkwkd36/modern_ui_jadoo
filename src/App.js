import React from "react";
import "./App.css";

import { Navbar } from "./components";
import { Header, Services, Destination } from "./containers";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Destination />
    </div>
  );
};

export default App;
