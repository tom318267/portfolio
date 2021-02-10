import React, { useEffect } from "react";
import vectorPurple from "../../assets/vector-purple.png";
import Aos from "aos";
import "./About.scss";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="about" className="About">
      <img id="purple-vector" src={vectorPurple} alt="vector" />
      <h1>About Me</h1>
      <div data-aos="fade-up" className="about-container">
        <h5>
          My name is Tom Rago, I am a self-taught web developer. I started
          learning about three years ago. I was stuck in a dead-end job and
          wasn’t very happy with where my career was going. I searched and
          searched on the internet to find a career I could learn on own. There
          were decent jobs that I found, but nothing I was interested in. <br />
          <br />
          Then web development caught my eye. I was always interested in
          technology and the web, so I figured I would give it a shot. After
          reading up on others that have switched careers to web development, I
          found that it was possible. It was inspiring. If I put in the hard
          work and tried my best, I could finally have a career I was proud of
          and make a great living for myself. <br />
          <br />I have taken courses online such as Udemy, Codeacademy, and
          Treehouse. I found that Udemy was the best learning tool for me and
          was not expensive at all. They have great teachers, and if you have
          any questions about the course or run into any problems, they will
          respond rather swiftly. <br />
          <br /> I have learned HTML, CSS, Javascript, React, Redux, Nodejs, and
          many more libraries/frameworks. I enjoy creating websites and would
          love to make my new career. All I need is someone to give me a chance
          and I know I will become a great asset to any company willing to give
          me the opportunity.
        </h5>
      </div>
    </div>
  );
};

export default About;
