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
    <section className="bg-gradient-to-b from-blue-900 to-blue-600 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white">Payment Portal</h1>
          <p className="text-xl text-gray-200 mt-4">
            Support our cause by making a secure payment!
          </p>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Payment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Input Fields */}
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
            <select
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={reason}
              onChange={handleReasonChange}
            >
              <option value="" disabled>
                Select Payment Reason
              </option>
              <option value="adoption">Adoption</option>
              <option value="fostering">Fostering</option>
              <option value="sponsor">Sponsorship</option>
            </select>
          </div>

          {/* Conditional Fields */}
          {reason === "sponsor" && (
            <div className="mb-6">
              <input
                type="number"
                className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter Amount"
              />
            </div>
          )}
          {(reason === "adoption" || reason === "fostering") && (
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={selectedAnimal}
                onChange={handleAnimalChange}
              >
                <option value="" disabled>
                  Select Animal
                </option>
                {Object.entries({
                  "001": "Buddy",
                  "002": "Milo",
                  "003": "Bella",
                  "004": "Max",
                  "005": "Lucy",
                  "006": "Charlie",
                  "007": "Daisy",
                  "008": "Rocky",
                  "009": "Luna",
                  "010": "Cooper",
                  "011": "Zoey",
                  "012": "Finn",
                  "013": "Sadie",
                  "014": "Ollie",
                  "015": "Molly",
                  "016": "Toby",
                }).map(([id, name]) => (
                  <option key={id} value={id}>
                    {name} (ID: {id})
                  </option>
                ))}
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
            </div>
          )}

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
