import React from "react";
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
const Navbar = () => {
  return (
    <nav className=" relative container mx-auto p-3">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <h1 className="font-bold text-4xl text">FurEver</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-700">
            Adopt
          </a>
          <a href="#" className="hover:text-blue-700">
            Foster
          </a>
          <a href="#" className="hover:text-blue-700">
            Sponser
          </a>
          <a href="#" className="hover:text-blue-700">
            About Us
          </a>
        </div>
        <div>
          <button
            className="hidden md:block rounded-[5px] bg-blue-950 text-white px-4 py-2 hover:bg-blue-800"
            onclick=""
          >
            Adopt Now
          </button>
        </div>
        <button
          id="menu-btn"
          className="open block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className=" absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Adopt</a>
          <a href="#">Foster</a>
          <a href="#">Sponser</a>
          <a href="#">About Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
