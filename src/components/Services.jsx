import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Our Services
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Service Item 1: Adopt */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center justify-center mb-4 w-16 h-16 bg-blue-900 text-white rounded-full">
            <span className="text-2xl">01</span>
          </div>
          <h3 className="text-lg font-semibold text-blue-900">Adopt</h3>
          <p className="text-gray-700 text-center mt-2">
            The number of animals looking for homes is ever-growing. By adopting, you have the power to change a life.
          </p>
          <a
            className="mt-4 text-lg text-blue-900 hover:text-blue-400 transition-colors"
            href="#"
          >
            Adopt Now!
          </a>
        </div>

        {/* Service Item 2: Foster */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center justify-center mb-4 w-16 h-16 bg-blue-900 text-white rounded-full">
            <span className="text-2xl">02</span>
          </div>
          <h3 className="text-lg font-semibold text-blue-900">Foster</h3>
          <p className="text-gray-700 text-center mt-2">
            Sometimes all an animal needs is a temporary home before they are ready to go to their forever homes.
          </p>
          <a
            className="mt-4 text-lg text-blue-900 hover:text-blue-400 transition-colors"
            href="#"
          >
            Foster Now!
          </a>
        </div>

        {/* Service Item 3: Sponsor */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center justify-center mb-4 w-16 h-16 bg-blue-900 text-white rounded-full">
            <span className="text-2xl">03</span>
          </div>
          <h3 className="text-lg font-semibold text-blue-900">Sponsor</h3>
          <p className="text-gray-700 text-center mt-2">
            If you are unable to adopt or foster an animal, but still want to make a difference, the good news is that you can!
          </p>
          <a
            className="mt-4 text-lg text-blue-900 hover:text-blue-400 transition-colors"
            href="#"
          >
            Sponsor Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
