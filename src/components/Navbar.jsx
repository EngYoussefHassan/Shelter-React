import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "./auth";
import { auth } from "../firebase"; // Firebase auth import
import { signOut } from "firebase/auth"; // Firebase signOut method

const Navbar = ({ user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  const [authModal, setAuthModal] = useState(null); // Tracks which modal is open ('signIn' or 'logIn')

  const openAuthModal = (type) => {
    setAuthModal(type); // Open the respective modal
  };

  const closeAuthModal = () => {
    setAuthModal(null); // Close the modal
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear the user state
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error logging out:", error);
    }
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
          <Link to="/" className="hover:text-blue-700">
            Home
          </Link>
          <Link to="/adopt-foster" className="hover:text-blue-700">
            Adopt/Foster
          </Link>
          <Link to="/about" className="hover:text-blue-700">
            About Us
          </Link>
          <Link to="/successful-adoption" className="hover:text-blue-700">
            Successful Adoptions
          </Link>

          {/* Dropdown for "How To" */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-700 focus:outline-none"
            >
              How To
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 z-10 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <Link
                  to="/how-to/adopt"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleDropdownItemClick}
                >
                  How to Adopt
                </Link>
                <Link
                  to="/how-to/upload"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleDropdownItemClick}
                >
                  How to Upload
                </Link>
                <Link
                  to="/how-to/sponsor"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleDropdownItemClick}
                >
                  How to Sponsor
                </Link>
              </div>
            )}
          </div>

          {user && (
            <Link to="/add-animal" className="hover:text-blue-700">
              Add Animal
            </Link>
          )}
        </div>

        {/* Authentication Buttons */}
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="text-blue-700 border border-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white"
            >
              Log Out
            </button>
          ) : (
            <>
              <button
                onClick={() => openAuthModal("signIn")}
                className="text-blue-700 border border-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white"
              >
                Sign up
              </button>
              <button
                onClick={() => openAuthModal("logIn")}
                className="text-blue-700 border border-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white"
              >
                Log In
              </button>
            </>
          )}
          <Link
            to="/adopt-foster"
            className="hidden md:block rounded-[5px] bg-blue-950 text-white text-center px-4 py-2 hover:bg-blue-800"
          >
            Adopt Now
          </Link>
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
          <Link to="/" className="hover:text-blue-700" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            to="/adopt-foster"
            className="hover:text-blue-700"
            onClick={toggleMenu}
          >
            Adopt/Foster
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-700"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/successful-adoption"
            className="hover:text-blue-700"
            onClick={toggleMenu}
          >
            Successful Adoptions
          </Link>

          {/* Mobile Dropdown for "How To" */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-700 focus:outline-none"
            >
              How To
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 z-10 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <Link
                  to="/how-to/adopt"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleDropdownItemClick}
                >
                  How to Adopt
                </Link>
                <Link
                  to="/how-to/upload"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleDropdownItemClick}
                >
                  How to Upload
                </Link>
                <Link
                  to="/how-to/sponsor"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleDropdownItemClick}
                >
                  How to Sponsor
                </Link>
              </div>
            )}
          </div>

          {user && (
            <Link
              to="/add-animal"
              className="hover:text-blue-700"
              onClick={toggleMenu}
            >
              Add Animal
            </Link>
          )}
        </div>
      )}

      {authModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={closeAuthModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {authModal === "signIn" ? "Sign In" : "Log In"}
            </h2>
            <Auth /> {/* Authentication Form */}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
