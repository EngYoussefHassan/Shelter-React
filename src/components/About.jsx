import React, { useState } from "react";
import Partners from "./Partners";
import { Link } from "react-router-dom"; // Ensure you have Link from react-router-dom for navigation
import Footer from "./Footer";

const About = () => {
  const reviews = [
    {
      text: "Adopting my furry friend from FurEver Home was the best decision I ever made. The staff was incredibly supportive and made the process seamless.",
      author: "Sarah L.",
    },
    {
      text: "FurEver Home truly cares about the animals. The foster program gave me the opportunity to help pets in need and prepare them for adoption.",
      author: "Mark T.",
    },
    {
      text: "The educational workshops were so informative and inspiring. I feel more confident in advocating for animal welfare.",
      author: "Emily R.",
    },
    {
      text: "I couldn't have asked for a better adoption experience. FurEver Home matched us perfectly with our new furry family member!",
      author: "Jessica H.",
    },
    {
      text: "The team is incredibly compassionate and professional. They work tirelessly to ensure the safety and happiness of the animals.",
      author: "Daniel P.",
    },
    {
      text: "Becoming a foster parent was one of the most rewarding experiences. FurEver Home provided all the support I needed.",
      author: "Rachel M.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto my-5 px-4">
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-blue-900 text-center mb-8">About Us</h1>

      {/* Our Mission Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-blue-900">Our Mission</h2>
          <p className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
            Our mission is to rescue, rehabilitate, and rehome animals in need,
            while promoting the humane treatment of all animals.
          </p>
        </div>
        <div className="md:w-1/2 text-center md:text-right">
          <img
            src="/src/assets/Pics/dog2.jpg"
            alt="Mission Image"
            className="w-96 h-96 object-cover mb-4 md:mb-0 rounded-xl"
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1"></div>
        <div className="md:w-1/2 text-right order-1 md:order-2">
          <h2 className="text-4xl font-bold text-blue-900">Our Story</h2>
          <p className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
            Founded in 2018, FurEver Home was established to provide a safe haven
            for abandoned and neglected animals. Over the years, we have rescued
            thousands of animals and helped them find loving homes.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-blue-900">Our Team</h2>
          <p className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
            Our dedicated team of volunteers and staff work tirelessly to ensure
            the well-being of every animal that comes through our doors. From our
            founders to our newest volunteers, we all share a passion for animal
            welfare.
          </p>
        </div>
        <div className="md:w-1/2 text-center md:text-right">
          <img
            src="/src/assets/Pics/team.jpg"
            alt="Team Image"
            className="w-96 h-96 object-cover mb-4 md:mb-0 rounded-xl"
          />
        </div>
      </div>

      {/* Volunteers Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          <img
            src="/src/assets/Pics/vol.webp"
            alt="Volunteers Image"
            className="w-96 h-96 object-cover mb-4 md:mb-0 rounded-xl"
          />
        </div>
        <div className="md:w-1/2 text-right order-1 md:order-2">
          <h2 className="text-4xl font-bold text-blue-900">Volunteers</h2>
          <p className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
            Volunteers are the backbone of FurEver Home. Their dedication and
            hard work help us rescue and care for countless animals. Whether it’s
            fostering a pet, assisting with events, or helping with daily care,
            every volunteer plays a vital role. If you’re passionate about making
            a difference, join us today and be part of our mission!
          </p>
          <Link to="/volunteeringform" className="text-white bg-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-4 inline-block">
            Volunteer With Us
          </Link>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1"></div>
        <div className="md:w-1/2 text-right order-1 md:order-2">
          <h2 className="text-4xl font-bold text-blue-900">Our Impact</h2>
          <p className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
            Since our founding in 2018, FurEver Home has made a profound difference in the lives of countless animals. We have successfully rescued, rehabilitated, and rehomed thousands of pets, while building a compassionate community dedicated to improving animal welfare.
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-gray-100 px-8 py-6 rounded-xl shadow-lg border border-gray-300 my-10">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">
          What People Say About Us
        </h2>
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 text-blue-600 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            ❮
          </button>

          {/* Carousel */}
          <div className="w-2/3">
            <div
              className="bg-white px-6 py-4 rounded-lg shadow-md text-center"
              style={{ minHeight: "150px" }} // Fixed height for card
            >
              <p className="text-gray-700">{reviews[currentIndex].text}</p>
              <p className="text-right mt-4 text-blue-600 font-semibold">
                - {reviews[currentIndex].author}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 text-blue-600 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            ❯
          </button>
        </div>
      </div>
      <Partners/>
    </div>
  );
};

export default About;
