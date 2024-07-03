import React, { useState } from "react";
import { Link } from "react-scroll";
import { CiMenuBurger } from "react-icons/ci";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-lg w-full h-16 fixed top-0 left-0 flex justify-between items-center px-4 md:px-20 z-50">
      <span className="text-2xl font-semibold">eStudy</span>

      <div className="md:hidden">
        <CiMenuBurger className="text-2xl cursor-pointer" onClick={toggleMenu} />
      </div>

      <div className={`fixed top-16 left-0 w-full bg-white md:static md:w-auto md:bg-transparent md:flex ${isOpen ? "block" : "hidden"} transition-transform duration-400 ease-in-out`}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-64} 
          className="block md:inline-block mx-3 text-base font-normal hover:text-green-700 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-64}
          className="block md:inline-block mx-3 text-base font-normal hover:text-green-700 cursor-pointer"
        >
          About
        </Link>
        <Link
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          offset={-64}
          className="block md:inline-block mx-3 text-base font-normal hover:text-green-700 cursor-pointer"
        >
          Courses
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          offset={-64} 
          className="block md:inline-block mx-3 text-base font-normal hover:text-green-700 cursor-pointer"
        >
          Reviews
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-64} 
          className="block md:inline-block mx-3 text-base font-normal hover:text-green-700 cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

