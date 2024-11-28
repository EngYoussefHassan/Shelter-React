import React from "react";

const Partners = () => {
  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-lg-8 m-auto text-center">
          <h3>Our Beloved Partners</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="logo">
            <img src="./assets/Pics/logo.jpg" alt="PetSmart Charities Logo" />
            <p>PetSmart Charities: A leading funder of animal welfare.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="logo">
            <img src="./assets/Pics/logo2.png" alt="Humane Society Logo" />
            <p>Humane Society: A national organization focused on animal welfare.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="logo">
            <img src="./assets/Pics/logo3.png" alt="Blue Buffalo Logo" />
            <p>Blue Buffalo: A premium pet food brand.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="logo">
            <img src="./assets/Pics/logo4.png" alt="VCA Animal Hospitals Logo" />
            <p>VCA Animal Hospitals: A network of animal hospitals across the country.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="logo">
            <img src="./assets/Pics/logo5.png" alt="Local Veterinary Clinics Logo" />
            <p>Local Veterinary Clinics: Partnering with local vets can provide essential medical support.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
