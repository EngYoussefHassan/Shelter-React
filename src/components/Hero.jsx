import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="navContainer">
        <nav class="navbar">
          <a href="#" class="logo">
            FurEver
          </a>

          <ul class="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#foster">Foster</a>
            </li>
            <li>
              <a href="#adopt">Adopt</a>
            </li>
          </ul>
        </nav>
        <div className="heroHero">
          <div className="wrap">
            <h1>Every Tail Has A Tale- Start Yours With Adoption.</h1>
            <button onclick="window.location.href='#adopt'">Adopt Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
