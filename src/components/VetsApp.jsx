import React, { useState } from "react";
import { db } from "../firebase"; // Adjust the path as necessary
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

const VetsApp = () => {
  // Mock list of veterinarians
  const vets = [
    {
      id: 1,
      name: "Dr. Emily Carter",
      specialty: "Small Animal Care",
      location: "Downtown Clinic",
      image: "/src/assets/Pics/vet1.jpg",
    },
    {
      id: 2,
      name: "Dr. Michael Nguyen",
      specialty: "Exotic Animals",
      location: "Westside Veterinary Center",
      image: "/src/assets/pics/vet2.jpg",
    },
    {
      id: 3,
      name: "Dr. Lisa Adams",
      specialty: "Surgery and Orthopedics",
      location: "North Animal Hospital",
      image: "/src/assets/Pics/vet3.jpg",
    },
  ];

  // State for appointment form
  const [appointment, setAppointment] = useState({
    vetId: "",
    petName: "",
    ownerName: "",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add appointment to Firestore
      const docRef = await addDoc(collection(db, "Appointments"), appointment);
      console.log("Document written with ID: ", docRef.id);
      setSubmitted(true);
      setError("");

      // Reset the form fields
      setAppointment({
        vetId: "",
        petName: "",
        ownerName: "",
        date: "",
        time: "",
        notes: "",
      });

    } catch (e) {
      console.error("Error adding document: ", e);
      setError("Failed to submit appointment. Please try again.");
    }
    
    setTimeout(() => setSubmitted(false), 5000); // Reset message after 5 seconds
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
        Veterinarians & Appointments
      </h1>

      {/* Description Section */}
      <div className="mb-10">
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          At our clinic, we partner with experienced veterinarians who specialize in a range of services, including small animal care, exotic animal treatment, and surgical procedures. Our mission is to provide high-quality care for your pets and ensure their well-being. Use our easy appointment system to schedule a visit with one of our trusted professionals.
        </p>
      </div>

      {/* Veterinarian List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{vet.name}</h2>
              <p className="text-gray-700">{vet.specialty}</p>
              <p className="text-gray-500 text-sm">{vet.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Form */}
      <div className="bg-gray-100 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Schedule an Appointment
        </h2>
        {submitted && (
          <p className="text-green-600 mb-4">Appointment successfully submitted!</p>
        )}
        {error && (
          <p className="text-red-600 mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Veterinarian Selection */}
          <div>
            <label htmlFor="vetId" className="block text-gray-700 font-medium">
              Select Veterinarian
            </label>
            <select
              name="vetId"
              id="vetId"
              value={appointment.vetId}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Select a Veterinarian --</option>
              {vets.map((vet) => (
                <option key={vet.id} value={vet.id}>
                  {vet.name} - {vet.specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Pet Name */}
          <div>
            <label htmlFor="petName" className="block text-gray-700 font-medium">
              Pet's Name
            </label>
            <input
              type="text"
              name="petName"
              id="petName"
              value={appointment.petName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Owner's Name */}
          <div>
            <label htmlFor="ownerName" className="block text-gray-700 font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="ownerName"
              id="ownerName"
              value={appointment.ownerName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={appointment.date}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Time */}
          <div>
            <label htmlFor="time" className="block text-gray-700 font-medium">
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              value={appointment.time}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="notes" className="block text-gray-700 font-medium">
              Additional Notes
            </label>
            <textarea
              name="notes"
              id="notes"
              value={appointment.notes}
              onChange={handleChange}
              rows="3"
              className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Any special requests or concerns?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Submit Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default VetsApp;
