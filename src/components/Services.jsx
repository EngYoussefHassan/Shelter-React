import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="container py-5">
      <div className="row text-center mt-3 mb-3">
        <div className="col-lg-7 m-auto">
          <div className="row mt-3 mb-3">
            <div className="col-lg-4">
              <div className="adopt">
                <img src="/src/assets/Pics/houselogo.png" alt="Adopt Logo" />
                <h5>ADOPT</h5>
                <p>
                  The number of animals looking for homes is ever-growing. By
                  adopting, you have the power to change a life.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="foster">
                <img src="/src/assets/Pics/bonelogo.png" alt="Foster Logo" />
                <h5>FOSTER</h5>
                <p>
                  Sometimes all an animal needs is a temporary home before they
                  are ready to go to their forever homes.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sponser">
                <img src="/src/assets/Pics/fosterlogo.png" alt="Sponsor Logo" />
                <h5>SPONSER</h5>
                <p>
                  If you are unable to adopt or foster an animal, but still want
                  to make a difference, the good news is that you can!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
