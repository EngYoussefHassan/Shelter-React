import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "./auth";
import Services from "./Services";
import Sponsor from "./Sponsor";
import Contact from "./ContactUs";
import Partners from "./Partners";

const Hero = () => {
  const navigate = useNavigate();
  const [authModal, setAuthModal] = useState(null); // Tracks which modal is open ('signIn' or 'logIn')

  const handleAdoptNow = () => {
    navigate("/adopt-foster");
  };

  const openAuthModal = (type) => {
    setAuthModal(type); // Open the respective modal
  };

  const closeAuthModal = () => {
    setAuthModal(null); // Close the modal
  };

  return (
    <>
      {/* Top Navigation with Auth Buttons */}

      {/* Hero Section */}
      <div
        id="heroPart"
        className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0"
      >
        <div className="flex md:ml-20 flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold md:text-5xl">
            Every tail has a tale - Start yours with Adoption
          </h1>
          <p className="max-w-sm text-gray-500">
            Adopting a pet brings love, joy, and companionship while giving an
            animal a second chance. Find your perfect match today!
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              className="md:block rounded-[5px] bg-blue-950 text-white px-4 py-2 hover:bg-blue-800"
              onClick={handleAdoptNow}
            >
              Adopt Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/src/assets/pics/Dog.png" alt="Dog" />
        </div>
      </div>

      {/* Include Services, Sponsor, and Contact components directly on Hero page */}
      <Services />
      <Partners />
      <Sponsor />
      <Contact />
    </>
  );
};

export default Hero;
