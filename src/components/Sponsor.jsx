import React from "react";
import { useNavigate } from "react-router-dom";

const Sponsor = () => {
  const navigate = useNavigate();

  const handleBuyBone = () => {
    navigate("/payment"); // Navigate to the payment page
  };

  return (
    <div className="container mx-auto my-10 px-4 flex flex-col items-center text-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg p-6">
      <h3 className="text-4xl font-bold text-gray-800 mb-6">
        Help Us Keep the Love Flowing!
      </h3>
      <p className="text-lg text-gray-600 mb-4">
        To ensure our services remain affordable, please consider supporting our mission by helping us out. Every bit counts!
      </p>
      <button
        onClick={handleBuyBone}
        className="py-3 px-8 bg-blue-500 text-white text-lg font-semibold rounded-full shadow hover:bg-blue-600 transition-all transform hover:scale-105"
      >
        Buy Us a Bone 🦴
      </button>
    </div>
  );
};

export default Sponsor;
