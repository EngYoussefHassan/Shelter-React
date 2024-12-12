import React, { useState } from "react";
import { db } from "../firebase"; // Ensure you have the correct import for Firestore
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate and useParams

const Payment = () => {
  const { id } = useParams(); // Get animal ID from URL
  const navigate = useNavigate(); // To programmatically navigate after payment
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    paymentMethod: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation (you can add more complex validation as needed)
    if (!formData.fullName || !formData.email || !formData.cardNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // Add the payment data to Firestore
      const docRef = await addDoc(collection(db, "paymentdetail"), {
        ...formData,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);

      // Update the animal document to mark it as sold
      const animalDocRef = doc(db, "animals", id); // Reference to the animal document
      await updateDoc(animalDocRef, { status: "sold" }); // Update the status field

      alert("Payment successful!"); // Show success message
      navigate("/adopt-foster"); // Redirect to the adopt/foster page after payment
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error processing your payment. Please try again.");
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-600 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white">Payment Portal</h1>
          <p className="text-xl text-gray-200 mt-4">
            Complete your payment securely below!
          </p>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Payment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Email Address"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
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
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Street Address"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="City"
              required
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="State/Province"
              required
            />
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Postal Code"
              required
            />
          </div>

          {/* Payment Method */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Payment Method
          </h2>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select Payment Method
              </option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Card Number"
              required
            />
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="CVV"
              maxLength="3"
              required
            />
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Expiry Date (MM/YY)"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Proceed to Pay
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Payment;
