import React from "react";

const About = () => {
  return (
    <>
      <div className="container mx-auto my-5 mt-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold text-blue-900">Our Mission</h1>
            <p className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
              Our mission is to rescue, rehabilitate, and rehome animals in need,
              while promoting the humane treatment of all animals.
            </p>
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <img src="/src/assets/Pics/foradop1.jpg" alt="Mission Image" className="w-64 h-64 object-cover mb-4 md:mb-0 rounded-xl" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          </div>
          <div className="md:w-1/2 text-right order-1 md:order-2">
            <h1 className="text-4xl font-bold text-blue-900">Our Story</h1>
            <p className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
              Founded in 2018, FurEver Home was established to provide a safe haven
              for abandoned and neglected animals. Over the years, we have rescued
              thousands of animals and helped them find loving homes.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold text-blue-900">Our Team</h1>
            <p className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
              Our dedicated team of volunteers and staff work tirelessly to ensure
              the well-being of every animal that comes through our doors. From our
              founders to our newest volunteers, we all share a passion for animal
              welfare.
            </p>
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <img src="/src/assets/Pics/team.jpg" alt="Team Image" className="w-64 h-64 object-cover mb-4 md:mb-0 rounded-xl" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          </div>
          <div className="md:w-1/2 text-right order-1 md:order-2">
            <h1 className="text-4xl font-bold text-blue-900">Our Impact</h1>
            <p className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
              Thanks to the support of our community, we have successfully rescued
              and rehomed over 1,000 animals.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold text-blue-900">Our Services</h1>
            <ul className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300 list-disc list-inside">
              <li>
                <strong>Adoption Services:</strong> Learn about our adoption process and meet our adorable adoptable pets.
              </li>
              <li>
                <strong>Foster Programs:</strong> Become a foster parent and provide temporary care for animals in need.
              </li>
              <li>
                <strong>Volunteer Opportunities:</strong> Join our team and make a difference in the lives of animals.
              </li>
              <li>
                <strong>Educational Programs:</strong> Participate in workshops and events to learn more about animal care and advocacy.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <img src="/src/assets/Pics/logoo.jpg" alt="Services Image" className="w-64 h-64 object-cover mb-4 md:mb-0 rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
