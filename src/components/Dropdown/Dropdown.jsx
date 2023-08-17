import { useState } from "react";
import { CgRowFirst, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className=" p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <CgClose className="w-5 h-5 ease-in-out transition-opacity delay-75" />
        ) : (
          <CgRowFirst className="w-5 transition-opacity h-5 ease-in-out delay-75" />
        )}
      </button>
      {isMenuOpen && (
        <div className="absolute mt-1 w-[60vw] bg-white border rounded-md shadow-lg">
          <div className="py-1">
            <Link
              to="/software-development"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={closeMenu}
            >
              Software Development
            </Link>
            <hr />
            <Link
              to="/it-audit"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={closeMenu}
            >
              IT Audit
            </Link>
            <hr />
            <Link
              to="/user-experience"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={closeMenu}
            >
              User Experience
            </Link>
            <hr />
            <Link
              to="/digital-marketing"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={closeMenu}
            >
              Digital Marketing
            </Link>
            <hr />
            <Link
              to="/operation-infraestructure"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={closeMenu}
            >
              Operations and Infrastructure
            </Link>
            <hr />
            <Link
              to="/technology-outsourcing"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={closeMenu}
            >
              Technology Outsourcing
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
