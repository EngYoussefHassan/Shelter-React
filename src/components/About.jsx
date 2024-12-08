import React from "react";

const About = () => {
  return (
    <>
      <div className="container mx-auto my-5 mt-10 px-4">
        {/* Our Mission Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold text-blue-900">Our Mission</h1>
            <p className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
              Our mission is to rescue, rehabilitate, and rehome animals in need,
              while promoting the humane treatment of all animals.
            </p>
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <img src="/src/assets/Pics/dog2.jpg" alt="Mission Image" className="w-64 h-64 object-cover mb-4 md:mb-0 rounded-xl" />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1"></div>
          <div className="md:w-1/2 text-right order-1 md:order-2">
            <h1 className="text-4xl font-bold text-blue-900">Our Story</h1>
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

        {/* Our Impact Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1"></div>
          <div className="md:w-1/2 text-right order-1 md:order-2">
            <h1 className="text-4xl font-bold text-blue-900">Our Impact</h1>
            <p className="bg-gray-100 text-lg text-gray-800 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
              Thanks to the support of our community, we have successfully rescued
              and rehomed over 1,000 animals.
            </p>
          </div>
        </div>

        {/* Our Services Section */}
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

        {/* Reviews Section */}
        <div className="bg-gray-100 px-8 py-6 rounded-xl shadow-lg border border-gray-300 my-10">
          <h1 className="text-4xl font-bold text-blue-900 text-center mb-6">What People Say About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-white px-6 py-4 rounded-lg shadow-md">
              <p className="text-gray-700">
                "Adopting my furry friend from FurEver Home was the best decision I ever made. The staff was incredibly supportive and made the process seamless."
              </p>
              <p className="text-right mt-4 text-blue-600 font-semibold">- Sarah L.</p>
            </div>
            {/* Review 2 */}
            <div className="bg-white px-6 py-4 rounded-lg shadow-md">
              <p className="text-gray-700">
                "FurEver Home truly cares about the animals. The foster program gave me the opportunity to help pets in need and prepare them for adoption."
              </p>
              <p className="text-right mt-4 text-blue-600 font-semibold">- Mark T.</p>
            </div>
            {/* Review 3 */}
            <div className="bg-white px-6 py-4 rounded-lg shadow-md">
              <p className="text-gray-700">
                "The educational workshops were so informative and inspiring. I feel more confident in advocating for animal welfare."
              </p>
              <p className="text-right mt-4 text-blue-600 font-semibold">- Emily R.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
