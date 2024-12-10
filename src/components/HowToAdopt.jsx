import React, { useState } from 'react';

const HowToAdopt = () => {
  const adoptionSteps = [
    {
      title: "Step 1: Research",
      description: "Learn about the types of pets available for adoption and what suits your lifestyle.",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      title: "Step 2: Visit Us",
      description: "Come to our shelter to meet our animals and find your perfect match.",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      title: "Step 3: Complete the Application",
      description: "Fill out our adoption application to start the process.",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      title: "Step 4: Home Check",
      description: "We may conduct a home check to ensure a safe environment for your new pet.",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      title: "Step 5: Bring Your Pet Home!",
      description: "Once approved, you can take your new furry friend home!",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStep = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % adoptionSteps.length);
  };

  const prevStep = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? adoptionSteps.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">How to Adopt</h1>
      <div className="flex flex-col items-center">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${((currentIndex + 1) / adoptionSteps.length) * 100}%` }}
          ></div>
        </div>
        <div className="relative flex items-center justify-center mb-8">
          {/* Previous Button */}
          <button
            onClick={prevStep}
            className="absolute left-4 text-blue-600 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            ❮
          </button>

          {/* Carousel */}
          <div className="w-2/3">
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105"
              style={{ height: "400px", width: "100%", maxWidth: "400px" }} // Fixed width and height
            >
              <img 
                src={adoptionSteps[currentIndex].image} 
                alt={adoptionSteps[currentIndex].title} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6 flex flex-col justify-between" style={{ height: "calc(100% - 16rem)" }}>
                <h2 className="text-2xl font-semibold mb-2">{adoptionSteps[currentIndex].title}</h2>
                <p className="text-gray-700">{adoptionSteps[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextStep}
            className="absolute right-4 text-blue-600 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToAdopt;
