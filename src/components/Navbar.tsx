import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/WhatsAp-removebg-preview.png";
import SearchBar from "./SearchBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-gray-400">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="logo text-xl font-bold">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-20 h-auto" />
          </Link>
        </div>

        <button
          className="block md:hidden text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-5 h-5 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-0 md:space-y-0
            md:space-x-0 `}
        >
          <div className="flex-grow flex justify-center">
            {" "}
            <SearchBar />{" "}
          </div>
          <Link
            to="/"
            className="block px-3 py-2 text-gray-400 hover:text-gray-600 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="block px-3 py-2 text-gray-400 hover:text-gray-600 rounded-md"
          >
            Product
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-gray-400 hover:text-gray-600 rounded-md"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-gray-400 hover:text-gray-600 rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
