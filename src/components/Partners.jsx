import React from "react";
import "./Partners.css";
import InfiniteMarquee from "vanilla-infinite-marquee";
const Partners = () => {

  
  return (
    <>
      <div className="Wrapper">
        <div className="Partner p1">
          <img src="/src/assets/Pics/logo.jpg" alt="Logo" />
          <p>PetSmart Charities: A leading funder of animal welfare.</p>
        </div>
        <div className="Partner p2">
          <img src="/src/assets/Pics/logo2.png" alt="Logo" />
          <p>
            Humane Society: A national organization focused on animal welfare.
          </p>
        </div>
        <div className="Partner p3">
          <img src="/src/assets/Pics/logo3.png" alt="Logo" />
          <p>Blue Buffalo: A premium pet food brand.</p>
        </div>
        <div className="Partner p4">
          <img src="/src/assets/Pics/logo4.png" alt="Logo" />
          <p>
            VCA Animal Hospitals: A network of animal hospitals across the
            country.
          </p>
        </div>
        <div className="Partner p5">
          <img src="/src/assets/Pics/logo5.png" alt="Logo" />
          <p>
            Local Veterinary Clinics: Partnering with local vets can provide
            essential medical support.
          </p>
        </div>
      </div>
    </>
  );
};

export default Partners;
