import React from "react";
import "./SuccessfulAdoptions.css";

const SuccessfulAdoption = () => {
  return (
    <>
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">Successful Adoptions</h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/4">
            <img
              src="/src/assets/pics/adop1.png"
              className="w-24 -mt-14"
              alt=""
            ></img>
            <h5 className="text-lg font-bold">Max</h5>
            <p className="text-sm text-darkGrayishBlue">
              Adopted by Sarah, a compassionate nurse who loves long walks in
              the park.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/4">
            <img
              src="/src/assets/pics/adop2.png"
              className="w-24 -mt-14"
              alt=""
            ></img>
            <h5 className="text-lg font-bold">Luna</h5>
            <p className="text-sm text-darkGrayishBlue">
              Fostered by James, a freelance graphic designer who enjoys
              painting.
            </p>
          </div>
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/4">
            <img
              src="/src/assets/pics/adop3.png"
              className="w-24 -mt-14"
              alt=""
            ></img>
            <h5 className="text-lg font-bold">Buddy</h5>
            <p className="text-sm text-darkGrayishBlue">
              Adopted by Emily, a high school teacher known for her love of
              animals.
            </p>
          </div>
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/4">
            <img
              src="/src/assets/pics/adop4.png"
              className="w-24 -mt-14"
              alt=""
            ></img>
            <h5 className="text-lg font-bold">Whiskers</h5>
            <p className="text-sm text-darkGrayishBlue">
              Fostered by David, a retired firefighter who volunteers at the
              shelter.
            </p>
          </div>
        </div>
      </div>
    </>
    // <div className="container">
    //   <div className="row py-5 m-auto text-center">
    //     <div className="col-lg-5 m-auto text-center">
    //       <h2>Successful Adoptions</h2>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col-lg-3">
    //       <div className="card border-0 bg-light">
    //         <div className="cardbody">
    //           <img
    //             src="/src/assets/Pics/adop1.jpg"
    //             className="img-fluid"
    //             alt="Max"
    //           />
    //         </div>
    //       </div>
    //       <h6>
    //         Max: Adopted by Sarah, a compassionate nurse who loves long walks in
    //         the park.
    //       </h6>
    //     </div>

    //     <div className="col-lg-3">
    //       <div className="card border-0 bg-light">
    //         <div className="cardbody">
    //           <img
    //             src="/src/assets/Pics/adop4.jpg"
    //             className="img-fluid"
    //             alt="Luna"
    //           />
    //         </div>
    //       </div>
    //       <h6>
    //         Luna: Fostered by James, a freelance graphic designer who enjoys
    //         painting.
    //       </h6>
    //     </div>

    //     <div className="col-lg-3">
    //       <div className="card border-0 bg-light">
    //         <div className="cardbody">
    //           <img
    //             src="/src/assets/Pics/adop2.jpg"
    //             className="img-fluid"
    //             alt="Buddy"
    //           />
    //         </div>
    //       </div>
    //       <h6>
    //         Buddy: Adopted by Emily, a high school teacher known for her love of
    //         animals.
    //       </h6>
    //     </div>

    //     <div className="col-lg-3">
    //       <div className="card border-0 bg-light">
    //         <div className="cardbody">
    //           <img
    //             src="/src/assets/Pics/adop3.jpg"
    //             className="img-fluid"
    //             alt="Whiskers"
    //           />
    //         </div>
    //       </div>
    //       <h6>
    //         Whiskers: Fostered by David, a retired firefighter who volunteers at
    //         the shelter.
    //       </h6>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col-lg-6 text-center m-auto">
    //       <button className="btn2">Adopt Now</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SuccessfulAdoption;
