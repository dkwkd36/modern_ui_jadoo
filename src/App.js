import React from "react";
import "./App.css";

import { Navbar } from "./components";
import { Header } from "./containers";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
