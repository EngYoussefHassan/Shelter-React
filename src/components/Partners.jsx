import React from "react";

const Partners = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12 bg-gradient-to-b from-gray-100 to-white">
      <h3 className="text-4xl font-bold text-blue-900 mb-4">Our Partners</h3>
      <p className="text-lg text-gray-700 max-w-3xl mb-8">
        We are grateful for the support of our partners and sponsors who help us achieve our mission.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img
            src="/src/assets/Pics/logo.jpg"
            alt="PetSmart Charities"
            className="w-24 h-24 object-contain mb-2"
          />
          <p className="text-gray-800 font-semibold">PetSmart Charities</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img
            src="/src/assets/Pics/logo2.png"
            alt="Humane Society"
            className="w-24 h-24 object-contain mb-2"
          />
          <p className="text-gray-800 font-semibold">Humane Society</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img
            src="/src/assets/Pics/logo3.png"
            alt="Blue Buffalo"
            className="w-24 h-24 object-contain mb-2"
          />
          <p className="text-gray-800 font-semibold">Blue Buffalo</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img
            src="/src/assets/Pics/logo4.png"
            alt="VCA Animal Hospitals"
            className="w-24 h-24 object-contain mb-2"
          />
          <p className="text-gray-800 font-semibold">VCA Animal Hospitals</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img
            src="/src/assets/Pics/logo5.png"
            alt="Local Veterinary Clinics"
            className="w-24 h-24 object-contain mb-2"
          />
          <p className="text-gray-800 font-semibold">Local Veterinary Clinics</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
