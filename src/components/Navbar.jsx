import React from "react";
import logoImage from "../assets/900px-Android_O_Preview_Logo.png";
import { ChevronDownIcon, BellIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white font-semibold text-black shadow-lg font-sans z-100">
      {/* Logo */}
      <div className="flex justify-around">
        <div>
          <img src={logoImage} alt="Logo" className="h-[100%] w-10 mr-2" />
        </div>

        {/* Filter Dropdown */}
        <div className="relative mx-3">
          <select className="appearance-none bg-transparent rounded-md py-2 pl-3 pr-8 border border-gray-300 focus:outline-none focus:border-indigo-500">
            <option>Filter1</option>
            <option>Filter2 </option>
            <option>Filter3 </option>
          </select>
          <ChevronDownIcon className="absolute top-1/2 right-3 h-4 w-4 transform -translate-y-1/2" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 ">
          <a href="/about" className=" hover:text-gray-400 mx-3">
            About Us
          </a>
          <a href="/blog" className=" hover:text-gray-400 ">
            Blog
          </a>
        </div>
      </div>
      <div className="mr-3">
        <BellIcon className="h-6 w-6 hover:text-gray-400" />
      </div>
    </nav>
  );
};

export default Navbar;
