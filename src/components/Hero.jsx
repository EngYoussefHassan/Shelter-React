import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Every tail has a tale- Start yours with Adoption
          </h1>
          <p className="max-w-sm text-center text-gray-500 md:text-left">
            Adopting a pet brings love, joy, and companionship while giving an
            animal a second chance. Find your perfect match today!
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              className="md:block rounded-[5px] bg-blue-950 text-white px-4 py-2 hover:bg-blue-800"
              onclick=""
            >
              Adopt Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
