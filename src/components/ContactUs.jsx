import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-5 m-auto text-center">
              <h1>Contact Us</h1>
              <h6>Always Be In Touch</h6>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-9 m-auto">
              <div className="row">
                <div className="col-lg-4">
                  <h6>LOCATION:</h6>
                  <p>123 Paws Street, Barktown, Cuddle County, 56789, USA</p>
                  <h6>PHONE:</h6>
                  <p>+1 (555) 123-4567</p>
                  <h6>EMAIL:</h6>
                  <p>contact@fureverhome.org</p>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" className="form-control bg-light" placeholder="First Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control bg-light" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 py-3">
                      <textarea className="form-control bg-light" placeholder="Enter your Message Here" rows="5"></textarea>
                    </div>
                  </div>
                  <button className="btn1">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-9 m-auto text-center">
              <h1>Join Our Community</h1>
              <input type="text" className="px-3" placeholder="Enter Your Email" />
              <button className="btn3">Submit</button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-11 m-auto text-center">
              <div className="row">
                <div className="col-lg-4 py-3">
                  <a href="#" className="pb-3">Customer Care</a>
                </div>
                <div className="col-lg-4 py-3">
                  <a href="#" className="pb-3">Support</a>
                </div>
                <div className="col-lg-4 py-3">
                  <a href="#" className="pb-3">Privacy Policy</a>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-12">
                  <span><i className="fa-brands fa-facebook fab"></i></span>
                  <span><i className="fa-brands fa-twitter fab"></i></span>
                  <span><i className="fa-brands fa-instagram fab"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
