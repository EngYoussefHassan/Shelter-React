import React from "react";
import { useParams, Link } from "react-router-dom";

const AnimalInfo = () => {
  const { id } = useParams();
  const animals = [
    { id: 1, name: "Buddy", image: "/src/assets/pics/foradop1.jpg", description: "Buddy is a playful and energetic dog who loves to play fetch." },
    { id: 2, name: "Milo", image: "/src/assets/pics/foradop2.jpg", description: "Milo is a gentle and affectionate cat who loves cuddling." },
    { id: 3, name: "Bella", image: "/src/assets/pics/foradop3.jpg", description: "Bella is a friendly and outgoing dog who enjoys outdoor adventures." },
    // Add more animals if needed...
  ];

  const animal = animals.find((animal) => animal.id === parseInt(id));

  if (!animal) {
    return <div>Animal not found.</div>;
  }

  return (
    <div className="container mx-auto text-center py-16">
      <h3 className="text-3xl font-bold text-gray-800 mb-10">{animal.name}</h3>
      <img src={animal.image} alt={animal.name} className="w-56 h-56 object-cover mb-4 mx-auto" />
      <p className="text-lg text-gray-700 mb-4">{animal.description}</p>
      <p className="text-sm text-gray-500">ID: {animal.id}</p>
      <Link to={`/payment/${animal.id}`}>
        <button className="mt-8 py-3 px-6 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all">
          Adopt {animal.name}
        </button>
      </Link>
    </div>
  );
};

export default AnimalInfo;
