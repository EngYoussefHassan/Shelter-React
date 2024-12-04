import React from "react";

const Hero = () => {
  return (
    hello Mariam
    <>
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
              className="md:block  rounded-[5px] bg-blue-950 text-white px-4 py-2 hover:bg-blue-800"
              onClick=""
            >
              Adopt Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/src/assets/pics/Dog.png" alt="Dog" />
        </div>
      </div>
    </>
  );
};

export default Hero;
