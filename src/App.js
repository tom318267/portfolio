import React from "react";
import "./App.css";
import About from "./components /About/About";
import Contact from "./components /Contact/Contact";
import LandingPage from "./components /LandingPage/LandingPage";
import MyWork from "./components /MyWork/MyWork";

const App = () => {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <MyWork />
      <Contact />
    </div>
  );
};

export default App;
