import React from "react";

const Sponsor = () => {
  return (
    <>
      <div className="container mx-auto my-5 mt-10 px-4 flex flex-col items-center text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-5">
          To keep our services affordable, please consider supporting our work and buy us a bone.
        </h3>
        <button className="py-3 px-6 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all">
          Buy us a Bone
        </button>
      </div>
    </>
  );
};

export default Sponsor;
