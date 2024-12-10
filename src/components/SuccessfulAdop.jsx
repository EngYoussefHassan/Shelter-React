import React, { useState } from "react";

const SuccessfulAdop = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const animals = [
    { id: 1, name: "Buddy", image: "/src/assets/pics/succ.jpg", story: "Adopted by Sarah, a compassionate nurse who loves long walks in the park." },
    { id: 2, name: "Milo", image: "/src/assets/pics/succ2.jpg", story: "Fostered by James, a freelance graphic designer who enjoys painting." },
    { id: 3, name: "Bella", image: "/src/assets/pics/succ3.jpg", story: "Adopted by Emily, a high school teacher known for her love of animals." },
    { id: 4, name: "Max", image: "/src/assets/pics/succ4.jpg", story: "Adopted by Tom, a musician who loves to compose melodies." },
    { id: 5, name: "Charlie", image: "/src/assets/pics/succ5.jpg", story: "Adopted by Rachel, a photographer who enjoys nature walks." },
    { id: 6, name: "Lucy", image: "/src/assets/pics/succ6.jpg", story: "Fostered by Steve, a chef with a passion for culinary arts." },
    { id: 7, name: "Rocky", image: "/src/assets/pics/adop1.jpg", story: "Adopted by Linda, a yoga instructor who practices mindfulness." },
    { id: 8, name: "Daisy", image: "/src/assets/pics/adop2.jpg", story: "Adopted by Robert, a musician who loves playing music for his pets." },
    { id: 9, name: "Charlie", image: "/src/assets/pics/adop3.jpg", story: "Fostered by Anna, a writer who enjoys telling stories with her furry friend." },
    { id: 10, name: "Lucy", image: "/src/assets/pics/adop4.jpg", story: "Adopted by Chris, an adventurer who takes her on hiking trips." },
    { id: 11, name: "Rocky", image: "/src/assets/pics/Home.png", story: "Adopted by Michael, a firefighter who loves jogging with him." },
    { id: 12, name: "Daisy", image: "/src/assets/pics/logoo.jpg", story: "Fostered by Jessica, a vet who provides her with all the care she needs." },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">
          Successful Adoptions
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {animals.slice(0, showMore ? animals.length : 8).map((animal) => (
            <div
              key={animal.id}
              className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all"
            >
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                {animal.name} {" "}
                <span className="text-sm text-gray-500">(ID: {animal.id})</span>
              </h4>
              <p className="text-sm text-gray-800 px-4 pb-4">{animal.story}</p>
            </div>
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

export default SuccessfulAdop;
