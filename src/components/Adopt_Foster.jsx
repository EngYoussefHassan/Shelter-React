import React, { useState } from "react";

const Adopt_Foster = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">
            Animals Available For Adoption/Foster
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop1.jpg"
                alt="Buddy"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Buddy <span className="text-sm text-gray-500">(ID: 001)</span>
              </h4>
            </div>

            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop10.jpg"
                alt="Milo"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Milo <span className="text-sm text-gray-500">(ID: 002)</span>
              </h4>
            </div>

            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop11.jpg"
                alt="Bella"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Bella <span className="text-sm text-gray-500">(ID: 003)</span>
              </h4>
            </div>

            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop12.jpg"
                alt="Max"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Max <span className="text-sm text-gray-500">(ID: 004)</span>
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop2.jpg"
                alt="Lucy"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Lucy <span className="text-sm text-gray-500">(ID: 005)</span>
              </h4>
            </div>

            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop3.jpg"
                alt="Charlie"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Charlie <span className="text-sm text-gray-500">(ID: 006)</span>
              </h4>
            </div>

            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop4.jpg"
                alt="Daisy"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Daisy <span className="text-sm text-gray-500">(ID: 007)</span>
              </h4>
            </div>

            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop5.jpg"
                alt="Rocky"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Rocky <span className="text-sm text-gray-500">(ID: 008)</span>
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop6.jpg"
                alt="Luna"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Luna <span className="text-sm text-gray-500">(ID: 009)</span>
              </h4>
            </div>

            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop7.jpg"
                alt="Cooper"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Cooper <span className="text-sm text-gray-500">(ID: 010)</span>
              </h4>
            </div>

            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop8.jpg"
                alt="Zoey"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Zoey <span className="text-sm text-gray-500">(ID: 011)</span>
              </h4>
            </div>

            <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
              <img
                src="/src/assets/pics/foradop9.jpg"
                alt="Finn"
                className="w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                Finn <span className="text-sm text-gray-500">(ID: 012)</span>
              </h4>
            </div>
          </div>

          {showMore && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
                <img
                  src="/src/assets/pics/foradop1.jpg"
                  alt="Sadie"
                  className="w-full h-56 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                  Sadie <span className="text-sm text-gray-500">(ID: 013)</span>
                </h4>
              </div>

              <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
                <img
                  src="/src/assets/pics/foradop2.jpg"
                  alt="Ollie"
                  className="w-full h-56 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                  Ollie <span className="text-sm text-gray-500">(ID: 014)</span>
                </h4>
              </div>

              <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
                <img
                  src="/src/assets/pics/foradop3.jpg"
                  alt="Molly"
                  className="w-full h-56 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                  Molly <span className="text-sm text-gray-500">(ID: 015)</span>
                </h4>
              </div>

              <div className="card shadow-lg rounded-lg overflow-hidden bg-white hover:transform hover:scale-105 transition-all">
                <img
                  src="/src/assets/pics/foradop4.jpg"
                  alt="Ruby"
                  className="w-full h-56 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-700 text-center py-4">
                  Ruby <span className="text-sm text-gray-500">(ID: 016)</span>
                </h4>
              </div>
            </div>
          )}

          <button
            onClick={handleToggle}
            className="mt-8 py-3 px-6 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Adopt_Foster;
