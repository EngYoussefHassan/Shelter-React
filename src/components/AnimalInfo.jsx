import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase"; // Import Firebase config

const AnimalInfo = () => {
  const { id } = useParams(); // Extract ID from URL
  const [animal, setAnimal] = useState(null);
  const [animalImage, setAnimalImage] = useState(""); // To store the image URL

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        // Fetch the animal document from Firestore
        const animalDoc = doc(db, "animals", id);
        const docSnap = await getDoc(animalDoc);

        if (docSnap.exists()) {
          const animalData = { id: docSnap.id, ...docSnap.data() };
          setAnimal(animalData);

          // Fetch the image from Firebase Storage
          const imageRef = ref(storage, `images/${animalData.name}.jpg`); // Assuming image matches the name
          try {
            const imageUrl = await getDownloadURL(imageRef);
            setAnimalImage(imageUrl); // Set the image URL
          } catch (error) {
            console.error(`Error fetching image for ${animalData.name}:`, error);
            setAnimalImage("https://via.placeholder.com/150"); // Fallback image
          }
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching animal data:", error);
      }
    };

    fetchAnimal();
  }, [id]);

  if (!animal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto text-center py-16">
      <h3 className="text-3xl font-bold text-gray-800 mb-10">{animal.name}</h3>
      <img
        src={animalImage || "https://via.placeholder.com/150"}
        alt={animal.name}
        className="w-56 h-56 object-cover mb-4 mx-auto"
      />
      <p className="text-lg text-gray-700 mb-4">{animal.description}</p>
      <div className="text-sm text-gray-500 mb-4">
        <p>ID: {animal.id}</p>
        <p>Breed: {animal.breed}</p>
        <p>Age: {animal.age}</p>
        <p>Gender: {animal.gender}</p>
        <p>Vaccination: {animal.vaccination}</p>
        <p>Potty Training: {animal.pottytraining}</p>
      </div>
      <Link to={`/payment/${animal.id}`}>
        <button className="mt-8 py-3 px-6 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all">
          Adopt {animal.name}
        </button>
      </Link>
    </div>
  );
};

export default AnimalInfo;
