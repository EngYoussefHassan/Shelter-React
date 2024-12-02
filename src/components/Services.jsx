import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <>
      <div className="container flex flex-col px-4 mx-auto my-5 mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            Our Services
          </h2>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-blue-200 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-900">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">Adopt</h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">Adopt</h3>
              <p className="text-darkGrayishBlue">
                The number of animals looking for homes is ever-growing. By
                adopting, you have the power to change a life.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-blue-200 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-900">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Foster
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">Foster</h3>
              <p className="text-darkGrayishBlue">
                Sometimes all an animal needs is a temporary home before they
                are ready to go to their forever homes.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-blue-200 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-900">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Sponser
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Sponser
              </h3>
              <p className="text-darkGrayishBlue">
                If you are unable to adopt or foster an animal, but still want
                to make a difference, the good news is that you can!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="container py-5">
    //   <div className="row text-center mt-3 mb-3">
    //     <div className="col-lg-7 m-auto">
    //       <div className="row mt-3 mb-3">
    //         <div className="col-lg-4">
    //           <div className="adopt">
    //             <img src="/src/assets/Pics/houselogo.png" alt="Adopt Logo" />
    //             <h5>ADOPT</h5>
    //             <p>
    //               The number of animals looking for homes is ever-growing. By
    //               adopting, you have the power to change a life.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-lg-4">
    //           <div className="foster">
    //             <img src="/src/assets/Pics/bonelogo.png" alt="Foster Logo" />
    //             <h5>FOSTER</h5>
    //             <p>
    //               Sometimes all an animal needs is a temporary home before they
    //               are ready to go to their forever homes.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-lg-4">
    //           <div className="sponser">
    //             <img src="/src/assets/Pics/fosterlogo.png" alt="Sponsor Logo" />
    //             <h5>SPONSER</h5>
    //             <p>
    //               If you are unable to adopt or foster an animal, but still want
    //               to make a difference, the good news is that you can!
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Services;
