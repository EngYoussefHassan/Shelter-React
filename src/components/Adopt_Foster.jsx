import React, { useState } from "react";
import { Link } from "react-router-dom";

const Adopt_Foster = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const animals = [
    { id: 1, name: "Buddy", image: "/src/assets/pics/foradop1.jpg" },
    { id: 2, name: "Milo", image: "/src/assets/pics/foradop2.jpg" },
    { id: 3, name: "Bella", image: "/src/assets/pics/foradop3.jpg" },
    { id: 4, name: "Max", image: "/src/assets/pics/foradop4.jpg" },
    { id: 5, name: "Charlie", image: "/src/assets/pics/foradop5.jpg" },
    { id: 6, name: "Lucy", image: "/src/assets/pics/foradop6.jpg" },
    { id: 7, name: "Rocky", image: "/src/assets/pics/foradop7.jpg" },
    { id: 8, name: "Daisy", image: "/src/assets/pics/foradop8.jpg" },
    { id: 9, name: "Charlie", image: "/src/assets/pics/foradop9.jpg" },
    { id: 10, name: "Lucy", image: "/src/assets/pics/foradop10.jpg" },
    { id: 11, name: "Rocky", image: "/src/assets/pics/foradop11.jpg" },
    { id: 12, name: "Daisy", image: "/src/assets/pics/foradop12.jpg" },
    // Add more animals if needed...
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">
          Animals Available For Adoption/Foster
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {animals.slice(0, showMore ? animals.length : 8).map((animal) => (
            <Link
              key={animal.id}
              to={`/animal/${animal.id}`}
              className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all"
            >
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                {animal.name}{" "}
                <span className="text-sm text-gray-500">(ID: {animal.id})</span>
              </h4>
            </Link>
          ))}
        </div>

        <button
          onClick={handleToggle}
          className="mt-8 py-3 px-6 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Adopt_Foster;
