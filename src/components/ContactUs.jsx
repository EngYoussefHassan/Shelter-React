import React from "react";

const Contact = () => {
  return (
    <section className="bg-blue-900 py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <h6 className="text-lg text-gray-300 mt-2">Always Be In Touch</h6>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <div>
              <h6 className="text-lg font-semibold text-gray-200">LOCATION:</h6>
              <p className="text-gray-300">
                123 Paws Street, Barktown, Cuddle County, 56789, USA
              </p>
            </div>
            <div>
              <h6 className="text-lg font-semibold text-gray-200">PHONE:</h6>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div>
              <h6 className="text-lg font-semibold text-gray-200">EMAIL:</h6>
              <p className="text-gray-300">contact@fureverhome.org</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-2/3 space-y-6 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                className="form-input bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-input bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Last Name"
              />
            </div>
            <textarea
              className="form-textarea bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 w-full h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your Message Here"
            ></textarea>
            <button className="bg-gray-100 text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
