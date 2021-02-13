import React from "react";
import Navbar from "../Navbar/Navbar";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "./LandingPage.scss";

const LandingPage = () => {
  const lottieStyles = {
    position: "absolute",
    height: "635px",
    width: "561px",
    left: "45%",
    top: "50px",
  };
  return (
    <div className="LandingPage">
      <Navbar />
      <div className="landing-div">
        <h1 className="animate__animated animate__bounceInLeft">
          Hello, my name is Tom. I am a Web Developer!
        </h1>
        <h2>I specialize in front-end and back-end.</h2>
        <a href="#about">
          <button>About Me</button>
        </a>
      </div>

      <Player
        autoplay
        loop
        src="https://assets2.lottiefiles.com/packages/lf20_xsnsvpbs.json"
        style={lottieStyles}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
};

export default LandingPage;
