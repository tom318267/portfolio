import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <h4>Tom Rago</h4>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link about hvr-underline-from-center" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link my-work hvr-underline-from-center"
                href="#my-work"
              >
                My Work
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link hvr-underline-from-center" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className="name">Tom Rago</div>
      <nav className="nav-container">
        <a href="#about">
          <h4 className="hvr-underline-from-center">About Me</h4>
        </a>
        <a href="#my-work">
          <h4 className="hvr-underline-from-center">My Work</h4>
        </a>
        <a href="#contact">
          <h4 className="hvr-underline-from-center">Contact</h4>
        </a>
      </nav> */}
    </div>
  );
};

export default Navbar;
