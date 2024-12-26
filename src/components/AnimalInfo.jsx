import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";

const AnimalInfo = () => {
  const { id } = useParams(); // Get animal ID from the URL
  const [animal, setAnimal] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const docRef = doc(db, "animals", id); // Get animal document from Firestore
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAnimal(docSnap.data());

          // Fetch the image for the animal
          const imageRef = ref(storage, `images/${docSnap.data().name}.jpg`);
          const image = await getDownloadURL(imageRef);
          setImageURL(image);
        } else {
          console.error("No such animal!");
        }
      } catch (error) {
        console.error("Error fetching animal details:", error);
      }
    };

    fetchAnimal();
  }, [id]);

  if (!animal) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  // Function to handle the adoption process
  const handleAdopt = () => {
    // Navigate to the payment page with the animal's id as a parameter
    navigate(`/payment/${id}`);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            src={imageURL || "https://via.placeholder.com/400"}
            alt={animal.name}
            className="rounded-lg shadow-lg w-80"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{animal.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{animal.description}</p>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>
              <strong>Type:</strong> {animal.type}
            </li>
            <li>
              <strong>Age:</strong> {animal.age} month{animal.age > 1 ? 's' : ''}
            </li>
            <li>
              <strong>Gender:</strong> {animal.gender}
            </li>
            <li>
              <strong>Vaccination:</strong> {animal.vaccination}
            </li>
            <li>
              <strong>Potty Trained:</strong> {animal.pottyTraining ? 'Yes' : 'No'}
            </li>
            <li>
              <strong>Price:</strong> ${animal.price}
            </li>
          </ul>
          <button
            onClick={handleAdopt} // Add onClick to handle navigation
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Adopt Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalInfo;
