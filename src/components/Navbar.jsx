import React, { useState } from "react";

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="relative container mx-auto py-2">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="pt-2">
          <h1 className="font-bold text-4xl">FurEver</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-700">
            Adopt/Foster
          </a>
          <a href="#" className="hover:text-blue-700">
            Sponsor
          </a>
          <a href="#" className="hover:text-blue-700">
            About Us
          </a>
        </div>

        {/* Desktop "Adopt Now" Button */}
        <div>
          <button className="hidden md:block rounded-[5px] bg-blue-950 text-white px-4 py-2 hover:bg-blue-800">
            Adopt Now
          </button>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={toggleMenu}
          className={`block hamburger md:hidden focus:outline-none ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          id="menu"
          className="md:hidden flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 absolute drop-shadow-md"
        >
          <a href="#" className="hover:text-blue-700">
            Adopt/Foster
          </a>
          <a href="#" className="hover:text-blue-700">
            Sponsor
          </a>
          <a href="#" className="hover:text-blue-700">
            About Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
