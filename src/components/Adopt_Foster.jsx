import React, { useEffect, useState } from "react";
import { storage, db } from "../firebase"; // Import Firebase config
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";

const AdoptFoster = () => {
  const [animalList, setAnimalList] = useState([]);
  const [animalImages, setAnimalImages] = useState({});

  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const animalCollection = collection(db, "animals"); // Your Firestore collection
        const data = await getDocs(animalCollection);
        const animals = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setAnimalList(animals);

        // Fetch images based on animal names
        const imagePromises = animals.map(async (animal) => {
          const imageRef = ref(storage, `images/${animal.name}.jpg`); // Image name matches animal name
          try {
            const imageUrl = await getDownloadURL(imageRef);
            return { [animal.name]: imageUrl };
          } catch (error) {
            console.error(`Error fetching image for ${animal.name}:`, error);
            return { [animal.name]: null }; // Handle missing images gracefully
          }
        });

        const imageResults = await Promise.all(imagePromises);
        const imageMap = Object.assign({}, ...imageResults);
        setAnimalImages(imageMap);
      } catch (error) {
        console.error("Error fetching animal data:", error);
      }
    };

    fetchAnimalData();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">
          Animals Available For Adoption/Foster
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {animalList.map((animal) => (
            <Link key={animal.id} to={`/animal/${animal.id}`}>
              <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
                <img
                  src={animalImages[animal.name] || "https://via.placeholder.com/150"}
                  alt={animal.name}
                  className="w-full h-56 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                  {animal.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdoptFoster;
