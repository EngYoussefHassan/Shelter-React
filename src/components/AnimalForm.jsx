import React, { useState } from "react";
import { db, storage } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const AnimalForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState(""); 
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(""); 
  const [breed, setBreed] = useState("");
  const [vaccination, setVaccination] = useState(""); 
  const [pottyTraining, setPottyTraining] = useState(""); 
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload image to Firebase Storage
      const imageRef = ref(storage, `images/${name}.jpg`);
      await uploadBytes(imageRef, image);

      // Add animal to Firestore
      const animalCollection = collection(db, "animals");
      await addDoc(animalCollection, {
        name,
        type,
        age,
        gender,
        breed,
        vaccination,
        pottyTraining, 
        description,
      });

      // Reset the form
      setName("");
      setType("");
      setAge("");
      setGender(""); 
      setBreed(""); 
      setVaccination("");
      setPottyTraining("");
      setDescription("");
      setImage(null);

      alert("Animal added successfully!");
    } catch (error) {
      console.error("Error adding animal:", error);
      alert("Failed to add animal.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Add a New Animal</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Gender</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Breed</label>
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Vaccination Status</label>
          <select
            value={vaccination}
            onChange={(e) => setVaccination(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select</option>
            <option value="Not Vaccinated">Not Vaccinated</option>
            <option value="Partially Vaccinated">Partially Vaccinated</option>
            <option value="Fully Vaccinated">Fully Vaccinated</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Potty Training</label>
          <select
            value={pottyTraining}
            onChange={(e) => setPottyTraining(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select</option>
            <option value="Not Trained">Not Trained</option>
            <option value="Partially Trained">Partially Trained</option>
            <option value="Fully Trained">Fully Trained</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Animal
        </button>
      </form>
    </div>
  );
};

export default AnimalForm;
