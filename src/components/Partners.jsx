import React from "react";
import "./Partners.css";

const Partners = () => {
  return (
    <>
      <div className="PartnersStuff">
        <h3>Our Partners</h3>
        <p>
          We are grateful for the support of our partners and sponsors who help
          us achieve our mission.
        </p>
        <div className="Wrapper">
          <div className="Partner p1">
            <img src="/src/assets/Pics/logo.jpg" alt="Logo" />
            <p>PetSmart Charities</p>
          </div>
          <div className="Partner p2">
            <img src="/src/assets/Pics/logo2.png" alt="Logo" />
            <p>Humane Society</p>
          </div>
          <div className="Partner p3">
            <img src="/src/assets/Pics/logo3.png" alt="Logo" />
            <p>Blue Buffalo</p>
          </div>
          <div className="Partner p4">
            <img src="/src/assets/Pics/logo4.png" alt="Logo" />
            <p>VCA Animal Hospitals</p>
          </div>
          <div className="Partner p5">
            <img src="/src/assets/Pics/logo5.png" alt="Logo" />
            <p>Local Veterinary Clinics</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
