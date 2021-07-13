import React, { useEffect } from "react";
import vector1 from "../../assets/vector.png";
import triumph from "../../assets/triumph.png";
import storybook from "../../assets/storybook.png";
import bakery from "../../assets/bakery.png";
import divine from "../../assets/divine.png";
import devconnector from "../../assets/devconnector.png";
import aboveall from "../../assets/aboveall.png";
import splash from "../../assets/splash.png";
import delectable from "../../assets/delectable.png";
import hulu2 from "../../assets/hulu2.png";
import linkedin from "../../assets/linkedin.png";
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
          <strong>LinkedIn Clone</strong> is a clone of LinkedIn made with
          React, Material UI, and Firebase!
        </h3>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://linked-in-clone-d75b2.web.app/"
        >
          {" "}
          <img className="hvr-grow" src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div data-aos="fade-left" className="work-container">
        <h3>
          <strong>Kristen's Bakery</strong> is a website made with HTML, SCSS,
          React, Redux, Nodejs, Materialize, Firebase and Stripe. You can
          purchase baked goods using stripe!
        </h3>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://still-fortress-50463.herokuapp.com/"
        >
          {" "}
          <img className="hvr-grow" src={bakery} alt="kristen's-bakery" />
        </a>
      </div>
      <div data-aos="fade-left" className="work-container">
        <h3>
          <strong>Hulu 2.0</strong> is a clone of hulu using React, Next.js, and
          Tailwind CSS!
        </h3>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://hulu2-nine.vercel.app/"
        >
          {" "}
          <img className="hvr-grow" src={hulu2} alt="hulu2" />
        </a>
      </div>
      <div data-aos="fade-right" className="work-container">
        <h3>
          <strong>Delectable</strong> is a website made with HTML, SCSS, React,
          and Context. You can search for any meal and it will give you the
          recipe, and instructions on how to make it!
        </h3>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://delectable-app.netlify.app/"
        >
          {" "}
          <img className="hvr-grow" src={delectable} alt="delectable" />
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
      <div data-aos="fade-left" className="work-container">
        <h3>
          <strong>Splash</strong> is a website made with HTML, SCSS, React, and
          Context. You can search for any cocktail and you will get the
          ingredients, glass-type, and instructions!
        </h3>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://splashdb.netlify.app/"
        >
          {" "}
          <img className="hvr-grow" src={splash} alt="splash" />
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
