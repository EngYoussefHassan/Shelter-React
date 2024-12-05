import React, { useState } from "react";

const Payment = () => {
  const [reason, setReason] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [amount, setAmount] = useState("");

  const handleReasonChange = (event) => {
    setReason(event.target.value);
    setSelectedAnimal("");
    setAmount("");
  };

  const handleAnimalChange = (event) => {
    const animalId = event.target.value;
    setSelectedAnimal(animalId);

    const animalPrices = {
      "001": 100, // Buddy
      "002": 150, // Milo
      "003": 200, // Bella
      "004": 250, // Max
      "005": 120, // Lucy
      "006": 130, // Charlie
      "007": 140, // Daisy
      "008": 160, // Rocky
      "009": 170, // Luna
      "010": 180, // Cooper
      "011": 190, // Zoey
      "012": 210, // Finn
      "013": 220, // Sadie
      "014": 230, // Ollie
      "015": 240, // Molly
      "016": 260, // Toby
    };

    setAmount(animalPrices[animalId] || "");
  };

  return (
    <section className="bg-blue-900 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">Payment Information</h1>
          <p className="text-lg text-gray-300 mt-2">
            Help us make a difference by contributing!
          </p>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Fields */}
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Name"
            />
            <input
              type="email"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Email"
            />
            <input
              type="tel"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Phone Number"
            />
            <select
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={reason}
              onChange={handleReasonChange}
            >
              <option value="" disabled>
                Select Reason for Payment
              </option>
              <option value="adoption">Adoption</option>
              <option value="fostering">Fostering</option>
              <option value="sponsor">Sponsor</option>
            </select>
          </div>

          {/* Conditional Fields */}
          {reason === "sponsor" && (
            <div className="mt-6">
              <input
                type="text"
                className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Amount"
              />
            </div>
          )}
          {(reason === "adoption" || reason === "fostering") && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={selectedAnimal}
                onChange={handleAnimalChange}
              >
                <option value="" disabled>
                  Select Animal ID
                </option>
                <option value="001">Buddy (ID: 001)</option>
                <option value="002">Milo (ID: 002)</option>
                <option value="003">Bella (ID: 003)</option>
                <option value="004">Max (ID: 004)</option>
                <option value="005">Lucy (ID: 005)</option>
                <option value="006">Charlie (ID: 006)</option>
                <option value="007">Daisy (ID: 007)</option>
                <option value="008">Rocky (ID: 008)</option>
                <option value="009">Luna (ID: 009)</option>
                <option value="010">Cooper (ID: 010)</option>
                <option value="011">Zoey (ID: 011)</option>
                <option value="012">Finn (ID: 012)</option>
                <option value="013">Sadie (ID: 013)</option>
                <option value="014">Ollie (ID: 014)</option>
                <option value="015">Molly (ID: 015)</option>
                <option value="016">Toby (ID: 016)</option>
              </select>
              {amount && (
                <input
                  type="text"
                  className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={`$${amount}`}
                  readOnly
                />
              )}
            </div>
          )}

          {/* Payment Details */}
          {reason && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                placeholder="Credit Card Number"
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
