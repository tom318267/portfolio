import React, { useEffect } from "react";
import vector1 from "../../assets/vector.png";
import triumph from "../../assets/triumph.png";
import storybook from "../../assets/storybook.png";
import divine from "../../assets/divine.png";
import devconnector from "../../assets/devconnector.png";
import aboveall from "../../assets/aboveall.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./MyWork.scss";

const MyWork = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="my-work" className="MyWork">
      <img id="vectorAqua" src={vector1} alt="vector" />
      <h1>My Work</h1>
      <div data-aos="fade-left" className="work-container">
        <h3>
          <strong>Triumph Clothing </strong>is a website made with HTML, CSS,
          React, Redux, Nodejs, Stripe, and Firebase. You can shop for clothes,
          shoes, etc. Just add the items to the cart and check out!
        </h3>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://triumph-clothing.herokuapp.com/"
        >
          <img className="hvr-grow" src={triumph} alt="triumph-website" />
        </a>
      </div>
      <div data-aos="fade-right" className="work-container">
        <h3>
          <strong>StoryBook</strong> is a website made with HTML, SCSS, React,
          Redux, Nodejs, Bootstrap and MongoDB. You can tell your stories, and
          others can like/comment on your story!
        </h3>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://rocky-hamlet-26930.herokuapp.com/"
        >
          {" "}
          <img className="hvr-grow" src={storybook} alt="storybook-website" />
        </a>
      </div>
      <div data-aos="fade-left" className="work-container">
        <h3>
          <strong>DevConnector</strong> is a website made with HTML, SCSS,
          React, Redux, and MongoDB. Web developers can connect with other
          developers and help each other!
        </h3>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://tranquil-forest-38376.herokuapp.com/"
        >
          {" "}
          <img
            className="hvr-grow"
            src={devconnector}
            alt="storybook-website"
          />
        </a>
      </div>
      <div data-aos="fade-right" className="work-container">
        <h3>
          <strong>Divine</strong> is a psychic/medium website made with HTML,
          SCSS, React, Redux, Materialize, and MongoDB. You can review your
          favorite mediums with comments and a rating system!
        </h3>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://floating-beach-87392.herokuapp.com/"
        >
          <img className="hvr-grow" src={divine} alt="" />
        </a>
      </div>
      <div data-aos="fade-left" className="work-container">
        <h3>
          <strong>Above All Pest Control</strong> is a pest control company
          located in Langhorne, PA. This website was made with HTML, CSS,
          Bootstrap, Nodejs, and Mailgun!
        </h3>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://hidden-cliffs-10975.herokuapp.com/"
        >
          <img className="hvr-grow" src={aboveall} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MyWork;
