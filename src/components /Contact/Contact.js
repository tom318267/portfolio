import React, { useEffect } from "react";
import vectorBlue from "../../assets/vector-blue.png";
import Aos from "aos";
import "./Contact.scss";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="contact" className="Contact">
      <img src={vectorBlue} alt="" />
      <h1>Contact Me</h1>
      <div data-aos="flip-up" className="contact-container">
        <h4>
          I am currently looking for a web developer position, so if anybody is
          interested please let me know! My contact details are below...
        </h4>
        <h4>
          <strong>Email Address:</strong> tomrago580@gmail.com
        </h4>
        <h4>
          <strong>Phone Number:</strong> 267-566-0208
        </h4>
        <h4>
          <strong>LinkedIn:</strong>{" "}
          https://www.linkedin.com/in/tom-rago-36496065/
        </h4>
        <h3>Thank You!</h3>
      </div>
    </div>
  );
};

export default Contact;
