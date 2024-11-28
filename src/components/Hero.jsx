import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="background">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              FurEver Home
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Adopt
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Foster
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-12 pt-12 text-center ">
              <h1>Every tail has a tale—write yours with adoption.</h1>
              <button className="btn1 mt-3">Adopt Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
