import React, { useEffect, useState } from "react";
import { storage, db } from "../firebase"; // Import Firebase config
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";


const AdoptFoster = () => {
  const [animalList, setAnimalList] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [animalImages, setAnimalImages] = useState({});
  const [filters, setFilters] = useState({
    type: "",
    age: "",
    gender: "",
    vaccination: "",
    pottyTraining: "",
  });

  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const animalCollection = collection(db, "animals"); // Your Firestore collection
        const data = await getDocs(animalCollection);
        const animals = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setAnimalList(animals);
        setFilteredAnimals(animals);

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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  useEffect(() => {
    const applyFilters = () => {
      let filtered = animalList;

      if (filters.type) {
        filtered = filtered.filter((animal) =>
          animal.type.toLowerCase().includes(filters.type.toLowerCase())
        );
      }
      if (filters.age) {
        filtered = filtered.filter((animal) => animal.age === filters.age);
      }
      if (filters.gender) {
        filtered = filtered.filter((animal) =>
          animal.gender.toLowerCase() === filters.gender.toLowerCase()
        );
      }
      if (filters.vaccination) {
        filtered = filtered.filter(
          (animal) => animal.vaccination.toLowerCase() === filters.vaccination.toLowerCase()
        );
      }
      if (filters.pottyTraining) {
        filtered = filtered.filter(
          (animal) => animal.pottyTraining.toLowerCase() === filters.pottyTraining.toLowerCase()
        );
      }

      setFilteredAnimals(filtered);
    };

    applyFilters();
  }, [filters, animalList]);

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">
          Animals Available For Adoption/Foster
        </h3>

        {/* Filter Section */}
        <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Filter Animals</h4>
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {/* Animal Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="type">
                Type
              </label>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="e.g., Dog, Cat"
                className="border border-gray-300 rounded p-2 w-full"
                value={filters.type}
                onChange={handleFilterChange}
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="age">
                Age
              </label>
              <input
                type="text"
                name="age"
                id="age"
                placeholder="e.g., 2"
                className="border border-gray-300 rounded p-2 w-full"
                value={filters.age}
                onChange={handleFilterChange}
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="gender">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="border border-gray-300 rounded p-2 w-full"
                value={filters.gender}
                onChange={handleFilterChange}
              >
                <option value="">Any</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Vaccination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="vaccination">
                Vaccination
              </label>
              <select
                name="vaccination"
                id="vaccination"
                className="border border-gray-300 rounded p-2 w-full"
                value={filters.vaccination}
                onChange={handleFilterChange}
              >
                <option value="">Any</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Potty Training */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="pottyTraining">
                Potty Training
              </label>
              <select
                name="pottyTraining"
                id="pottyTraining"
                className="border border-gray-300 rounded p-2 w-full"
                value={filters.pottyTraining}
                onChange={handleFilterChange}
              >
                <option value="">Any</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </form>
        </div>

        {/* Animal List Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredAnimals.map((animal) => (
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
                {/* Show "Sold" status if applicable */}
                {animal.status === "sold" && (
                  <p className="text-red-500 font-bold text-center">Sold</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdoptFoster;
