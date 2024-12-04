import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">FUREVER HOME</h1>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition"
            aria-label="Pinterest"
          >
            <i className="fab fa-pinterest"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} FurEver Home. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
