import React from "react";
import "./App.css";

import { Navbar } from "./components";
import { Header, Services } from "./containers";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
    </div>
  );
};

export default App;
