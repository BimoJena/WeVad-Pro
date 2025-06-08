import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center flex-shrink-0 text-xl font-bold">
            <span className="text-gray-100">WeVad</span>
            <span className="text-xs bg-gray-100 text-slate-900 ml-1 px-1 rounded-sm">media</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors duration-300">Services</Link>
            <Link to="/aboutus" className="hover:text-blue-400 transition-colors duration-300">About Us</Link>
            <Link
              to="/contactForm"
              className="bg-blue-600 text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col mt-2 space-y-2">
            <Link to="/" className="hover:text-blue-400 py-3 transition-colors duration-300">Home</Link>
            <Link to="/aboutus" className="hover:text-blue-400 py-3 transition-colors duration-300">About</Link>
            <Link to="/services" className="hover:text-blue-400 py-3 transition-colors duration-300">Services</Link>
            <Link to="/contactForm" className="hover:text-blue-400 py-3  transition-colors duration-300">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
