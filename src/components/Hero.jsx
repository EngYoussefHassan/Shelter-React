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
      <div className="flex justify-between items-center bg-gray-100 py-4 px-6">
        <h1 className="text-xl font-bold text-gray-800">Pet Adoption</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => openAuthModal("signIn")}
            className="text-blue-700 border border-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white"
          >
            Sign In
          </button>
          <button
            onClick={() => openAuthModal("logIn")}
            className="text-blue-700 border border-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white"
          >
            Log In
          </button>
        </div>
      </div>

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

      {/* Authentication Modal */}
      {authModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {authModal === "signIn" ? "Sign In" : "Log In"}
            </h2>
            <Auth /> {/* Authentication Form */}
            <button
              onClick={closeAuthModal}
              className="mt-4 text-blue-700 border border-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Include Services, Sponsor, and Contact components directly on Hero page */}
      <Services />
      <Partners/>
      <Sponsor />
      <Contact />
    </>
  );
};

export default Hero;
