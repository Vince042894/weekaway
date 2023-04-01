import React, { useState } from "react";
import { FaBars, FaFacebook } from "react-icons/fa";

import { FaGooglePlusG, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80 ">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex justify-between">
        <FaFacebook className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      {/* Hamburger icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* Mobile menu */}
      <div
        onClick={handleNav}
        className={
          // "overflow-y-hidden md:hidden ease-in duration-300 adsolute text-yellow-100 left-0 top-0 w-full h-screen bg-black/90 px-4 py-5 flex flex-col"
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "hidden absolute top-0 h-screen left -[-100%] ease-in duration-500  left-0 z-0"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
