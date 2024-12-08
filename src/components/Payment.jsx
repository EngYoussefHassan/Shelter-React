import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { animal } = location.state || {}; // Get the passed animal object

  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-600 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white">Payment Portal</h1>
          <p className="text-xl text-gray-200 mt-4">
            Complete the adoption process for {animal?.name} with secure payment!
          </p>
        </div>

        {/* Animal Details */}
        {animal && (
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Adopting: {animal.name}{" "}
              <span className="text-sm text-gray-500">(ID: {animal.id})</span>
            </h2>
            <p className="text-gray-600">{animal.details || "No details available."}</p>
          </div>
        )}

        {/* Payment Form */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Payment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Email Address"
            />
            <input
              type="tel"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Phone Number"
            />
          </div>

          {/* Shipment Details */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Shipment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Street Address"
            />
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="City"
            />
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="State/Province"
            />
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Postal Code"
            />
          </div>

          {/* Payment Method */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Payment Method
          </h2>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <select className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="" disabled>
                Select Payment Method
              </option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Card Number"
            />
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="CVV"
              maxLength="3"
            />
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Expiry Date (MM/YY)"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
