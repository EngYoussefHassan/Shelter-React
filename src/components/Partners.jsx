import React from "react";

const Partners = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center space-y-8 px-4 py-8 bg-gray-50">
        <h3 className="text-3xl font-semibold text-blue-900">Our Partners</h3>
        <p className="text-lg text-gray-700 max-w-2xl">
          We are grateful for the support of our partners and sponsors who help
          us achieve our mission.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center">
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/Pics/logo.jpg"
              alt="PetSmart Charities"
              className="w-20 h-20 object-contain"
            />
            <p className="text-gray-800 mt-2">PetSmart Charities</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/Pics/logo2.png"
              alt="Humane Society"
              className="w-20 h-20 object-contain"
            />
            <p className="text-gray-800 mt-2">Humane Society</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/Pics/logo3.png"
              alt="Blue Buffalo"
              className="w-20 h-20 object-contain"
            />
            <p className="text-gray-800 mt-2">Blue Buffalo</p>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <img
              src="/src/assets/Pics/logo4.png"
              alt="VCA Animal Hospitals"
              className="w-20 h-20 object-contain"
            />
            <p className="text-gray-800 mt-2">VCA Animal Hospitals</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/Pics/logo5.png"
              alt="Local Veterinary Clinics"
              className="w-20 h-20 object-contain"
            />
            <p className="text-gray-800 mt-2">Local Veterinary Clinics</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
